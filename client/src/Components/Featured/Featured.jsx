import React, { useEffect, useState } from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { RandomContent } from "../API/API";

const Featured = ({ type }) => {
  const [Content, setContent] = useState({});

  useEffect(() => {
    const randomContent = async () => {
      const random = await RandomContent(type);
      setContent(random);
    };

    randomContent();
  }, [type]);

  console.log(Content);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={Content.img} alt="banner" />

      <div className="container">
        <img src={Content.imgTitle} alt="Logo"></img>
        <span className="description">{Content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="info">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
