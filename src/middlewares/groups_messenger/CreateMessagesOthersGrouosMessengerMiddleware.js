const util = require("util");
const fs = require('fs')
const multer = require("multer");
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

fs.access('./storage/groups_messenger/messages/' + date + '/others', async (error) => {
    if (error) {
        fs.mkdirSync('./storage/groups_messenger/messages/' + date + '/others', { recursive: true });
    }
});

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/groups_messenger/messages/' + date + '/others/');
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let uploadFile = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "file/pdf" | file.mimetype == "file/doc") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error('Only .pdf, .doc format allowed!'))
        }
    }
}).single("files");


let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
