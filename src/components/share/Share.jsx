import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";
import {
  PhotoLibrary,
  Label,
  LocationOn,
  EmojiEmotions,
} from "@material-ui/icons";
import "./Share.css";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getUserInfo } from "../../localstorage/localstorage";
import { createPost } from "../../store/home/actions";
import { getUserInformation } from "../../store/user/actions";
import axios from "axios";

const Share = () => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const imageUrl = process.env.REACT_APP_IMAGE_URL;


  const userInfo = useSelector((state) => state.user.userInfo);
  const data = getUserInfo();

  useEffect(() => {
    dispatch(getUserInformation(data.userId));
    
  },[data.userId]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSharePost = async () => {
    const token = getUserInfo().token;
    console.log(getUserInfo().userId);
    const data = {
      description,
      userId: getUserInfo().userId,
    };
    if (file) {
      const formData = new FormData();
      const fileName = file.name;
      formData.append("file", file);
      formData.append("name", fileName);

      data.image = fileName;
      try {
        await axios.post("http://localhost:5000/upload", formData);
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(createPost(data, token));
    setDescription("");
   
  };
  return (
    <Card className="shareCard">
      <div className="shareWrapper">
        <CardHeader
          avatar={
            <Avatar
              src={
                userInfo !== null
                  ? imageUrl + "/" + userInfo.profilePicture
                  : ""
              }
            >
            </Avatar>
          }
        />
        <input
          className="inputField"
          type="text"
          name="description"
          value={description}
          placeholder="What's in your mind?"
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="line"></div>
      <div className="utilitiesWrapper">
        <div className="fileUpload">
          <IconButton>
            <PhotoLibrary style={{ color: "red" }} />
            <label className="textName">
              <input type="file" onChange={handleFileChange} />
              Photo or Video
            </label>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <Label style={{ color: "blue" }} />
            <p className="textName">Tag</p>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <LocationOn style={{ color: "green" }} />
            <p className="textName">Location</p>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <EmojiEmotions style={{ color: "orange" }} />
            <p className="textName">Feelings</p>
          </IconButton>
        </div>
        <div className="share">
          <Button
            onClick={handleSharePost}
            variant="contained"
            className="shareBtn"
          >
            Share
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Share;
