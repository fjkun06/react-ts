import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./app/Navbar";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      {" "}
      {/* <Router> */}
        <Navbar />
       <PostsList/>
      {/* </Router> */}
    </>
  );
}

export default App;
