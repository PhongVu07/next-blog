import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/post";
import handleError from "../../../utils/handleError";

export default async function handler(
  req: { body?: any; method?: any },
  res: {
    status: (
      arg0: number
    ) => {
      (): any;
      new (): any;
      json: { (arg0: { success: boolean; data?: any }): void; new (): any };
    };
  }
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        handleError(error, "pages/api/post/index.ts", "Get posts");
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const post = await Post.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        handleError(error, "pages/api/post/index.ts", "Create post");
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
