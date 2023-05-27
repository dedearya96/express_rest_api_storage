const { uploadSingleImages } = require('../../services/UploadImagesService')
const uploadVideos = require('../../middlewares/moments/CreateMomentsVideosMiddleware')
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createMomentsImages = async (req, res) => {
    try {
        const path = {
            'path_url': 'moments/' + date + '/images',
            'path_ori': 'moments/' + date + '/images/original',
            'path_large_thumbnail': 'moments/' + date + '/images/large_thumbnail',
            'path_medium_thumbnail': 'moments/' + date + '/images/medium_thumbnail',
            'path_small_thumbnail': 'moments/' + date + '/images/small_thumbnail',
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

const createMomentsVideos = async (req, res) => {
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
                'moments/' + date + '/videos/original/' + req.file.originalname
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


module.exports = { createMomentsImages, createMomentsVideos };