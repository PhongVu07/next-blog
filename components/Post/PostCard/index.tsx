import Link from "next/link";
import dayjs from "dayjs";
import Image from "../../Image";
import { IPost } from "../../../models/post";
import styles from "./postCard.module.scss";

interface IPostCardProps {
  post: IPost;
}
const PostCard = ({ post }: IPostCardProps) => {
  const {
    thumbnailUrl = "image/default-thumbnail.jpeg",
    title,
    updatedAt,
    slug,
  } = post;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={thumbnailUrl}
          alt="post thumbnail"
          width={350}
          height={200}
        />
      </div>
      <div className={styles.informationContainer}>
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
        <span>{dayjs(updatedAt).format("MMM D, YYYY")}</span>
      </div>
    </div>
  );
};
export default PostCard;
