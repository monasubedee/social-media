import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  Work,
  Event,
  School,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarWrapper">
        <div className="iconText">
          <RssFeed />
          <p className="text">Feed</p>
        </div>
        <Link to="/message">
          <div className="iconText">
            <Chat />
            <p className="text">Chats</p>
          </div>
        </Link>
        <div className="iconText">
          <PlayCircleFilled />
          <p className="text">Videos</p>
        </div>
        <div className="iconText">
          <Group />
          <p className="text">Groups</p>
        </div>
        <div className="iconText">
          <Bookmark />
          <p className="text">Bookmarks</p>
        </div>
        <div className="iconText">
          <HelpOutline />
          <p className="text">Questions</p>
        </div>
        <div className="iconText">
          <Work />
          <p className="text">Jobs</p>
        </div>
        <div className="iconText">
          <Event />
          <p className="text">Events</p>
        </div>
        <div className="iconText">
          <School />
          <p className="text">Courses</p>
        </div>
        <div>
          <div className="showMore">Show More</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
