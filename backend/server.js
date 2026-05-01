const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let students = [];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
