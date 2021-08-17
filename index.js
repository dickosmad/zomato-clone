require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Google config
import googleAuthConfig from "./config/google.config";
// microservice routes
import Auth from "./API/Auth";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";
import User from "./API/User";
import Food from "./API/Food";
import Restaurant from "./API/Restaurant";

// Database connection
import ConnectDB from "./database/connection";
let app = express();

// application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
// passport config
googleAuthConfig(passport);

// microservices routes
app.use("/auth", Auth);
app.use("/image", Image);
app.use("/order", Order);
app.use("/reviews", Reviews);
app.use("/user", User);
app.use("/food", Food);
app.use("/restaurant", Restaurant);

console.log("key", process.env.AWS_S3_SECRET_KEY);

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
