import "./Sidebar.css";
import { IoMdMenu } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useContext, useState } from "react";
import { Context } from "../../context/context";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecnetPromt } = useContext(Context);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <IoMdMenu
            className="menu icon"
            onClick={() => {
              setExtended((p) => !p);
            }}
          />

          <div className="new-chat">
            <IoMdAdd className="icon" />
            {extended ? <p>New Chats</p> : null}
          </div>
          {extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompt.map((item, index) => {
                return (
                  <div className="recent-entry">
                    <FaMessage className="icon" />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="bottom">
          <div className="bottom-item recent-entry">
            <FaRegQuestionCircle className="icon" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <MdHistory className="icon" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <CiSettings className="icon" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
