import React, { Component } from 'react';
import config from '../config';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends Component {

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: config.Client_ID, //change to .env when deploying
        scope: 'email'
      }).then( ()=> {
        this.auth=window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    isSignedIn?
    this.props.signIn(this.auth.currentUser.get().getId()):
    this.props.signOut()
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null){
      return null
    }else if (this.props.isSignedIn) {
      return ( 
        <button 
        className='login-btn' 
        onClick={this.onSignOutClick}>
          Log Out
      </button> )
    } else {
      return (
        <button 
        className='login-btn' 
        onClick={this.onSignInClick}>
          Login with Google
      </button>
      )
    }
  }

  render() { 
    return ( 
      <div>
        Hello
        {this.renderAuthButton()}
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
}
 
export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);