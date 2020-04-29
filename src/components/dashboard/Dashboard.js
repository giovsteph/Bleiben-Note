import React, { Component } from 'react'
import {NotesList} from '../notes/NotesList'
import { connect } from 'react-redux'

 class Dashboard extends Component {
  render() {
    //console.log(this.props)
    const { notes } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <NotesList notes = { notes } />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.note.notes
  }
}

export default connect(mapStateToProps)(Dashboard)
