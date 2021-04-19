import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'hello', likeCount: '0'},
                {id: 2, post: 'asdas', likeCount: '23'}
            ],
            newPostText: 'asda'
        },
    
        dialogsPage: {
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
            newMessageBody: ''
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
