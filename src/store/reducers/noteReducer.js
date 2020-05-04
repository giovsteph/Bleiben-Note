const initState = {};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("created note", action.note);
      return state;
    case "CREATE_NOTE_ERROR":
      console.log("create note error", action.err);
      return state;
    case 'DELETE_NOTE':
      alert('Note Deleted');
      return state;
    case 'DELETE_NOTE_ERROR':
      console.log('delete note error');
      return state;
    case 'EDIT_NOTE':
      console.log('note edited')
      return state;
    case 'EDIT_NOTE_ERROR':
      console.log('Edit note error');
      return state;
    default:
      return state;
  }
};

export default noteReducer;
