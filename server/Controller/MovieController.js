import Movie from "../Schema/movie.js";

//Add Movie
export const AddMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const NewMovie = await new Movie(req.body);
      NewMovie.save();

      res.status(200).json(NewMovie);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json("Only Admin are Allowed");
  }
};

//Update Movie

export const UpdateMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedmovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedmovie);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json("Only admin allowed");
  }
};

//Delete Movie
export const DeleteMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie Deleted");
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json("Only admin allowed");
  }
};

//Get Single Movie
export const SingleMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json(err);
  }
};

//Get random Movie

export const RandomMovie = async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else if (type === "movie") {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.send(400).json(err);
  }
};

//All Movie

export const AllMovies = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};
