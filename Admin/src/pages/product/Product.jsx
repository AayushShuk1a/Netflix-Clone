import { Link, useParams } from "react-router-dom";
import "./product.css";

import { Publish } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { getMovie, UpdateMovie } from "../../API/API";

import { MovieContext } from "../../Context/MovieContext/MovieContext";

export default function Product() {
  const params = useParams();
  console.log(params);
  const [movie, setmovieId] = useState("");

  const { dispatch } = useContext(MovieContext);

  const [movieUpdate, setMovieUpdate] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovieUpdate({ ...movie, [e.target.name]: value });
  };

  useEffect(() => {
    const getmovie = async () => {
      const res = await getMovie(params.productId);
      setmovieId(res);
    };
    getmovie();
  }, [params]);

  console.log(movieUpdate);

  const UpdateHandler = (e) => {
    e.preventDefault();
    UpdateMovie(movieUpdate);
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              name="title"
              type="text"
              placeholder={movie.title}
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              name="year"
              type="text"
              placeholder={movie.year}
              onChange={handleChange}
            />

            <label>duration</label>
            <input
              name="duration"
              type="text"
              placeholder={movie.duration}
              onChange={handleChange}
            />

            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder={movie.genre}
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              name="limit"
              placeholder={movie.limit}
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={UpdateHandler}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
