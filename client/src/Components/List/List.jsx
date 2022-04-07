import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem/ListItem";

const List = ({ list }) => {
  const linkref = useRef();
  const [ArrowSlide, setArrowSlide] = useState(0);
  const [IsMoved, setIsMoved] = useState(false);

  const HandleClick = (direction) => {
    setIsMoved(true);
    const distance = linkref.current.getBoundingClientRect().x - 50;
    if (direction === "left" && ArrowSlide > 0) {
      setArrowSlide(ArrowSlide - 1);
      linkref.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && ArrowSlide < 5) {
      setArrowSlide(ArrowSlide + 1);
      linkref.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="ListTitle">{list.title}</span>
      <div className="wrapper">
        {IsMoved && (
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => HandleClick("left")}
          />
        )}
        <div className="container" ref={linkref}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => HandleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
