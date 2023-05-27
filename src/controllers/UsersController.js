const { uploadSingleImages } = require('../services/UploadImagesService')
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createFilesPhotosProfile = async (req, res) => {
    try {
        const path = {
            'path_url': 'users/original',
            'path_ori': 'users/original',
            'path_large_thumbnail': 'users/large_thumbnail',
            'path_medium_thumbnail': 'users/medium_thumbnail',
            'path_small_thumbnail': 'users/small_thumbnail',
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

const createFilesCoversProfile = async (req, res) => {
    try {
        const path = {
            'path_url': 'covers_users/original',
            'path_ori': 'covers_users/original',
            'path_large_thumbnail': 'covers_users/large_thumbnail',
            'path_medium_thumbnail': 'covers_users/medium_thumbnail',
            'path_small_thumbnail': 'covers_users/small_thumbnail',
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


module.exports = { createFilesPhotosProfile, createFilesCoversProfile };