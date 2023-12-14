import { useState, useEffect } from "react";
import "./SidebarChat.css";

const SidebarChat = () => {
  const [avatar, setSeed] = useState("");

  useEffect(() => {
    const seed = ["male", "female", "pixel"];
    const randomAvatarIndex = Math.floor(Math.random() * seed.length);
    const randomAvatar = seed[randomAvatarIndex];
    setSeed(randomAvatar);
  }, []);

  return (
    <div className="sidebarChat">
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
      <div className="sidebarChat__info">
        <h2>Person name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
};

export default SidebarChat;
