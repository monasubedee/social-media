import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Chat from "../../components/chat/Chat";
import Conversation from "../../components/conversation/Conversation";
import Topbar from "../../components/topbar/Topbar";
import { getUserInfo } from "../../localstorage/localstorage";
import { Button } from "@material-ui/core";
import ScrollToBottom from "react-scroll-to-bottom";
import {
  getConversations,
  getMessages,
  saveMessage,
} from "../../store/conversation/actions";
import "./Message.css";

const Message = () => {
  const user = getUserInfo();
  const dispatch = useDispatch();
  const [convId, setConvId] = useState("");
  const conversations = useSelector(
    (state) => state.conversations.conversations
  );
  const messages = useSelector((state) => state.conversations.messages);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = {
      conversationId: convId,
      text: message,
      sender: user.userId,
    };

    dispatch(saveMessage(data, user.token));
    setMessage("");
  };

  useEffect(() => {
    dispatch(getConversations(user.userId, user.token));
  }, [user.userId]);

  const getConversationId = (id) => {
    setConvId(id);
  };

  useEffect(() => {
    dispatch(getMessages(convId, user.token));
  }, [convId]);

  return (
    <div className="messageContainer">
      <Topbar />

      <div className="messageWrapper">
        <div className="conversationContainer">
          <div className="searchFriend">
            <input type="text" placeholder="Search for friends" />
          </div>
          {conversations.map((conversation) => {
            const id = conversation.members.find((id) => id !== user.userId);
            return (
              <div onClick={() => getConversationId(conversation._id)}>
                <Conversation friendId={id} conversation={conversation} />
              </div>
            );
          })}
        </div>
        <div className="chatContainer">
          <ScrollToBottom className="chatWrapper">
            {messages.map((message) => {
              return (
                <div className="chat">
                  <Chat message={message} />
                </div>
              );
            })}
          </ScrollToBottom>
          <div className="inputButton">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Type a message"
              name="message"
              value={message}
            />
            <div className="sendButton">
              <Button onClick={handleSubmit} variant="contained">
                Send
              </Button>
            </div>
          </div>
        </div>
        <div className="onlineContainer">online friends</div>
      </div>
    </div>
  );
};

export default Message;
