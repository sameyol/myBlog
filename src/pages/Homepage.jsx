import React from "react";
import { Blogs, Footer, Navbar } from "../components";

const Homepage = ({blogs}) => {

  return (
    <div>
      <Navbar />
      <Blogs blogs = {blogs ? blogs: ""}/>
      <Footer />
    </div>
  );
};

export default Homepage;
