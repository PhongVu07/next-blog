import styles from "./postContainer.module.scss";

interface IPostContainerProps {
  children: React.ReactNode;
}
const PostContainer = ({ children }: IPostContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default PostContainer;
