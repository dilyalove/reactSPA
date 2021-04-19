import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/it.png";
import ProfileDataForm from './ProfileDataForm';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.photoBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} name={'file'} id={'file'} className={s.inputFile} onChange={onMainPhotoSelected}/>}
                <label for='file'>Choose a photo...</label>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} className={s.status}/>
            </div>
            <div className={s.profileDataBlock}>
            { editMode 
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.mainMenu}>
        {isOwner && <div><button className={s.buttonEditSave} onClick={goToEditMode}>edit</button></div>}
        <div className={s.profileValue}>
            <b className={s.textMenu}>Full name:</b>  {profile.fullName}
        </div>
        {/* <div className={s.profileValue}>
            <b className={s.textMenu}>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div> */}
        {profile.lookingForAJob &&
        <div className={s.profileValue}>
            <b className={s.textMenu}>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
        }
        <div className={s.profileValue}>
            <b className={s.textMenu}>About me:</b> {profile.aboutMe}
        </div>
        <div className={s.profileValue}>
            <b className={s.textMenu}>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b className={s.descriptionContacts}>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;