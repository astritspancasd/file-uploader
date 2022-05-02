const express = require("express");
const router = express.Router();

const { upload, uploadInfo } = require("../controllers/file");
const { delay } = require("../middlewares/delay");
const { imageUpload } = require("../middlewares/file-uploader");

router.get("/info", uploadInfo);
router.post("/upload", delay, imageUpload.array("image"), upload);

module.exports = router;
