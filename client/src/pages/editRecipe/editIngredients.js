import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Clear from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: "24px",
  },
  div: {
    display: "inline-block",
  },
  metric: {
    width: "30%",
    maxWidth: "104px",
    paddingRight: "5px",
  },
  clear: {
    display: "inline-block",
    position: "relative",
    top: "20px",
  },
  addCircleIcon: {
    marginRight: "5px",
  },
});

export default function AddIngredientFields() {
  const classes = useStyles();

  const [id, increment] = useState(1);

  const [ingredients, addIngredients] = useState([
    {
      id: 0,
      children: (
        <div className={classes.div}>
          <TextField
            id="outlined-basic"
            label="metric"
            variant="outlined"
            className={classes.metric}
          />
          <TextField
            id="outlined-basic"
            label="ingredient"
            variant="outlined"
          />
        </div>
      ),
    },
  ]);

  const handleRemove = (id) => {
    if (id) {
      const temp = [...ingredients];
      const index = temp.findIndex((x) => x.id === Number(id));
      if (index > -1) {
        temp.splice(index, 1);
      }
      addIngredients(temp);
    }
  };

  const handleClick = () => {
    increment(id + 1);

    addIngredients([
      ...ingredients,
      {
        id: id,
        children: (
          <div className={classes.div}>
            <TextField
              id="outlined-basic"
              label="metric"
              variant="outlined"
              className={classes.metric}
            />
            <TextField
              id="outlined-basic"
              label={"ingredient" + id}
              variant="outlined"
            />
          </div>
        ),
      },
    ]);
  };

  const displayField = (fields) => {
    var fieldRows = [];
    fields.forEach((element) => {
      fieldRows.push(
        <Grid item lg={4} xs={12}>
          <Clear
            className={classes.clear}
            id={element.id}
            onClick={(e) => handleRemove(e.target.id)}
          />
          {element.children}
        </Grid>
      );
    });
    return fieldRows;
  };

  return (
    <Grid container spacing={4}>
      {ingredients.length > 0 ? displayField(ingredients) : ""}
      <Grid item lg={12} xs={12}>
        <Button variant="contained" onClick={handleClick}>
          <AddCircleOutlineIcon className={classes.addCircleIcon} />
          add ingredient
        </Button>
      </Grid>
    </Grid>
  );
}
