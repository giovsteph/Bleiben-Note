import React from "react";

export const NoteSummary = (note) => {
  return (
    <div className="card z-depth-0 note-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{note.note.title}</span>
        <p>
          Posted by: {note.note.authorFirstName} {note.note.authorLastName}
        </p>
        <p className="grey-text">{note.note.createdAt.toDate().toString()}</p>
      </div>
    </div>
  );
};
