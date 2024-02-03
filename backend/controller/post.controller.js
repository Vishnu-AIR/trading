const postModel = require("../models/post.model");

exports.createPost = async (req, res) => {
  try {
    const { userId, ImageUrl, Caption , name , email , img } = req.body;

    const createPost = new postModel({ userId, ImageUrl, Caption , name , email });

    await createPost.save();

    return res.json({
      status: true,
      data: createPost,
      message: "post crested",
    });
  } catch (error) {
    return res.json({ status: false, data: [], message: "error: " + error });
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await postModel.find();

    return res.json({ success: true, data: posts });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

exports.likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.params.uid;
    let updatedPost;

    const isLiked = await postModel.findOne({
      _id: postId,
      likes: userId,
    });

    if (isLiked) {
        updatedPost = await postModel.findByIdAndUpdate(
        postId,
        { $pull: { likes: userId } },
        { new: true }
      );
    } else {
        updatedPost = await postModel.findByIdAndUpdate(
        postId,
        { $set: { likes: [userId] } },
        { new: true }
      );
    }

    res.json({
      success: true,
      likes: updatedPost.likes.length,
      data: updatedPost,
      message: "post Liked",
    });

    return

    //console.log(updatedPost.likes);
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error });
  }
};
