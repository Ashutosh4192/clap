import express from "express";
import { ENV } from "./config/env";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! chatur");
});

console.log("Mongo uri:", ENV.MONGO_URI);

app.listen(ENV.PORT, () => console.log("Server started on port:", ENV.PORT));
