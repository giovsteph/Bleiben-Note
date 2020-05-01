import React, { Component } from 'react'
import {NotesList} from '../notes/NotesList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

 class Dashboard extends Component {
  render() {
    //console.log(this.props)
    const { notes, auth } = this.props;
    //if a user is not logged in, redirects to the signin page
    if(!auth.uid) return <Redirect to = '/signin' />


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
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'notes'}
  ])
)(Dashboard)
