import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { deleteNote, editNote } from '../../store/actions/noteActions.js'


class NoteDetail extends Component {

  handleDelete = e => {
    const { id } = this.props;
    e.preventDefault();
    this.props.deleteNote(id);
    this.props.history.push("/");
  }

  handleEdit = e => {
     const { id } = this.props;
     e.preventDefault();
    this.props.editNote(id);
    this.props.history.push("/");

  }


  render() {
    const { note, auth } = this.props;
    //if a user is not logged in, redirects to the signin page
    if (!auth.uid) return <Redirect to="/signin" />;
    if (note) {
     return (
          <div className="container section note-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{note.title}</span>
              <p>{note.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {note.authorFirstName} {note.authorLastName}
              </div>
              <div>{note.createdAt.toDate().toString()}</div>
            </div>
          </div>
          <div className="center-align wrapper">
          <button onClick={this.handleEdit} className="btn pink lighten-1 z-depth-0 waves-effect">Edit Note</button>
          <button onClick={this.handleDelete} className="btn pink lighten-1 z-depth-0 waves-effect">Delete Note</button>
          </div>
        </div>
     )
    } else {
      return (
        <div className="container center">
          <p className="purple-text center-align">Loading Note...</p>
        </div>
      );
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const notes = state.firestore.data.notes;
  const note = notes ? notes[id] : null;

  return {
    note: note,
    id:id,
    auth: state.firebase.auth,
  };
};

const mapDistpacthToProps = dispatch => {
  return {
      deleteNote: (id) => dispatch(deleteNote(id)),
      editNote: (id)=> dispatch(editNote(id))
  }
}



export default compose(
  connect(mapStateToProps, mapDistpacthToProps),
  firestoreConnect([
      { collection: 'notes' }
  ])
)(NoteDetail);