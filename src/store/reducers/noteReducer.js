const initState = {
    notes: [
        { id: '1', title: 'this is the first note', content: 'bla' },
        { id: '2', title: 'this is the second note', content: 'bla bla' },
        { id: '3', title: 'this is the third note', content: 'bla bla bla' }
    ]
};

const noteReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_NOTE':
            console.log('created note', action.note);
            
    }
    return state
}

export default noteReducer;