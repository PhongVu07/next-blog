import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./postContent.module.scss";

interface IPostContentProps {
  content: string;
}
const PostContent = ({ content }: IPostContentProps) => {
  return <ReactMarkdown className={styles.content} source={content} />;
};
export default PostContent;
