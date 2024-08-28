import School from "../models/schoolModel.js";
import { calculateDistance } from "../utils/distance.js";

export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ message: "All fields are required !" });
    }

    const school = new School(null, name, address, latitude, longitude);
    await school.save();
    res.status(201).json({ message: "School added successfully !", school });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server error !" });
  }
};

export const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Please fill required fields !" });
    }

    const [schools] = await School.fetchAll();

    const sortedSchools = schools
      .map((school) => {
        const distance = calculateDistance(
          latitude,
          longitude,
          school.latitude,
          school.longitude
        );
        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server error." });
  }
};
