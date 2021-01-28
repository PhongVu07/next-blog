import React from "react";
import { IPost } from "../../../models/post";
import Comments from "../../Comments";
import Container from "../../Container";
import styles from "./postFooter.module.scss";

interface IFooterProps {
  post: IPost;
}

const PostFooter = ({ post }: IFooterProps) => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.commentContainer}>
          <Comments post={post} />
        </div>
      </Container>
    </div>
  );
};
export default PostFooter;
