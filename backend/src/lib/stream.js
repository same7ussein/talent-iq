import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error(
    "STREAM_API_KEY and STREAM_API_SECRET must be defined in environment variables",
  );
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log(`Stream user with ID ${userData.id} upserted successfully.`);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log(`Stream user with ID ${userId} deleted successfully.`);
  } catch (error) {
    console.error("Error Deleting the Stream User:", error);
  }
};
