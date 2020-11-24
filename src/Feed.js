import React, { useState, useEffect, useRef } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import Loader from "./Loader";
import { Button } from "@material-ui/core";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import { db } from "./Firebase";
import FlipMove from "react-flip-move";

function Feed({ setSelectedImg, setDarkmode }) {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
  const feedRef = useRef(null);

  useEffect(() => {
    feedRef.current.querySelector(".tweetBox  input").focus();
  }, []);

  // useEffect(() => {
  //   const unsub = db
  //     .collection("posts")
  //     .orderBy("createdAt", "desc")
  //     .onSnapshot(
  //       (snapshot) => {
  //         setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //         setError(false);
  //       },
  //       (error) => {
  //         setError(true);
  //         console.log(error);
  //       }
  //     );
  //   return () => unsub();
  // }, [posts]);

  const toggleDarkMode = (e) => {
    setDarkmode((prevState) => !prevState);
  };

  return (
    <div className="feed" ref={feedRef}>
      <div className="feed__header">
        <div className="feed__home">
          <h2>Home</h2>
          <Button className="feed__homeToggleBtn" onClick={toggleDarkMode}>
            <Brightness4OutlinedIcon />
          </Button>
        </div>
      </div>
      <TweetBox />

      <FlipMove>
        {posts &&
          posts.map((post) => (
            <Post key={post.id} {...post} setSelectedImg={setSelectedImg} />
          ))}
      </FlipMove>
      {!posts && !error && <Loader />}
      {error && <h2 className="feed__errorMessage">Something went wrong</h2>}
    </div>
  );
}

export default Feed;
