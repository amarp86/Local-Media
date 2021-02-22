import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

//code below can be found on MaterialUI basic use documentation

const PopupMenu = (props) => {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchor(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="primary"
        size="large"
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/reviews">Reviews</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/locations">Locations</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/new">New Destination</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/search">Search for a Review</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default PopupMenu;
