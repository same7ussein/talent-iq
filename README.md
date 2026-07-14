# Video Calling Interview

Full-stack video interview application with:
- Frontend: React + Vite + TypeScript + Clerk
- Backend: Node.js + Express + MongoDB + Inngest

## Project Structure

- `frontend/`: UI app
- `backend/`: API server
- `package.json` (root): helper scripts for build/start

## Prerequisites

- Node.js 18+
- npm 9+
- MongoDB connection string
- Clerk keys
- Stream keys
- Inngest keys

## Environment Variables

Create a file at `backend/.env`:

```env
PORT=5001
DB_URL=your_mongodb_connection_string
NODE_ENV=development
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLIENT_URL=http://localhost:5173
```

Create a file at `frontend/.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Install Dependencies

Install root dependencies:

```bash
npm install
```

Install backend and frontend dependencies:

```bash
npm install --prefix backend
npm install --prefix frontend
```

## Run Locally

Start backend:

```bash
npm run dev --prefix backend
```

Start frontend (in another terminal):

```bash
npm run dev --prefix frontend
```

Frontend URL: `http://localhost:5173`

## Production Commands

Build frontend and install project dependencies:

```bash
npm run build
```

Start backend server:

```bash
npm start
```

## Git Push (Personal Account)

If this repository should push to your personal account:

```bash
git remote add origin https://github.com/same7ussein/talent-iq.git
```

If `origin` already exists:

```bash
git remote set-url origin https://github.com/same7ussein/talent-iq.git
```

Then push:

```bash
git push -u origin master
```
