import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "18330468",
  database: "school_management",
});

export default db.promise();
