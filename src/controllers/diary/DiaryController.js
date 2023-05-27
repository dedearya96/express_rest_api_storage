const { uploadSingleImages } = require('../../services/UploadImagesService')
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createFilesDiary = async (req, res) => {
    try {
        const path = {
            'path_url': 'diary/' + date + '/images',
            'path_ori': 'diary/' + date + '/images/original',
            'path_large_thumbnail': 'diary/' + date + '/images/large_thumbnail',
            'path_medium_thumbnail': 'diary/' + date + '/images/medium_thumbnail',
            'path_small_thumbnail': 'diary/' + date + '/images/small_thumbnail',
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


module.exports = { createFilesDiary };