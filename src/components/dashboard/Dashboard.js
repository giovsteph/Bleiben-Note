import React, { Component } from 'react'
import {NotesList} from '../notes/NotesList'

 class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <NotesList/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
