import React from "react";
import { useForm, useWatch } from "react-hook-form";
import PostContent from "../../../components/Post/PostContent";
import { IPost } from "../../../models/post";
import { createBlogPost } from "../../../API/post";
import styles from "./adminPage.module.scss";

const AdminPage = () => {
  const { control, register, handleSubmit } = useForm();
  const content = useWatch<string>({ control, name: "content" }) || "";

  async function handleSaveBlog(data: IPost) {
    const { title } = data;
    const slug = title.trim().toLowerCase().replace(/\s/g, "-");
    const postData = {
      ...data,
      slug,
      updatedAt: Date(),
    };

    try {
      const newPost = await createBlogPost(postData);
      console.log(newPost);
    } catch (e) {
      console.log("Save blog post error:", e);
    }
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.inputContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(handleSaveBlog)();
        }}
      >
        <input name="title" placeholder="Title" ref={register} />
        <textarea
          name="description"
          placeholder="Description"
          ref={register}
          rows={5}
        />
        <input
          name="coverImageUrl"
          placeholder="Cover image url"
          ref={register}
        />
        <input name="thumbnailUrl" placeholder="Thumbnail Url" ref={register} />
        <textarea
          name="content"
          placeholder="Content"
          ref={register}
          rows={20}
          className={styles.blogContentInput}
        />
        <button type="submit">Save</button>
      </form>
      <div className={styles.markdownContainer}>
        <PostContent content={content} />
      </div>
    </div>
  );
};
export default AdminPage;
