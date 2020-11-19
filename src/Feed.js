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
    console.log();
    feedRef.current.querySelector(".tweetBox  input").focus();
    // feedRef.current.focus();
  }, []);

  useEffect(() => {
    const unsub = db
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (snapshot) => {
          setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          setError(false);
        },
        (error) => {
          //...
          setError(true);
          console.log(error);
        }
      );
    return () => unsub();
  }, [posts]);

  const toggleDarkMode = (e) => {
    setDarkmode((prevState) => !prevState);
  };
  return (
    <div className="feed" ref={feedRef}>
      {/* Heed */}
      <div className="feed__header">
        <div className="feed__home">
          <h2>Home</h2>
          <Button className="feed__homeToggleBtn" onClick={toggleDarkMode}>
            <Brightness4OutlinedIcon />
          </Button>
        </div>
      </div>
      {/* Tweet Box */}
      <TweetBox />

      <FlipMove>
        {posts &&
          !error &&
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

// // Immutable way
// const removerChange = (arrChanged, item) => {
//   let newArrChanged = [...arrChanged];
//   let itemIndex = newArrChanged.findIndex((num) => num == item);
//   newArrChanged.splice(itemIndex, 1);
//   return newArrChanged;
// };

// const getChange = (moneyArr) => {
//   let money = [...moneyArr];

//   let change = money
//     .map((change) => change - 25)
//     .filter((change) => change !== 0)
//     .map((change) => {
//       if (change === 75) {
//         return [25, 50];
//       } else {
//         return change;
//       }
//     })
//     .reduce((arr, el) => arr.concat(el), []);

//   let newChange = [...change];
//   money.forEach((item, index) => {
//     if (newChange.includes(item)) {
//       console.log(newChange, index);
//       newChange = removerChange(newChange, item);
//     } else {
//       return;
//     }
//   });

//   console.log(newChange);
//   return newChange.length === 0 ? "YES" : "No";
// };
// getChange([25, 50, 100]);
