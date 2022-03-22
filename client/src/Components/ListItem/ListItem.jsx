import React, { useState } from "react";
import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

const ListItem = ({ index }) => {
  const [IsHovered, setIsHovered] = useState(false);

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  console.log(IsHovered);
  return (
    <div
      className="listitem"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={{ left: IsHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src="https://wallpapercave.com/wp/wp3963420.jpg" alt="" />

      {IsHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>

          <div className="ItemInfo">
            <div className="Icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="ItemInfoTop">
              <span>5 Season</span>
              <span className="limit">18+</span>
              <span>2008</span>
            </div>
            <div className="description">
              Walter White, a chemistry teacher, discovers that he has cancer
              and decides to get into the meth-making business to repay his
              medical debts.
            </div>

            <div className="genre">Crime Drama</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
