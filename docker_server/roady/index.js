const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  console.log("------- Roady ----------");
  res.send("Roady");
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  // Save the user to the database
  res.status(201).json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
