import Post from "../post/Post.jsx";
import "./Feed.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "../../localstorage/localstorage.js";
import { getTimelinePosts } from "../../store/home/actions.js";
import Share from "../share/Share.jsx";
import { getUserInformation } from "../../store/user/actions.js";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) =>
    state.home.posts.sort((p1, p2) => {
      return new Date(p2.createdAt) - new Date(p1.createdAt);
    })
  );
  const info = useSelector((state) => state.user.userInfo);
  const data = getUserInfo();


  useEffect(() => {
    dispatch(getUserInformation(data.userId));
    dispatch(getTimelinePosts(data.userId, data.token));
  }, [data.userId]);

  return (
    <div className="feedContainer">
      <div>
        <Share userInfo={info} />
      </div>
      {posts.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>NO POSTS TO DISPLAY!</p>
        </div>
      ) : (
        posts.map((post) => {
          return <Post post={post} />;
        })
      )}
    </div>
  );
};

export default Feed;
