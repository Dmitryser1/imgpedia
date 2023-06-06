import "./post.scss";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = ({ post }) => {

  //TEMPORARY

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <div className="details">
              <Link
                to={`http://localhost:5000/album/${post.UserId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.UserId}</span>
              </Link>
              <span className="date">{post.createdAt}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>Text appeal: {post.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
