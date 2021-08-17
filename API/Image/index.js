// libraries
import express from "express";
import multer from "multer";

// Database Models
import { ImageModel } from "../../database/allModel";
// Utils : https
import { s3Upload } from "../../Utils/AWS/s3";
const Router = express.Router();
// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route     /image
Des       Upload given image to S3 bucket and saves file links to mongobd
Params    none
Access    Public
Method    GET 
*/

Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    // S3 bucket options
    const bucketOptions = {
      Bucket: "dicko-zomato-clone",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimeType,
      ACL: "public-read",
    };

    const uploadImage = await s3Upload(bucketOptions);
    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
