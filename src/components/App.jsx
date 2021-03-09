import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes"
import CreateNote from "./CreateNotes"

function App() {
  return (
    <div>
      <Header></Header>
      {notes.map(CreateNote)}
      <Footer></Footer>
    </div>
  );
}

export default App;
