import React from 'react'
import { NoteSummary } from './NoteSummary'

export const NotesList = () =>{
  return(
    <div className="notes-list section">
     <NoteSummary />
     <NoteSummary />
     <NoteSummary />
     <NoteSummary />
    </div>
  )
}