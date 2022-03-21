import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem/ListItem";

const List = () => {
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
      <span className="ListTitle">Continue to watch</span>
      <div className="wrapper">
        {IsMoved && (
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => HandleClick("left")}
          />
        )}
        <div className="container" ref={linkref}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
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
