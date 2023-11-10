import React from "react";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  console.log("BlogPage");
  console.log(blogs);


  
  return (
    <section className="w-full bg-[#f9f9f9] mt-[50px] py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 text-black">
          {blogs && blogs.data ? (
            blogs.data.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                  <img
                    src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
                    alt="Cover Image"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">
                      {blog.attributes.blogTitle}
                    </h3>
                    <p className="text-gray-600 text-xl">
                      {blog.attributes.blogDesc}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
