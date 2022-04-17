import List from "../Schema/list.js";

export const AddList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const list = await new List(req.body);
      list.save();
      res.status(200).json(list);
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json("Only allowed to Admin");
  }
};

//Delete List

export const DeleteList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("List Deleted");
    } catch (err) {
      res.status(400).json(err);
    }
  } else {
    res.status(400).json("Only Admin Allowed");
  }
};

//get List

export const GetList = async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list;

  if (typeQuery) {
    if (genreQuery) {
      list = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { type: typeQuery, genre: genreQuery } },
      ]);
    } else {
      list = await List.aggregate([
        { $sample: { size: 10 } },
        { $match: { type: typeQuery } },
      ]);
    }
  } else {
    list = await List.aggregate([{ $sample: { size: 10 } }]);
  }
  res.status(200).json(list);
};
