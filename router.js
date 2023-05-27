const express = require("express");
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" | file.mimetype == "image/png" | file.mimetype == "image/jpg" | file.mimetype == "image/jpeg") {
            cb(null, true)
        } else {
            cb(null, false)
            return cb('Only .png, .jpg, .jpeg format allowed!')
        }
    }
})

const auctionsController = require("./src/controllers/auctions/AuctionsController")
const reviewsAuctionsController = require("./src/controllers/auctions/ReviewsAuctionsController")
const replyReviewsAuctionsController = require("./src/controllers/auctions/ReplyReviewsAuctionsController")
const diaryController = require("./src/controllers/diary/DiaryController")
const commentsDiaryController = require("./src/controllers/diary/CommentsDiaryController")
const replyCommentsDiaryController = require("./src/controllers/diary/ReplyCommentsDiaryController")
const momentsController = require("./src/controllers/moments/MomentsController")
const commentsMomentsController = require("./src/controllers/moments/CommentsMomentsController")
const replyCommentsMomentsController = require("./src/controllers/moments/ReplyCommentsMomentsController")
const commentsPhotosController = require("./src/controllers/photos/CommentsPhotosController")
const replyCommentsPhotosController = require("./src/controllers/photos/ReplyCommentsPhotosController")
const postsController = require("./src/controllers/posts/PostsController.js")
const commentsPostsController = require("./src/controllers/posts/CommentsPostsController")
const replyCommentsPostsController = require("./src/controllers/posts/ReplyCommentsPostsController")
const productsController = require("./src/controllers/products/ProductsController")
const reviewsProductsController = require("./src/controllers/products/ReviewsProductsController")
const replyReviewsProductsController = require("./src/controllers/products/ReplyReviewsProductsController")
const restosController = require("./src/controllers/restos/RestosController")
const reviewsRestosController = require("./src/controllers/restos/ReviewsRestosController")
const replyReviewsRestosController = require("./src/controllers/restos/ReplyReviewsRestosController")
const productsRestosController = require("./src/controllers/restos/ProductsRestosController")
const reviewsProductsRestosController = require("./src/controllers/restos/ReviewsProductsRestosController")
const replyReviewsProductsRestosController = require("./src/controllers/restos/ReplyReviewsProductsRestosController")
const servicesController = require("./src/controllers/services/ServicesController")
const reviewsServicesController = require("./src/controllers/services/ReviewsServicesController")
const replyReviewsServicesController = require("./src/controllers/services/ReplyReviewsServicesController")
const productsServicesController = require("./src/controllers/services/ProductsServicesController")
const reviewsProductsServicesController = require("./src/controllers/services/ReviewsProductsServicesController")
const replyReviewsProductsServicesController = require("./src/controllers/services/ReplyReviewsProductsServicesController")
const storesController = require("./src/controllers/stores/StoresController")
const reviewsStoresController = require("./src/controllers/stores/ReviewsStoresController")
const replyReviewsStoresController = require("./src/controllers/stores/ReplyReviewsStoresController")
const storiesController = require("./src/controllers/stories/StoriesController")
const eventsController = require("./src/controllers/EventsController")
const groupsController = require("./src/controllers/GroupsController")
const groupsMessengerController = require("./src/controllers/GroupsMessengerController")
const messengerController = require("./src/controllers/MessengerController.js")
const usersController = require("./src/controllers/UsersController");


const router = express.Router();

router.get("/", function (req, res) {
    res.json({
        'code': 200,
        'message': 'Welcome to Trafaline Storage'
    });
});

router.post('/moments/create-files-images', upload.single('images'), momentsController.createMomentsImages)//OK
router.post('/moments/create-files-videos', momentsController.createMomentsVideos)//OK
router.post('/moments/comments/create-files-images', upload.single('images'), commentsMomentsController.createFilesCommentsMoments)//OK
router.post('/moments/comments/reply/create-files-images', upload.single('images'), replyCommentsMomentsController.createFilesReplyCommentsMoments)//OK
router.post('/auctions/create-files-images', upload.single('images'), auctionsController.createFilesAuctions);//OK
router.post('/auctions/reviews/create-files-images', upload.single('images'), reviewsAuctionsController.createFilesReviewsAuctions);//OK
router.post('/auctions/reviews/reply/create-files-images', upload.single('images'), replyReviewsAuctionsController.createFilesReplyReviewsAuctions);//OK
router.post('/posts/create-files-images', upload.single('images'), postsController.createPostsImages)//OK
router.post('/posts/create-files-videos', postsController.createPostsVideos)//OK
router.post('/posts/create-files-tvs', postsController.createPostsTvs)//OK
router.post('/posts/comments/create-files-images', upload.single('images'), commentsPostsController.createFilesCommentsPosts)//OK
router.post('/posts/comments/reply/create-files-images', upload.single('images'), replyCommentsPostsController.createFilesReplyCommentsPosts)//OK
router.post('/products/create-files-images', upload.single('images'), productsController.createFilesProducts)//OK
router.post('/products/reviews/create-files-images', upload.single('images'), reviewsProductsController.createFilesReviewsProducts)//OK
router.post('/products/reviews/reply/create-files-images', upload.single('images'), replyReviewsProductsController.createFilesReplyReviewsProducts)//OK
router.post('/restos/create-files-images', upload.single('images'), restosController.createFilesRestos)//OK
router.post('/restos/reviews/create-files-images', upload.single('images'), reviewsRestosController.createFilesReviewsRestos)//OK
router.post('/restos/reviews/reply/create-files-images', upload.single('images'), replyReviewsRestosController.createFilesReplyReviewsRestos)//OK
router.post('/restos/products/create-files-images', upload.single('images'), productsRestosController.createFilesProductsRestos);//OK
router.post('/restos/products/reviews/create-files-images', upload.single('images'), reviewsProductsRestosController.createFilesReviewsProductsRestos)//OK
router.post('/restos/products/reviews/reply/create-files-images', upload.single('images'), replyReviewsProductsRestosController.createFilesReplyReviewsProductsRestos)//OK
router.post('/services/create-files-images', upload.single('images'), servicesController.createFilesServices)//OK
router.post('/services/reviews/create-files-images', upload.single('images'), reviewsServicesController.createFilesReviewsServices)//OK
router.post('/services/reviews/reply/create-files-images', upload.single('images'), replyReviewsServicesController.createFilesReplyReviewsServices)//OK
router.post('/services/products/create-files-images', upload.single('images'), productsServicesController.createFilesProductsServices)//OK
router.post('/services/products/reviews/create-files-images', upload.single('images'), reviewsProductsServicesController.createFilesReviewsProductsServices)//OK
router.post('/services/products/reviews/reply/create-files-images', upload.single('images'), replyReviewsProductsServicesController.createFilesReplyReviewsProductsServices)//OK
router.post('/stores/create-files-images', upload.single('images'), storesController.createFilesStores)//OK
router.post('/stores/reviews/create-files-images', upload.single('images'), reviewsStoresController.createFilesReviewsStores)//OK
router.post('/stores/reviews/reply/create-files-images', upload.single('images'), replyReviewsStoresController.createFilesReplyReviewsStores)//OK
router.post('/stories/create-files-images', upload.single('images'), storiesController.createStoriesImages)//OK
router.post('/stories/create-files-videos', storiesController.createStoriesVideos)//OK

router.post('/users/create-files-photos', upload.single('images'), usersController.createFilesPhotosProfile)//OK
router.post('/users/create-files-covers', upload.single('images'), usersController.createFilesCoversProfile)//OK

router.post('/groups/create-files-photos', upload.single('images'), groupsController.createFilesPhotosGroups)//OK
router.post('/groups/create-files-covers', upload.single('images'), groupsController.createFilesCoversGroups)//OK

router.post('/events/create-files-images', upload.single('images'), eventsController.createFilesEvents)//OK

router.post('/diary/create-files-images', upload.single('images'), diaryController.createFilesDiary)//OK
router.post('/diary/comments/create-files-images', upload.single('images'), commentsDiaryController.createFilesCommentsDiary)//OK
router.post('/diary/comments/reply/create-files-images', upload.single('images'), replyCommentsDiaryController.createFilesReplyCommentsDiary)//OK

router.post('/photos/comments/create-files-images', upload.single('images'), commentsPhotosController.createFilesCommentsPhotos)//OK
router.post('/photos/comments/reply/create-files-images', upload.single('images'), replyCommentsPhotosController.createFilesReplyCommentsPhotos)//OK


router.post('/messenger/groups/create-files-photos', upload.single('images'), groupsMessengerController.createFilesGroupsMessenger)//OK
router.post('/messenger/groups/create-files-messages-images', upload.single('images'), groupsMessengerController.createMessagesGroupImages)//OK
router.post('/messenger/groups/create-files-messages-videos', groupsMessengerController.createMessagesGroupVideos)//OK
router.post('/messenger/groups/create-files-messages-others', groupsMessengerController.createMessagesGroupOthers)//OK

router.post('/messenger/personal/create-files-messages-images', upload.single('images'), messengerController.createMessagesImages)//OK
router.post('/messenger/personal/create-files-messages-videos', messengerController.createMessagesVideos)//OK
router.post('/messenger/personal/create-files-messages-others', messengerController.createMessagesOthers)//OK



module.exports = router;