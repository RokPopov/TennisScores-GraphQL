import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import "./App.css";

import MatchList from "./components/MatchList";
import AddClub from "./components/AddClub";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <AddClub />
      <CssBaseline />
      <Box>
        <MatchList />
      </Box>
    </Container>
  );
}

export default App;
