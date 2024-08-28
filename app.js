import express from "express";
import dotenv from "dotenv";
import schoolRoutes from "./routes/schoolRoutes.js";

const app = express();
app.use(express.json());

dotenv.config({ path: "config/.env" });

const PORT = process.env.PORT;

app.use("/api/v1", schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
