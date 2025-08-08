import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {!anchorEl ? (
          <TbMenu size={30} style={{ fontWeight: "thin" }} color="black" />
        ) : (
          <RxCross1 size={20} color="black" />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="m-0 p-2 w-full flex justify-center align-middle gap-5 bg-[#00000070]"
        aria-hidden={!open} // Only set aria-hidden when the menu is closed
      >
        <MenuItem onClick={handleClose} className="w-full" style={{width: "100%"}}>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/solutions">Solutions</Link>
        </MenuItem>
        <MenuItem className="flex justify-between">
          Expertise
          <MdKeyboardArrowDown size={20} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/insights">Insights</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
