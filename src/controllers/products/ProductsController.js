const { uploadSingleImages } = require('../../services/UploadImagesService')
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createFilesProducts = async (req, res) => {
    try {
        const path = {
            'path_url': 'products/' + date + '/images',
            'path_ori': 'products/' + date + '/images/original',
            'path_large_thumbnail': 'products/' + date + '/images/large_thumbnail',
            'path_medium_thumbnail': 'products/' + date + '/images/medium_thumbnail',
            'path_small_thumbnail': 'products/' + date + '/images/small_thumbnail',
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


module.exports = { createFilesProducts };