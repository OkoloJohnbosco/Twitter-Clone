import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widget">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening?</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          option={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="JohnboscoOkolo"
        />
      </div>
    </div>
  );
}

export default Widgets;

// let words = "abc#d###c";

// const clearAllHashes = (word) => {
//   if (word) {
//     let arr = word.split("");
//     let note = [];
//     for (let i = 0; i <= arr.length - 1; i++) {
//       if (arr[i] !== "#") {
//         note.push(arr[i]);
//       } else {
//         note.pop();
//       }
//     }
//     return note.join("");
//   } else {
//     return "";
//   }
// };
