import React from 'react'

const NoteDetail= (props) =>{
 const id = props.match.params.id;
  return (
    <div className="container section note-details">
      <div className="card z-depth-0">
        <div className="card-content">
        <span className="card-title">Note Title - {id}</span>
          <p>Lorem impum</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Giov</div>
          <div>Todayy!</div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetail
