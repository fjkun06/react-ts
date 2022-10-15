import React from "react";
import { useAppSelector } from "../../hooks";

const PostsList = () => {
  const posts = useAppSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (<>
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  <br/></>
  
  ));
  return (
    <section className="post-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
