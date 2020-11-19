import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import Moment from "react-moment";
import "./Post.css";
import StarsIcon from "@material-ui/icons/Stars";
import CommentIcon from "@material-ui/icons/Comment";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { motion } from "framer-motion";

const Post = forwardRef(
  (
    {
      displayName,
      userName,
      verified,
      text,
      image,
      createdAt,
      avatar,
      setSelectedImg,
    },
    ref
  ) => {
    const setImage = (e) => {
      setSelectedImg(image);
      console.log("This happened");
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <StarsIcon className="post__badge" />} @{userName}
              </span>
              {/* <span className="post__headerTime">
                {createdAt && <Moment unix>{createdAt.seconds}</Moment>}
              </span> */}
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img src={image} alt="" onClick={setImage} />
          <div className="post__footer">
            <CommentIcon fontSize="small" className="post_icon" />
            <RepeatIcon fontSize="small" className="post_icon" />
            <FavoriteBorderIcon fontSize="small" className="post_icon" />
            <PublishIcon fontSize="small" className="post_icon" />
          </div>
        </div>
      </div>
    );
  }
);
export default Post;
