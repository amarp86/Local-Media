import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";

const PopupMenu = (props) => {
  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchor(e.target.value);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Explore!
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
