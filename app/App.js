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
import { Provider, connect } from 'react-redux';
import { getSavedToken, authenticateWithToken, setAgesNow } from './redux/actions/actions.js';
import TopNavigator from './navigators/topNavigator.js';
import SplashScreen from './components/splashScreen/splashScreen.component.js';

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
    failedFetching: false,
    hasAnimatedSplash: false
  }
  componentDidMount(){
   /* this.props.authenticateWithToken();
   console.log(this.props.token);*/
   this.props.setAges();
  }

  setAnimationDone = () => {
    this.setState({hasAnimatedSplash: true});
  }

  authenticationHandler = (value) => {
    this.setState({
      isLoggedIn: value
    });
  }

  render(){
    if (this.state.hasAnimatedSplash) {
      return(
        <TopNavigator />
      );
    }
    else {
      return(
        <SplashScreen setAnimationDone={() => this.setAnimationDone()} />
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkForToken: () => {
      dispatch(getSavedToken())
    },
    authenticateWithToken: () => {
      dispatch(authenticateWithToken())
    },
    setAges: () => {
      dispatch(setAgesNow())
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
    questionnaireQuestions: state.users.questionnaireQuestions,
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