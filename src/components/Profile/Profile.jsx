import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './ProfileInfo/ProfileInfo.module.css';

const Profile = (props) => {
    return (
            <div className={s.descriptionBlock}>
                <ProfileInfo isOwner={props.isOwner} 
                            profile={props.profile} 
                            status={props.status} 
                            updateStatus={props.updateStatus}
                            saveProfile={props.saveProfile}
                            savePhoto={props.savePhoto} />
                <MyPostsContainer />
            </div>
    )
}

export default Profile;