import { GetStaticPaths, GetStaticProps } from "next";
import get from "lodash/get";
import dayjs from "dayjs";
import PostContainer from "../../../components/Post/PostContainer";
import Layout from "../../../components/Layout";
import Image from "../../../components/Image";
import PostFooter from "../../../components/Post/PostFooter";
import PostContent from "../../../components/Post/PostContent";
import dbConnect from "../../../utils/dbConnect";
import Post, { IPost } from "../../../models/post";
import styles from "./post.module.scss";
import React from "react";

interface IPostPageProps {
  postDetail: IPost;
}
const PostPage = ({ postDetail }: IPostPageProps) => {
  const {
    title,
    content,
    description,
    coverImageUrl,
    createdAt,
    updatedAt,
  } = postDetail;

  return (
    <Layout>
      <PostContainer>
        <h1 className={styles.postTitle}>{title}</h1>
        <h4 className={styles.description}>{description}</h4>
        <div className={styles.coverImage}>
          <Image
            src="https://images.unsplash.com/photo-1610302521145-3376354f1735?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2202&q=80"
            alt={title}
            width={2000}
            height={1000}
          />
        </div>
        <div className={styles.metaData}>
          <span>{dayjs(updatedAt).format("MMM D, YYYY")}</span>
        </div>
        <PostContent content={content} />
      </PostContainer>
      <PostFooter post={postDetail} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect();

  const posts = await Post.find({ isDeleted: { $ne: true } });
  const paths = posts.map((post) => ({ params: { postSlug: post.slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await dbConnect();

  const postSlug = get(params, "postSlug");

  const postData = await Post.findOne({ slug: postSlug }).lean();
  const postDetail = JSON.parse(JSON.stringify(postData));

  return {
    props: { postDetail },
  };
};

export default PostPage;
