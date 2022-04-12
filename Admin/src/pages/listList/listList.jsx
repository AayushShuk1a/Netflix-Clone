import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { ListContext } from "../../Context/ListContext/ListContext";
import { DeleteList, getLists } from "../../Context/ListContext/ApiCalls";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  const handleDelete = (id) => {
    DeleteList(id, dispatch);
  };
  console.log(lists);

  useEffect(() => {
    const getlists = async () => {
      await getLists(dispatch);
    };

    getlists();
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        let listsss = params.row;

        return (
          <>
            <Link
              to={{
                pathname: "/list/" + params.row._id,
                state: { list: listsss },
              }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        className="grid"
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
        autoHeight
        autoPageSize
      />
    </div>
  );
}
