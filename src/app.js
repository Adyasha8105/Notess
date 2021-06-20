import React, { useState, useEffect } from "react";
import Header from "./components/header.js";
import createCard from "./components/minors/card.js";
import Footer from "./components/footer.js";
import NewNote from "./components/newNote.js";
var ls = require("local-storage");


function App() {
  const storedNotes = JSON.parse(ls.get("notes"));
  
  const [notes, setNotes] = useState(
    storedNotes || [
      {
        id: 0,
        title: "Hey, I'm a note!",
        note:
          "Start making your own notes and don't forget to delete me ;)",
      },
    ]
  );
  
  useEffect(() => {
    ls("notes", JSON.stringify(notes));
  }, [notes]);
  
  
  function addNote(title, content) {
    const newId = Math.round(Math.random() * 100);
    setNotes([
      ...notes,
      {
        id: newId,
        title: title,
        note: content,
      }
    ]);
  }
  
  
  function deleteNote(id) {
    setNotes(notes.filter(note => id !== note.id));
  }
  
  
  return (
    <div>
      <Header />
      <NewNote add={addNote} />
      <div className="row">
        {notes.map((note) => createCard(note, deleteNote))}
      </div>
      <Footer />
    </div>
  );
}

export default App;