import React from 'react';
import { reduxForm } from 'redux-form';
import {createField, Input, Textarea} from '../../common/FormControls/FormControls';
import style from '../../common/FormControls/FormControls.module.css';
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button className={s.buttonEditSave}>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b className={s.textMenu}>Full name:</b>  {createField("Full name", "fullName", [], Input)}
        </div>
        {/* <div>
            <b className={s.textMenu}>Looking for a job:</b>  {createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div> */}

        <div>
            <b className={s.textMenu}>My professional skills:</b> 
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div>
            <b className={s.textMenu}>About me:</b> 
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b className={s.textMenu}>Contacts:</b>  {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.descriptionContacts}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;