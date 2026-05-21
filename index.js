import express from 'express';
import path from 'path';

const app = express();

const publicPath = path.resolve('public');

app.use(express.static(publicPath));

app.get("/", (req, resp) => {
  const abspath = path.resolve("view/home.html");
  resp.sendFile(abspath);
});

app.get("/login", (req, resp) => {
  const abspath = path.resolve("view/login.html");
  resp.sendFile(abspath);
});

app.get("/about", (req, resp) => {
  const abspath = path.resolve("view/about.html");
  resp.sendFile(abspath);
});

app.listen(3860, () => {
  console.log("Server running on port 3860");
});