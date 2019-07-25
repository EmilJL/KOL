/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { authenticateUser } from './redux/actions/actions.js';
import Welcome from './components/welcome/welcome.component.js';
import AppContainer from './AppContainer';

class App extends Component{
  state = {
    notifications: [],
    userData: {},
    forumData: {},
    messages: [],
    questionnaireAnswers: [],
    calendarEntries: [],
    forumComments: [],
    forumPosts: [],
    fetchinUserData: false,
    fetchingForumData: false,
    isLoggedIn: false,
    failedFetching: false
  }

  authenticationHandler = (value) => {
    this.setState({
      isLoggedIn: value
    });
  }

  render(){

    if (!(this.props.isLoggedIn)) {
      return (
         <Welcome />
      );
    }
    else{
      return (
        <AppContainer />
      );
    }
  }
  
};

const mapStateToProps = state => {
  return{
    notifications: state.users.notifications,
    userData: state.users.userData,
    forumData: state.users.forumData,
    messages: state.users.messages,
    questionnaireAnswers: state.users.questionnaireAnswers,
    calendarEntries: state.users.calendarEntries,
    forumComments: state.users.forumComments,
    forumPosts: state.users.forumPosts,
    fetchinUserData: state.users.fetchinUserData,
    fetchingForumData: state.users.fetchingForumData,
    isLoggedIn: state.users.isLoggedIn,
    failedFetching: state.users.failedFetching
  }
}

export default connect(mapStateToProps)(App);