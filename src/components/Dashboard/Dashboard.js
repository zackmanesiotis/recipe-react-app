import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Grid from "@material-ui/core/Grid/Grid";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./Dashboard.css";
import SearchAppBar from "../SearchAppbar/SearchAppbar";
import RecipeCard from "../RecipeCards/RecipeCards";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    const recipes = [{}, {}, {}, {}];

    return (
      <div className={classes.root}>
        <SearchAppBar />

        <div className={classes.toolbar} />

        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          {recipes.map((recipe, index) => {
            return (
              <Grid item key={index} className={classes.cardPadding} xs={12} sm={6} md={4}>
                <RecipeCard />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
