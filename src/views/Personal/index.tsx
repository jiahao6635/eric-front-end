import { Outlet } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import PersonalMenu from "@/components/Menu/PersonalMenu";

const Personal = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="w-full h-full flex">
      <PersonalMenu className="w-[244px]"></PersonalMenu>
      <div className="flex-1 flex justify-center ">
        <div className="w-[1196px]"><Outlet></Outlet></div>
        
      </div>
    </div>
  );
};

export default Personal;
