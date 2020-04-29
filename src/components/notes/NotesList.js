import React from 'react'
import { NoteSummary } from './NoteSummary'

export const NotesList = ({notes}) =>{
  return(
    <div className="notes-list section">
     { notes && notes.map(note => { 
       return (
         <NoteSummary  note = {note} key= {note.id} />
       )
     }) }
    </div>
  )
}