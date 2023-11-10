import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full bg-[#02044A] text-gray-300 py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 border-b-2 border-gray-600 py-2 px-6 md:px-10">
        <div className="mb-10">
          <h6 className="font-bold uppercase py-2 text-center">Solution</h6>
          <ol>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
          </ol>
        </div>
        <div className="mb-10">
          <h6 className="font-bold uppercase py-2 text-center">Solution</h6>
          <ol>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
          </ol>
        </div>
        <div className="mb-10">
          <h6 className="font-bold uppercase py-2 text-center">Solution</h6>
          <ol>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
            <li className="text-center">Marketing</li>
          </ol>
        </div>
        <div className="col-span-2 pt-2 sm:pt-2">
          <p className="font-bold uppercase text-center md:text-left">Subscribe To Our Newsletter</p>
          <p className="py-4">
            The latest news,articles and resources sent to your inbox weekly
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              className="w-full p-2 mr-4 rounded-md mb-2"
              placeholder="Enter your Email"
            />
            <input
              type="submit"
              value="Subscribe"
              className="p-2 mb-2 bg-[#00B86E]"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto items-center justify-between sm:flex-row text-center text-gray-500">
        <p>MyBlog 2023 &copy; All right reserved.</p>
        <div className="flex justify-evenly sm:w-[300px] pt-4 text-2xl gap-2">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
