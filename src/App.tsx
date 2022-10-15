import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

import Navbar from "./app/Navbar";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      {" "}
      {/* <Router> */}
      <Navbar />
      <>
      <AddPostForm />

        <PostsList />
      </>
      {/* </Router> */}
    </>
  );
}

export default App;
