const postRouter = require('express').Router();
const postContoller = require('../controller/post.controller');

postRouter.post('/create',postContoller.createPost);
postRouter.get('/get',postContoller.getPost);
postRouter.patch('/:id/:uid',postContoller.likePost)

module.exports = postRouter;