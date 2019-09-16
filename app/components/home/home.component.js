import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import SideMenu from '../sideMenu/sideMenu.component.js';
import { setCurrentTitle, logOut, getQuestionnairesForUser, getUserQuestions, getDiaryForUser } from '../../redux/actions/actions.js';
import styles from '../../styles/styles.js';
import Menu from '../menu/menu.js';
import Graphs from '../graphs/graphs.js'
import QuestionsOthers from './questionsOthers.js';
import DashboardWidget from './dashboardWidgetsl.js';
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const statusBarHeight = StatusBar.currentHeight;
const S = styles;

class Home extends Component {
  handleLogout = () => {
      this.props.logOut();
      this.props.navigation.navigate('AuthenticationFlow');
  }
  handleNavigation = (routeName) => {
    switch(routeName){
      case 'HelpOthers':
        return(
          this.props.nav('HJÆLP ANDRE')   
        );
      case 'GetHelp':
        return(
          this.props.nav('FÅ HJÆLP')
        );
      case 'SendText':
        return(
          this.props.nav('SEND SMS')
        );
      case 'Diary':
        return(
          this.props.nav('MIN DAGBOG')
        );
      default:
        return null;
    }
  }
  componentDidMount(){
    this.props.getQuestionnaires();
    this.props.getQuestions();
    this.props.getDiaryEntries();
  }
  render(){
    this.props.setHeaderTitle('DASHBOARD');
    return (
        <View style={[S.scrollView, {width: screenWidth, paddingTop: screenHeight/13}]}>
        
          <ScrollView>
            <DashboardWidget />
            <View style={S.intro}>
              <Text style={S.intro_welcome}>
                Velkommen til dit dashboard,
              </Text>
              <Text style={S.intro_welcome_span}>
                {this.props.user ? (this.props.user.nickname ? this.props.user.nickname : this.props.user.metadata.nickname) : null}
              </Text>
              <Text style={S.intro_date}>
                Fredag d. 12 maj 2019
              </Text>
            </View>
            <View style={{width: '100%', marginTop: 20}}>
              <Menu handleNavigation={(routeName) => this.handleNavigation(routeName)} navigation={this.props.navigation} />
            </View>
            <View style={{width: '100%', marginTop: 40}}>
              {this.props.questionnaires[0] ? <Graphs /> : null}
            </View>
            <View style={{width: '100%', marginTop: 20}}>
              <QuestionsOthers />
            </View>
            <View style={{height: screenHeight/5}}></View>
          </ScrollView>
        </View>
    );
  }
};

mapDispatchToProps = dispatch => {
  return {
    getQuestionnaires: () => {
      dispatch(getQuestionnairesForUser('2019-01-01', '2019-12-31'))
    },
    setHeaderTitle: (title) => {
      dispatch(setCurrentTitle(title));
    },
    nav: (title) => {
      dispatch(setCurrentTitle(title))
    },
    logOut: () => {
      dispatch(logOut())
    },
    getQuestions: () => {
      dispatch(getUserQuestions(0, 4))
    },
    getDiaryEntries: () => {
    	dispatch(getDiaryForUser(0, 4))
    }
  }
} 

mapStateToProps = state => {
  return {
    sideMenuIsVisible: state.users.sideMenuIsVisible,
    user: state.users.user,
    questionnaires: state.users.questionnaires
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Home));