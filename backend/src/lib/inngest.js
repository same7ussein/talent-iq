import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User } from "../models/userModel.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({
  id: "talent-iq",
});

const syncUser = inngest.createFunction(
  { id: "sync-user", name: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;
    const email = email_addresses?.[0]?.email_address;
    const newUser = {
      clerkId: id,
      email,
      name: `${first_name || ""} ${last_name || ""}`.trim() || email,
      profileImage: image_url,
    };
    await User.findOneAndUpdate({ clerkId: id }, newUser, { upsert: true });
    await upsertStreamUser({
      id,
      name: newUser.name,
      image: newUser.profileImage,
    });
  },
);

const deleteUser = inngest.createFunction(
  { id: "delete-user", name: "delete-user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.findOneAndDelete({ clerkId: id });

    await deleteStreamUser(id.toString());
  },
);
export const functions = [syncUser, deleteUser];
