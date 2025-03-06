import { randomUUID } from "crypto";
import * as multer from "multer";
import path = require("path");

const newFilenameFunction = (og_filename:any, options:any) => {
	const filename = og_filename.split(' ').join('_')
	const filenameArray = filename.split('.')
	filenameArray.pop()
	const filenameWithoutExtention = filenameArray.join('.')

	const newName = filenameWithoutExtention + Date.now() + "." + options.fileFormat
	return newName
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null,  path.join(__dirname, "../../../../public/uploads"))
  },
  filename: function (req, file, cb) {
    cb(null, randomUUID() + "." + file.mimetype.split('/')[1])
  }
});

const upload = multer({ storage: storage })
module.exports = upload.single('picture')
