import db from "../config/db.js";

class School {
  constructor(id, name, address, latitude, longitude) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  save() {
    return db.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [this.name, this.address, this.latitude, this.longitude]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM schools");
  }
}

export default School;
