import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import "./Chat.css";

const Chat = () => {
  const [avatar, setSeed] = useState("");

  useEffect(() => {
    const seed = ["male", "female", "pixel"];
    const randomAvatarIndex = Math.floor(Math.random() * seed.length);
    const randomAvatar = seed[randomAvatarIndex];
    setSeed(randomAvatar);
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <img
          src={`https://xsgames.co/randomusers/avatar.php?g=${avatar}`}
          alt="User Avatar"
          style={{
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            objectFit: "cover",
          }}
        />
        <div className="chat__headerInfo">
          <h2>Person name</h2>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">victor</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">alice</span>
          This is a message back
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">victor</span>
          This is a message again again
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
