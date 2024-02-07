import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
  return <main>
    {posts.map((post,id) => (
      <Article key={id} post={post}/>
    ))}
  </main>;
}

export default ArticleList;
