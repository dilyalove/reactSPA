import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    return <div className={styles.mainHeader}>
      <div className={styles.logoContainer}>
        <div className={styles.logoHeader}>
          <span className={styles.logoNameFirst}>Social</span> 
          <span className={styles.logoNameSecond}>Networking</span>
        </div>
      </div>

    <div className={styles.mainSidebar}>
      <div className={styles.titleSidebar}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={styles.titleSidebar}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={styles.titleSidebar}>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>


    <div className={styles.loginBlock}>
      { props.isAuth 
        ? <div>{props.login} - <button className={styles.logout} onClick={props.logout}>Log out</button></div>
        : <div><NavLink className={styles.logout} to={'/login'}>Login</NavLink></div> }
    </div>

  </div>
}

export default Header;