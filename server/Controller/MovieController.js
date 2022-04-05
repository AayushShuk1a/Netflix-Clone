import Movie from "../Schema/movie.js";

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

export const UpdateMovie = async (req, res) => {
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
};

export const DeleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json("Movie Deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};
