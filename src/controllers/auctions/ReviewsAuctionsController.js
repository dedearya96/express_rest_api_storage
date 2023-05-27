const { uploadSingleImages } = require('../../services/UploadImagesService')
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createFilesReviewsAuctions = async (req, res) => {
    try {
        const path = {
            'path_url': 'reviews_auctions/' + date + '/images',
            'path_ori': 'reviews_auctions/' + date + '/images/original',
            'path_large_thumbnail': 'reviews_auctions/' + date + '/images/large_thumbnail',
            'path_medium_thumbnail': 'reviews_auctions/' + date + '/images/medium_thumbnail',
            'path_small_thumbnail': 'reviews_auctions/' + date + '/images/small_thumbnail',
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


module.exports = { createFilesReviewsAuctions };