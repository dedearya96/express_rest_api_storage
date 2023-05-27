const { uploadSingleImages } = require('../services/UploadImagesService');
const uploadVideos = require('../middlewares/groups_messenger/CreateMessagesVideosGroupsMessengerMiddleware');
const uploadOthers = require('../middlewares/groups_messenger/CreateMessagesOthersGrouosMessengerMiddleware');
const  dates  = require('date-and-time');
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createFilesGroupsMessenger = async (req, res) => {
    try {
        const path = {
            'path_url': 'groups_messenger/photos/original',
            'path_ori': 'groups_messenger/photos/original',
            'path_large_thumbnail': 'groups_messenger/photos/large_thumbnail',
            'path_medium_thumbnail': 'groups_messenger/photos/medium_thumbnail',
            'path_small_thumbnail': 'groups_messenger/photos/small_thumbnail',
        };
        const data = await uploadSingleImages(req, path);
        res.json({
            'code': 201,
            'status': true,
            'message': "Uploaded the file successfully",
            data
        }, 201);

    } catch (err) {
        return res.json({
            'code': 500,
            'status': false,
            'message': 'Internal Server Error',
            'error': err.message
        }, 500)
    }

}

const createMessagesGroupImages = async (req, res) => {
    try {
        const path = {
            'path_url': 'groups_messenger/messages/' + date + '/images',
            'path_ori': 'groups_messenger/messages/' + date + '/images/original',
            'path_large_thumbnail': 'groups_messenger/messages/' + date + '/images/large_thumbnail',
            'path_medium_thumbnail': 'groups_messenger/messages/' + date + '/images/medium_thumbnail',
            'path_small_thumbnail': 'groups_messenger/messages/' + date + '/images/small_thumbnail',
        };
        const data = await uploadSingleImages(req, path);
        res.json({
            'code': 201,
            'status': true,
            'message': "Uploaded the file successfully",
            data
        }, 201);

    } catch (err) {
        return res.json({
            'code': 500,
            'status': false,
            'message': 'Internal Server Error',
            'error': err.message
        }, 500)
    }

}

const createMessagesGroupVideos = async (req, res) => {
    try {
        await uploadVideos(req, res, function (err) {
            if (err) {
                return res.status(400).send({
                    code: 400,
                    status: false,
                    message: err.message
                })
            }
            const data = [
                'groups_messenger/messages/' + date + '/videos/original/' + req.file.originalname
            ]
            res.status(200).json({
                code: 200,
                status: true,
                message: "Uploaded the file successfully",
                data: data
            });
        });

    } catch (err) {
        res.status(500).json({
            code: 500,
            status: false,
            message: `Internal Server Error`,
        });
    }
};

const createMessagesGroupOthers = async (req, res) => {
    try {
        await uploadOthers(req, res, function (err) {
            if (err) {
                return res.status(400).send({
                    code: 400,
                    status: false,
                    message: err.message
                })
            }
            const data = [
                'groups_messenger/messages/' + date + '/others/' + req.file.originalname
            ]
            res.status(200).json({
                code: 200,
                status: true,
                message: "Uploaded the file successfully",
                data: data
            });
        });

    } catch (err) {
        res.status(500).json({
            code: 500,
            status: false,
            message: `Internal Server Error`,
        });
    }
};


module.exports = { createFilesGroupsMessenger, createMessagesGroupImages, createMessagesGroupVideos, createMessagesGroupOthers };