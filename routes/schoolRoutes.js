import express from "express";
import { addSchool, listSchools } from "../controllers/schoolController.js";

const router = express.Router();

router.route("/add/School").post(addSchool);
router.route("/get/listSchools").get(listSchools);

export default router;
