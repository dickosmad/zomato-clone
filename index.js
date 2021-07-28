require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth";

// Database connection
import ConnectDB from "./database/connection";
let app = express();

// application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

// microservices routes
app.use("/auth", Auth);

app.get("/", function (req, res) {
  res.json({ message: "Success " });
});
app.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() =>
      console.log("Server is running, but database connection failed... ")
    )
);
