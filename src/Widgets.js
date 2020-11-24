import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed/dist/index";
import SearchIcon from "@material-ui/icons/Search";
import Loader from "./Loader";

function Widgets({ darkmode }) {
  return (
    <div className="widget">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening?</h2>

        <TwitterTweetEmbed
          tweetId={"1329391842660638721"}
          placeholder={<Loader />}
        />
        <div className="widget__padding">
          <TwitterShareButton
            url={"https://web.facebook.com/johnbosco.kizito.9"}
            option={{ text: "#reactjs is awesome", via: "johnBosco" }}
          />
        </div>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="JohnboscoOkolo"
          theme={"dark"}
          placeholder={<Loader />}
        />
      </div>
    </div>
  );
}

export default Widgets;
