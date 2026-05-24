import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/login", (req, res) => {
  res.send(`
     <form action="/submit" method="post">
    <input type="email" placeholder="Enter Email" name="email">

    <br><br>

    <input type="password" placeholder="Enter Password" name="password">

    <br><br>

    <button type="submit">Login</button>
  </form>
    `);
});

app.post("/submit", (req, res) => {
    console.log(req.body)
  res.send("<h1>Submit Page</h1>");
});

app.get("/user", (req, res) => {
  res.send("<h1>User Page</h1>");
});

app.listen(3801, () => {
  console.log("Server is running on port 3800");
});
