import express, { json } from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import "dotenv/config"
const app = express();
const PORT = process.env.PORT ?? 1234

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get("/", (req, res) => {
  res.send("h1");
});

app.listen(PORT, () => console.log("app.js server is work"));
