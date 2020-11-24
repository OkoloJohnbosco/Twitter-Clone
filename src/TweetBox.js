import { Button, Avatar, Input } from "@material-ui/core";
import React, { useState } from "react";
import { db, timeStamp } from "./Firebase";
import "./TweetBox.css";

function TweentBox() {
  const [tweetPost, setTweetPost] = useState("");
  const [tweetImageUrl, setTweetImageUrl] = useState("");

  const submitPost = (e) => {
    e.preventDefault();

    let time = timeStamp();
    if (tweetPost.trim() !== "") {
      db.collection("posts").add({
        displayName: "Johnbosco Okolo",
        userName: "JohnboscoOkolo",
        verified: true,
        text: tweetPost,
        image: tweetImageUrl,
        avatar:
          "https://avatars.abstractapi.com/v1/?api_key=c73b9f2151504484bc9e92f8f44464be&name=jq&font_size=0.8",
        createdAt: time,
      });
      setTweetPost("");
      setTweetImageUrl("");
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar style={{ marginRight: "20px" }} />
          <Input
            style={{ width: "80%" }}
            placeholder="Whats happening?"
            type="text"
            value={tweetPost}
            onChange={(e) => setTweetPost(e.target.value)}
          />
        </div>
        <div className="tweetBox__imageUrl">
          <Input
            style={{ width: "calc(100% - 30px)" }}
            className="tweetBox__imageInput"
            placeholder="Enter Image url"
            type="text"
            value={tweetImageUrl}
            onChange={(e) => setTweetImageUrl(e.target.value)}
          />
        </div>
        <Button className="tweetBox__button" type="submit" onClick={submitPost}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweentBox;
