import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { RandomContent } from "../API/API";

const Featured = ({ type, setgenre }) => {
  const [Content, setContent] = useState({});

  useEffect(() => {
    const randomContent = async () => {
      const random = await RandomContent(type);
      setContent(random);
    };

    randomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setgenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="Originals">Originals</option>
            <option value="Sci-Fi & Fantasy">Sci-Fi & Fantasy</option>
            <option value="Anime">Anime</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
      )}
      <img src={Content.img} alt="banner" />

      <div className="container">
        <img src={Content.imgTitle} alt="Logo"></img>
        <span className="description">{Content.desc}</span>
        <div className="buttons">
          <Link to="/watch" state={{ movie: Content }} className="link">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
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
