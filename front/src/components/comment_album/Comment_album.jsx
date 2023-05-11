import "./comment_album.scss";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";

const Comment_album = ({ comment_album }) => {

  //TEMPORARY

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={comment_album.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${comment_album.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{comment_album.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{comment_album.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment_album;
