import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

function Note({ match }) {
  let noteId = match.params.id;
  console.log(noteId);

  const [note, setNote] = useState(null);
  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div className="note-header">
      <div className="note-header">
        <h3>
          <Link>
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
}

export default Note;
