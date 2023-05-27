const { uploadSingleImages } = require('../../services/UploadImagesService')
const dates = require('date-and-time')
const now = new Date();
const date = dates.format(now, 'YYYY-MM-DD');

const createFilesReplyReviewsProductsRestos = async (req, res) => {
    try {
        const path = {
            'path_url': 'reply_reviews_products_restos/' + date + '/images',
            'path_ori': 'reply_reviews_products_restos/' + date + '/images/original',
            'path_large_thumbnail': 'reply_reviews_products_restos/' + date + '/images/large_thumbnail',
            'path_medium_thumbnail': 'reply_reviews_products_restos/' + date + '/images/medium_thumbnail',
            'path_small_thumbnail': 'reply_reviews_products_restos/' + date + '/images/small_thumbnail',
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


module.exports = { createFilesReplyReviewsProductsRestos };