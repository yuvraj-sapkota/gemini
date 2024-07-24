import "./Main.css";
import { FaC, FaRegCircleUser } from "react-icons/fa6";
import { GoLightBulb } from "react-icons/go";
import { FaRegCompass } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";

import { useContext } from "react";
import { Context } from "../../context/context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <FaRegCircleUser className="icon" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Dev</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Explain what the keto diet is in simple terms</p>
                  <GoLightBulb className="card-icon" />
                </div>
                <div className="card">
                  <p>Brainstorm presentation ideas about a topic</p>
                  <FaRegCompass className="card-icon" />
                </div>
                <div className="card">
                  <p>suggest video to quick solve the problem</p>
                  <LuMessageCircle className="card-icon" />
                </div>
                <div className="card">
                  <p>
                    Outline an organized & logical sales pitch for a new product
                  </p>
                  <FaCode className="card-icon" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src="yuvraj.jpg" alt="" className="yuvraj" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <div>
                  <SiGooglegemini className="result-data-icon" />
                </div>
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a prompt here"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <div>
                <TfiGallery className="search-box-icon" />
                <CiMicrophoneOn className="search-box-icon" />
                <IoMdSend
                  className="search-box-icon"
                  onClick={() => {
                    onSent();
                  }}
                />
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.Your Privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
