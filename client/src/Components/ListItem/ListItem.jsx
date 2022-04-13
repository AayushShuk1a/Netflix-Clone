import React, { useEffect, useState } from "react";
import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { getMovie } from "../API/API";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [IsHovered, setIsHovered] = useState(false);
  const [Movie, setMovie] = useState({});

  useEffect(() => {
    const getmovie = async () => {
      const movie = await getMovie(item);

      setMovie(movie);
    };
    getmovie();
  }, [item]);

  return (
    <Link to="/watch" state={{ movie: Movie }}>
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
        <img src={Movie.imgSm} alt="" />

        {IsHovered && (
          <>
            <video src={Movie.trailer} autoPlay={true} loop></video>

            <div className="ItemInfo">
              <div className="Icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="ItemInfoTop">
                <span>{Movie.duration}</span>
                <span className="limit">{`${Movie.limit}+`}</span>
                <span>{Movie.year}</span>
              </div>
              <div className="description">{Movie.desc}</div>

              <div className="genre">{Movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
