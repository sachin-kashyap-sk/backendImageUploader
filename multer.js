var multer = require("multer");

var upload = multer({
  storage: multer.diskStorage({
    destination: "upload/",
    filename: function (_, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: function (_, file, cb) {
    if (
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      cb(null, true);
    } else {
      var newError = new Error("File type is incorrect");
      newError.name = "MulterError";
      newError.status = 400;
      cb(newError, false);
    }
  },
});

module.exports = upload;
