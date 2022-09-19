const { Router } = require("express");
const { imageUpload, getAllImages } = require("../controllers/imageController");
const router = Router();
const upload = require("../multer");

router.get("/files", getAllImages);
router.post("/files", upload.single("file"), imageUpload);

module.exports = router;
