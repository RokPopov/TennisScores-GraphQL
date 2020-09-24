import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

import { GET_ALL_MATCHES, getMatches } from "../graphql/queries";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
  },
}));

function MatchList() {
  const classes = useStyles();
  const [finished, setFinished] = useState(false);
  const { loading, error, data } = useSubscription(getMatches(finished));

  if (loading) return "Loading the matches...";
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  return (
    <Container className={classes.root}>
      <Typography variant="h2">All Matches</Typography>
      <label>Choose: </label>
      <select
        onChange={(event) =>
          setFinished(event.target.value === "true" ? true : false)
        }
      >
        <option value={true}>Finished Matches</option>
        <option value={false}>Live Matches</option>
      </select>
      <Box>
        {data.matches.map((match) => (
          <article key={match.id}>
            <p>Match ID: {match.id}</p>
            <p>Match date: {match.started_at}</p>
            <p>{match.finished ? "Match Finished" : "Match Live"}</p>
            <p>
              {match.p1.name} {match.setts.map((set) => "|" + set.p1_score)}
            </p>
            <p>
              {" "}
              {match.p2.name} {match.setts.map((set) => "|" + set.p2_score)}
            </p>

            <hr />
          </article>
        ))}
      </Box>
    </Container>
  );
}

export default MatchList;
