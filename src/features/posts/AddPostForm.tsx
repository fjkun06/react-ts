import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useAppDispatch } from "../../hooks";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

  const dispatch = useAppDispatch();

  const onSavePostClicked = (): void => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text" id="postTitle" value={title} onChange={onTitleChanged} />

        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
