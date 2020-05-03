export const createNote = (note) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const firestore = getFirestore();
    const firstName = getState().firebase.profile.firstName;
    const lastName = getState().firebase.profile.lastName;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("notes")
      .add({
        //this is the same as adding the title and content by themselves, it's a spread operator
        ...note,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        //hacer el dispatch
        dispatch({
          type: "CREATE_NOTE",
          note: note,
        });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_NOTE_ERROR", err });
      });
  };
};

//edit note
//in the object in update should be the new data, right now is blank

export const editNote = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    
    const newTitle = prompt('New title');
    const newContent = prompt('New content:')

    firestore.collection('notes').doc(id)
      .update({
        title: newTitle,
        content: newContent
      })
      .then(() => {
        dispatch({ type: 'EDIT_NOTE', id })
      }).catch(err => {
        dispatch({ type: 'EDIT_NOTE_ERROR', err })
    })
  }
};


//delete note

export const deleteNote = id => {
  
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    
    firestore.collection('notes').doc(id)
      .delete()
      .then(() => {
        alert('note deleted')
        dispatch({ type: 'DELETE_NOTE', id })
      }).catch(err => {
        dispatch({ type: 'DELETE_NOTE_ERROR', err })
    })
  }
};
