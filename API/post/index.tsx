import { api } from "../";
import { IApiResponse } from "../../interfaces/api";
import { IPost } from "../../models/post";
import routes from "../../routes";

export async function createBlogPost(
  postData: IPost
): Promise<IApiResponse<IPost>> {
  try {
    const response = await api.post(routes.api.post.value, postData);
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
