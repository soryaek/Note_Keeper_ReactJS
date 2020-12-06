import React from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";

function Header() {
  return (
    <header>
      <h1>{/* ListAltIcon is an import package */}
        <ListAltIcon />    
        Note Keeper
      </h1>
    </header>
  );
}

export default Header;
