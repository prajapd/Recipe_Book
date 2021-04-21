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
  clear: {
    display: "inline-block",
    position: "relative",
    top: "20px",
  },
  addCircleIcon: {
    marginRight: "5px",
  },
  instructionDiv: {
    display: "inline-block",
    width: "98%",
  },
  instruction: {
    width: "100%",
  },
});

export default function EditInstructionFields() {
  const classes = useStyles();

  const [step, nextStep] = useState(1);

  const [instructions, addInstructions] = useState([
    {
      step: 0,
      children: (
        <div className={classes.instructionDiv}>
          <TextField
            id="outlined-basic"
            label="instruction"
            variant="outlined"
            multiline
            rowsMax={4}
            className={classes.instruction}
          />
        </div>
      ),
    },
  ]);

  const handleRemoveInstruction = (step) => {
    if (step) {
      const temp = [...instructions];
      const index = temp.findIndex((x) => x.step === Number(step));
      if (index > -1) {
        temp.splice(index, 1);
      }
      addInstructions(temp);
    }
  };

  const handleClickInstruction = () => {
    nextStep(step + 1);

    addInstructions([
      ...instructions,
      {
        step: step,
        children: (
          <div className={classes.instructionDiv}>
            <TextField
              id="outlined-basic"
              label={"instruction" + step}
              variant="outlined"
              multiline
              rowsMax={4}
              className={classes.instruction}
            />
          </div>
        ),
      },
    ]);
  };

  const displayInstruction = (instructions) => {
    var instructionRows = [];
    instructions.forEach((element) => {
      instructionRows.push(
        <Grid item lg={12} xs={12}>
          <Clear
            className={classes.clear}
            id={element.step}
            onClick={(e) => handleRemoveInstruction(e.target.id)}
          />
          {element.children}
        </Grid>
      );
    });
    return instructionRows;
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={12} xs={12}>
        <h3>Instructions</h3>
      </Grid>
      {instructions.length > 0 ? displayInstruction(instructions) : ""}
      <Grid item lg={12} xs={12}>
        <Button variant="contained" onClick={handleClickInstruction}>
          <AddCircleOutlineIcon className={classes.addCircleIcon} />
          add instruction
        </Button>
      </Grid>
    </Grid>
  );
}
