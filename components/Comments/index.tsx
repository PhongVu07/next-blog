import { DiscussionEmbed } from "disqus-react";
import { IPost } from "../../models/post";

interface ICommentsProps {
  post: IPost;
}

const Comments = ({ post }: ICommentsProps) => {
  const { slug } = post;

  const disqusShortname = "phongvublog";
  const disqusConfig = {
    // url: `${process.env.FE_BASE_URL}/blog/${slug}`,
    url: `https://anoobcoder.com/blog/${slug}`,
    identifier: post._id,
    title: post.title,
    disqus_developer: 1,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default Comments;
