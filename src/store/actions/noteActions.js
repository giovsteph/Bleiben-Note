export const createNote = (note) => {
    return (dispatch, getState) => {
        //make async call to db
        dispatch({
            type: 'CREATE_NOTE',
            note: note
        });
    }
};