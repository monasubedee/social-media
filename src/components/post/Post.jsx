import "./Post.css";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  Favorite,
  MoreVert,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { format } from "timeago.js";
import { useDispatch } from "react-redux";
import { likePost } from "../../store/home/actions";
import { getUserInfo } from "../../localstorage/localstorage";
import { useEffect } from "react";


const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const user = getUserInfo();

  const handleLike = (postId) => {
    if (isLiked === false) {
      setLike(like + 1);
      dispatch(likePost(user.userId, postId, user.token));
    } else {
      setLike(like - 1);
      dispatch(likePost(user.userId, postId, user.token));
    }
    setIsLiked(!isLiked);
  };

 useEffect(() => {
   if(post.likes.includes(user.userId)){
     console.log(post.likes);
     setIsLiked(true);
   }


 },[user.userId]);

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <Card className="postCard">
          <CardHeader
            avatar={
              <Avatar
                src={
                  post.userId !== undefined ? post.userId.profilePicture : ""
                }
              >
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert style={{ color: "black" }} />
              </IconButton>
            }
            title={post.userId.name}
            titleTypographyProps={{ variant: "h6" }}
            subheader={format(post.createdAt)}
          />
          <Typography
            style={{ fontSize: "17px", paddingLeft: "15px" }}
            component="p"
          >
            {post.description}
          </Typography>
          <CardMedia
            component="img"
            className="postImage"
            src={post.image ? imageUrl + "/" + post.image : ""}
          />
          <CardActions disableSpacing>
            <IconButton onClick={(e) => handleLike(post._id)}>
              {isLiked ? (
                <ThumbUp style={{ color: "blue" }} />
              ) : (
                <ThumbUpAltOutlined style={{ color: "blue" }} />
              )}
            </IconButton>
            <IconButton onClick={(e) => handleLike(post._id)}>
              <Favorite style={{ color: "red" }} />
            </IconButton>
            <Typography component="p">{like} people like it</Typography>
            <Typography style={{ marginLeft: "auto" }} component="p">
              9 comments
            </Typography>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Post;
