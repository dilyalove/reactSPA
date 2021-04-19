// import React from 'react';
// import s from '../MyPosts.module.css';
// import {Field, reduxForm} from "redux-form";
// import {required, MaxLenghtCreator} from '../../../../utils/validators';

// const MaxLenght10 = MaxLenghtCreator(10);

// const AddPostForm = (props) => {
//     return (
//             <form onSubmit={props.handleSubmit}>
//                 <div>
//                     <Field component={Textarea} name="newPostText" 
//                     validate={[required, MaxLenghtCreator(10)]}/>
//                 </div>
//                 <div>
//                     <button>Add post</button>
//                 </div>
//             </form>
//     )
// }

// export default reduxForm({form: 'profile-add-post'})(AddPostForm)