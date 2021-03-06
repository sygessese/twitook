import { Router } from "express";
import controller from "./post.controller";

const router = Router();

// api/posts/
router
  .route("/thread/:thread_id")
  .post(controller.createPost)
  .get(controller.getPosts)
  .delete(controller.deletePost)
  .put(controller.updatePost);

router.route("/:post_id").put(controller.addReply);

export default router;
