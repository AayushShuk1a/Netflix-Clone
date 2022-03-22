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

      <div className="ItemInfo">
        <div className="Icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownOutlined />
        </div>
        <div className="ItemInfoTop">
          <span>5 Season</span>
          <span className="limit">18+</span>
          <span>2008</span>
        </div>
        <div className="description">
          Walter White, a chemistry teacher, discovers that he has cancer and
          decides to get into the meth-making business to repay his medical
          debts.
        </div>

        <div className="genre">Crime Drama</div>
      </div>
    </div>
  );
};

export default ListItem;
