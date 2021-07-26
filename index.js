import express from "express";
import cors from "cors";
import helmet from "helmet";

let app = express();

// application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.get("/", function (req, res) {
  res.json({ message: "Success " });
});
app.listen(4000, () => console.log("Server is running"));
