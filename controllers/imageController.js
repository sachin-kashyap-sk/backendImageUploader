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
      return res
        .status(201)
        .json({ statusCode: 201, data: "File uploaded successfully" });
    } catch (err) {
      return res.status(500).json({ statusCode: 500, message: "Server Error" });
    }
  },
};
