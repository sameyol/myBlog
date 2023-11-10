import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import CommentSection from "./commentSection";

const BlogContent = ({ blogs }) => {
  const { id } = useParams();

  let blog = {};
  if (blog) {
    let arr = blogs.data.filter((blog) => blog.id == id);
    blog = arr[0];
  } else {
    blog = {};
  }

  return (
    <div className="w-full mt-[50px] pb-10 bg-[#f9f9f9]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-8 ss:gap-y-8 sm:gap-y-8 px-4 pt-20 sm:mt-10 md:mt-0 text-black">
          <div className="col-span-2 gap-8">
            <img
              className="h-56 w-full object-cover"
              src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
              alt="cover_image"
            />
            <h1 className="font-bold text-2xl my-1 pt-5">
              {blog.attributes.blogTitle}
            </h1>
            <div className="pt-5">
              <ReactMarkdown className="text-justify line-break">
                {blog.attributes.blogContents}
              </ReactMarkdown>
            </div>
            <CommentSection />
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
            <img
              className="p-2 w-32 h-32 rounded-full mx-auto object-cover"
              src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}
              alt="myPics"
            />
            <h1 className="font-bold text=2xl text-center text-gray-900 pt-3">
              {blog.attributes.authorName}
            </h1>
            <p className="text-center font-medium text-gray-900">
              {blog.attributes.authorDesc}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BlogContent;
