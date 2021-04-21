import React from "react";
import { useSelector } from "react-redux";

import NavBar from "./appBar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Recipe() {
  const classes = useStyles();

  const temp = useSelector((state) => state.home.id);

  return (
    <div className={classes.root}>
      <NavBar />
      <div>{temp}</div>
    </div>
  );
}
