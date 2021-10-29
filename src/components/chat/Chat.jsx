import "./Chat.css";
import { getUserInfo } from "../../localstorage/localstorage";

const Chat = ({ message }) => {
  const user = getUserInfo();

  return (
    <div className="chatContainer">
      <div className="chatMessage">
        <div
          className={
            message.sender === user.userId
              ? "myMessageWrapper"
              : "messageWrapper"
          }
        >
          <div
            className={message.sender === user.userId ? "myMessage" : "message"}
          >
            {message.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
