const cloudinary = require("../cloudinary");
const convertBufferToString = require("../convertBufferToString");
const Image = require("../models/image");
module.exports = {
  async getAllImages(_, res) {
    try {
      const data = await Image.find({});
      return res.json({ statsCode: 200, data });
    } catch (err) {
      return res.status(500).json({ statusCode: 500, message: "Server Error" });
    }
  },
  
  async imageUpload(req, res) {
    try {
      const imageContent = await convertBufferToString(
        req.file.originalname,
        req.file.buffer
      );
      const imageResponse = await cloudinary.uploader.upload(imageContent);
      const imageUrl = imageResponse.secure_url;
      const data = await Image.create({
        title: req.file.originalname,
        url: imageUrl,
      });
      return res.status(201).json({ statusCode: 201, data });
    } catch (err) {
      return res.status(500).json({ statusCode: 500, message: "Server Error" });
    }
  },
};
