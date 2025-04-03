import React from "react";
import "../../App.css";
import { RiImageAiLine } from "react-icons/ri";
import { BiImageAdd } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa6";
function Home() {
  return (
    <div className="home">
      {/* home section */}
      <nav>
        <div className="logo">SmartAIBot</div>
      </nav>
      <div className="hero">
        <span id="tag">What can I help with ...?</span>
        <div className="cate">
          <div className="upImg">
            <BiImageAdd />
            <span>Upload Image</span>
          </div>
          <div className="genImg">
            <RiImageAiLine />
            <span>Generate Image</span>
          </div>
          <div className="chat">
            <IoChatbubbleEllipsesOutline />
            <span>Let's Chat</span>
          </div>
        </div>
      </div>

      {/* input section */}
      <form className="input-box">
        <button id="add">
          <BsPlus />
        </button>
        <input type="text" placeholder="Ask Something..." />
        <button id="submit">
          <FaArrowUp />
        </button>
      </form>
    </div>
  );
}

export default Home;
