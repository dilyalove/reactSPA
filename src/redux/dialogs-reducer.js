const SEND_MESSAGE='SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Toha'},
        {id: 2, name: 'Innedi'},
        {id: 3, name: 'Color'},
        {id: 4, name: 'Daer'},
        {id: 5, name: 'Dilya'}
    ],
    messages: [
        {id: 1, message: 'asdas'},
        {id: 2, message: 'dasdas'},
        {id: 3, message: 'saddas'},
    ],
};

const dialogsReducer = (state = initialState, action ) => {
    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    } 
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;