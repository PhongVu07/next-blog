import { GetStaticProps } from "next";
import get from "lodash/get";
import dbConnect from "../utils/dbConnect";
import Post, { IPost } from "../models/post";
import React from "react";
import Layout from "../components/Layout";
import Jumbotron from "../components/Home/Jumbotron";
import styles from "./home.module.scss";
import Container from "../components/Container";
interface IHomePageProps {
  postList: IPost[];
}

const HomePage = (props: IHomePageProps) => {
  const { postList } = props;
  return (
    <Layout>
      <Container className={styles.container}>
        <Jumbotron />
      </Container>
    </Layout>
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
