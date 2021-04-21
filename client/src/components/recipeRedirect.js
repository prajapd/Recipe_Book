import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import { makeStyles } from "@material-ui/core/styles";

import { updateSelectedRecipe } from "../lib/home/homeActions";

const useStyles = makeStyles({
  item: {
    padding: 0,
    "&:visited": {
      textDecoration: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
    textDecoration: "none",
  },
});

export default function RecipeRedirect(props) {
  const classes = useStyles()
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateSelectedRecipe(props.id)); // will update the id
  };

  return (
    <Link to={props.href} onClick={handleClick} role="button" className={classes.item}>
      {props.children}
    </Link>
  );
}
