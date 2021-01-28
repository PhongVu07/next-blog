import { GetStaticProps } from "next";
import get from "lodash/get";
import dbConnect from "../utils/dbConnect";
import Post, { IPost } from "../models/post";

interface IHomePageProps {
  postList: IPost[];
}

const HomePage = (props: IHomePageProps) => {
  const { postList } = props;
  return (
    <>
      <h1>Home</h1>
      {Array.isArray(postList) && postList.map((post) => <p>{post.title}</p>)}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();

  const postListData: IPost[] = await Post.find().lean();
  const postList = JSON.parse(JSON.stringify(postListData));

  return {
    props: { postList },
  };
};

export default HomePage;
