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
import { getSavedToken, authenticateWithToken } from './redux/actions/actions.js';
import TopNavigator from './navigators/topNavigator.js';

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
  componentDidMount(){
    this.props.authenticateWithToken();
  }

  authenticationHandler = (value) => {
    this.setState({
      isLoggedIn: value
    });
  }

  render(){
   
    return(
      <TopNavigator />
    );
        
  }
  
};

const mapDispatchToProps = dispatch => {
  return {
    checkForToken: () => {
      dispatch(getSavedToken())
    },
    authenticateWithToken: () => {
      dispatch(authenticateWithToken())
    }
  }
}

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
    failedFetching: state.users.failedFetching,
    token: state.users.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);