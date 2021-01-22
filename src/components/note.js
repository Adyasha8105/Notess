import React from "react";
import createCard from "./minors/card.js";
import notes from "./dummynotes";

function Notes() {
  return <div className="row">{notes.map(createCard)}</div>;
}

export default Notes;
