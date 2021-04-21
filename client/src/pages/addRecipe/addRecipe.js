import React, { useState } from "react";

import NavBar from "../appBar";
import AddIngredientFields from "./addIngredients";
import AddInstructionFields from "./addInstructions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: "24px",
  },
  upload: {
    width: "348px",
    height: "226px",
    maxWidth: "348px",
    maxHeight: "226px",
    position: "relative",
    zIndex: "1",
  },
  input: {
    display: "none",
  },
  camera: {
    position: "absolute",
  },
  img: {
    position: "absolute",
    width: "348px",
    height: "226px",
    maxWidth: "348px",
    maxHeight: "226px",
  },
  div: {
    display: "inline-block",
    position: "relative",
  },
  text: {
    marginLeft: "30px",
  },
  clearImgGrid: {
    textAlign: "center",
  },
  title: {
    width: "30%",
  },
});

export default function AddRecipe() {
  const classes = useStyles();

  const [preview, addPreview] = useState();

  const previewImg = (event) => {
    if (event.target.files && event.target.files[0]) {
      addPreview(URL.createObjectURL(event.target.files[0]));
    } else {
      addPreview(preview);
    }
  };

  const removeImg = () => {
    addPreview(null);
  };

  return (
    <div className={classes.root}>
      <NavBar />
      <Container className={classes.container} maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item lg={12} xs={12}>
          <TextField
              id="outlined-basic"
              label="Recipe Title"
              variant="outlined"
              className={classes.title}
            />
          </Grid>
          <Grid item lg={9} xs={12}>
            <AddIngredientFields />
          </Grid>
          <Grid item lg={3} xs={12}>
            <Grid container spacing={3}>
              {/* add functionality: onClick open up file and upload image */}
              {/* add functionality: add trash icon to remove */}
              <Grid item lg={12} xs={12}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={(e) => previewImg(e)}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    className={classes.upload}
                    component="span"
                  >
                    {!preview && (
                      <div className={classes.div}>
                        <div className={classes.camera}>
                          <PhotoCamera />
                        </div>
                        <div className={classes.text}>Upload Image</div>
                      </div>
                    )}
                    {preview && <img src={preview} className={classes.img} />}
                  </Button>
                </label>
              </Grid>
              <Grid item lg={12} xs={12} className={classes.clearImgGrid}>
                <Button variant="contained" color="default" onClick={removeImg}>
                  Clear Image
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} xs={12}>
            <AddInstructionFields />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
