import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to='/'>
        <span>
          Filmy<span className="text-white">World</span>
        </span>
      </Link>
      <Link to={"/addmovie"}>
        <h1 className="text-lg flex items-center cursor-pointer">
          <Button>
            <AddIcon className="mr-1" color="success" />{" "}
            <span className="text-white">Add New</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
