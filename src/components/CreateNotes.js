import React from "react";
import Note from "./Note"

function createNote(notes) {
    return <Note
    key = {notes.key}
    title = {notes.title}
    content = {notes.content}
    ></Note>
  }
  export default createNote;