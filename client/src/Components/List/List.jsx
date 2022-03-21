import React, { useRef } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem/ListItem";

const List = () => {
  const linkref = useRef();

  const HandleClick = (direction) => {
    const distance = linkref.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      linkref.current.style.transform = `translateX(${230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="ListTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => HandleClick("left")}
        />
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
