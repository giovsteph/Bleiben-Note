const initState = {};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("created note", action.note);
      return state;
    case "CREATE_NOTE_ERROR":
      console.log("create note error", action.err);
      return state;
    default:
      return state;
  }
};

export default noteReducer;
