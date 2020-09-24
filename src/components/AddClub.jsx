import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_CLUB } from "../graphql/mutations";

export default function AddClub() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [addClub, { data }] = useMutation(ADD_CLUB);

  function handleSubmit(event) {
    event.preventDefault();
    addClub({ variables: { city, name, created_at: new Date() } });
  }

  if (data) {
    return <h1>Congratulations! Club Successfully Created!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of the Club:</label>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        required
      />
      <br />
      <label>Home City of the Club:</label>

      <input
        type="text"
        onChange={(event) => setCity(event.target.value)}
        required
      />
      <br />
      <input type="submit" />
    </form>
  );
}
