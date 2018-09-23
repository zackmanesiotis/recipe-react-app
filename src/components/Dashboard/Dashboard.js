import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid/Grid";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./Dashboard.css";
import SearchAppBar from "../SearchAppbar/SearchAppbar";
import RecipeCard from "../RecipeCards/RecipeCards";
import { list_recipes } from "../../config/RecipeList";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const recipes = list_recipes;

    return (
      <div className={classes.root}>
        <SearchAppBar />

        <div className={classes.toolbar} />

        <Grid container alignContent="center">
          {recipes.map((recipe, index) => {
            return (
              <Grid
                item
                key={index}
                className={classes.cardPadding}
                xs={12}
                sm={6}
                md={4}
              >
                <RecipeCard recipe={recipe} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
