const { v4: uuid } = require("uuid");

const uploadInfo = async (req, res, next) => {
  const url = "/files/upload";
  const id = uuid();

  res.status(200).json({ url, id });
};

const upload = async (req, res, next) => {
  return res.status(200).json({ message: "Files uploaded successfully" });
};

module.exports = {
  uploadInfo,
  upload,
};
