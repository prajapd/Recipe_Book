import React, { useState } from "react";
import { useSelector } from "react-redux";

import NavBar from "./appBar";
import RecipeRedirect from "../components/recipeRedirect";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Edit from "@material-ui/icons/Edit";
import StarBorder from "@material-ui/icons/StarBorder";
import Star from "@material-ui/icons/Star";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: "24px",
  },
  img: {
    height: "100%",
    width: "100%",
    zIndex: "1",
  },
  card: {
    position: "relative",
  },
  cardContent: {
    padding: 0,
  },
  edit: {
    position: "absolute",
    zIndex: "2",
    top: 0,
    right: 0,
    "&:visited": {
      textDecoration: "none",
    },
    color: "black",
    marginTop: "5px",
    marginRight: "5px",
  },
  star: {
    position: "absolute",
    zIndex: "2",
    top: 0,
    left: 0,
    marginTop: "5px",
    marginLeft: "5px",
  },
});

export default function Home() {
  const classes = useStyles();
  var rows = [];

  const [favourite, changeFavourite] = useState(false);

  const makeFavourite = () => {
    if (favourite) {
      changeFavourite(false);
    } else {
      changeFavourite(true);
    }
  };
  /*
* query db for every recipe, including the id input the id where variable "i" is right now 
* that is, we would return either an object or an array, with only the ids of each recipe and 
* their titles, from there, I can keep the logic of the Link/onclick that will redirect to
* the recipe page

* i can set up the UI for the recipe page so that the data from the single row can populate the page 
*/

  for (var i = 0; i < 50; i++) {
    // each card has all the info, if we use graphql we can have it return something like
    // { data { getCard: { favourite,  id, text, image }[] } }
    var star = <StarBorder className={classes.star} onClick={makeFavourite} />;
    if (favourite) {
      star = <Star className={classes.star} onClick={makeFavourite} />;
    }
    rows.push(
      <Grid item lg={3} md={6} sm={6} xs={12}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            {star}
            <RecipeRedirect href="/editRecipe" id={i}>
              <Edit className={classes.edit} />
            </RecipeRedirect>
            <RecipeRedirect href="/recipe" id={i}>
              <img src="/remind.jpg" className={classes.img} />
            </RecipeRedirect>
          </CardContent>
          <CardContent className={classes.cardContent}>
            some text...
          </CardContent>
        </Card>
      </Grid>
    );
  }
  return (
    <div className={classes.root}>
      <NavBar />
      <Container className={classes.container} maxWidth="xl">
        <Grid container spacing={4}>
          {rows}
        </Grid>
      </Container>
    </div>
  );
}
