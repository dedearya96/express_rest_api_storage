const { uploadUpdateImages} = require('../services/UploadImagesService')
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createFilesPhotosGroups = async (req, res) => {
    try {
        const path = {
            'path_url': 'groups/photos',
            'path_large_thumbnail': 'groups/photos/large',
            'path_small_thumbnail': 'groups/photos/thumbnail',
        };
        const data = await uploadUpdateImages(req, path);
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

const createFilesCoversGroups = async (req, res) => {
    try {
        const path = {
            'path_url': 'groups/covers',
            'path_large_thumbnail': 'groups/covers/large',
            'path_small_thumbnail': 'groups/covers/thumbnail',
        };
        const data = await uploadUpdateImages(req, path);
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


module.exports = { createFilesPhotosGroups, createFilesCoversGroups };