import React from 'react'


export const NoteSummary = (note) =>{
  return (
    <div className="card z-depth-0 note-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{note.note.title}</span>
        <p>Posted by: Giov</p>
        <p className="grey-text">Today</p>
      </div>
    </div>
  )
}