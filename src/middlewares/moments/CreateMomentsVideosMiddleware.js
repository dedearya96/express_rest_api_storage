const util = require("util");
const fs = require('fs')
const multer = require("multer");
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

fs.access('./storage/moments/' + date + '/videos', async (error) => {
    if (error) {
        fs.mkdirSync('./storage/moments/' + date + '/videos/original', { recursive: true });
    }
});

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/moments/' + date + '/videos/original/');
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "video/mp4" | file.mimetype == "video/3gp") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error('Only .mp4, .3gp format allowed!'))
        }
    }
}).single("videos");


let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
