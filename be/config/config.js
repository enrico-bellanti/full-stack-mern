import dotenv from "dotenv";

dotenv.config();

export default config = {
  secret: process.env.JWT_SECRET,
};
