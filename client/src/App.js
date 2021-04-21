import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddRecipe from "./pages/addRecipe/addRecipe";
import Recipe from "./pages/Recipe";
import editRecipe from "./pages/editRecipe/editRecipe";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <Router>
      <Suspense fullback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/addRecipe" component={AddRecipe}></Route>
          <Route path="/recipe" component={Recipe}></Route>
          <Route path="/editRecipe" component={editRecipe}></Route>
          <Route path="/favourites" component={Favourite}></Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
