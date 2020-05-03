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

//delete note
