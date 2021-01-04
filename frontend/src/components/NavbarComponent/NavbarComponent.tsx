import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import { navbarStyles } from "./NavbarComponentStyle";

export const NavbarComponent = (props: any) => {
  const classes = navbarStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            GS Phones
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
