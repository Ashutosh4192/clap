import { StreamChat } from "stream-chat";
import { ENV } from "../config/env.js";

const serverClient = StreamChat.getInstance(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRET
);

export const upserStramUser = async (userData) => {
  try {
    await streamClient.upsertUser(userData);
    console.log("Stream User upserted successfully:", userData.name);
    return userData;
  } catch (error) {
    console.error("Error upserting user:", error);
  }
};

export const deleteStramUser = async (userId) => {
  try {
    await streamClient.deleteUser(userId);
    console.log("Stream User deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    const userIdString = userId.toString();
    return streamClient.createToken(userIdString);
  } catch (error) {
    console.error("Error generating stream token:", error);
    return null;
  }
};
