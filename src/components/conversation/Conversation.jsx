import { Avatar } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { baseUrl } from "../../constants/api";
import { getUserInfo } from "../../localstorage/localstorage";
import { getMessages } from "../../store/conversation/actions";
import "./Conversation.css";

const Conversation = ({ friendId,conversation }) => {
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const user = getUserInfo();
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
     const getUser = async() => {
       try {
        const userinfo = await axios.get(`${baseUrl}/users/${friendId}`);
        setInfo(userinfo.data);
       } catch (error) {
         console.log(error);
       }

     }
     getUser();
    
   

  }, [friendId,user.userId]);

  return (
    <div className="conversations">
      <div>
        <div className="conversationName">
          <div className="imageWrapper">
            <Avatar
              src={
                info?.profilePicture
                  ? `${imageUrl}/${info?.profilePicture}`
                  : ""
              }
              alt="pic"
            />
          </div>
          <div className="name">
            <p>{info?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
