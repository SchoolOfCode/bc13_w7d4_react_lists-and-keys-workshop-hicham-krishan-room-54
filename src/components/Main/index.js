import React, { useState } from "react";

import "./index.css";

import samplePosts from "../../libs/data";

import Post from "../Post";

//use .map() to loop over the posts state
//for each post in the array return a <post></post> component
function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
    <main id="main">
      {posts.map((post) => {
        return <Post key={post.postId}></Post>;
      })}
    </main>
  );
}

export default Main;
