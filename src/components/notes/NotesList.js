import React from "react";
import { NoteSummary } from "./NoteSummary";
import { Link } from "react-router-dom";

export const NotesList = ({ notes }) => {
  return (
    <div className="notes-list section">
      {notes &&
        notes.map((note) => {
          return (
            <Link to={"/note/" + note.id} key={note.id}>
              <NoteSummary note={note} />
            </Link>
          );
        })}
    </div>
  );
};
