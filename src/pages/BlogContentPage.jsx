import React from "react";
import { BlogContent, Footer, Navbar } from "../components";

const BlogContentPage = ({blogs}) => {
  
  return (
    <div>
      <Navbar />
      <BlogContent blogs = {blogs}/>
      <Footer />
    </div>
  );
};

export default BlogContentPage;
