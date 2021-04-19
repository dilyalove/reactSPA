import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount () {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className='app-wrapper'>
          <HeaderContainer/>
            <div className='app-wrapper-content'>
              <Route path='/'
                render={ () => <LoginPage/>} />
              <Route path='/dialogs'
                render={withSuspense(DialogsContainer)}/>
              <Route path='/profile/:userId?'
                render={withSuspense(ProfileContainer)}/>
              <Route path='/users'
                render={ () => <UsersContainer/>} />
              <Route path='/login'
                render={ () => <LoginPage/>} />
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);