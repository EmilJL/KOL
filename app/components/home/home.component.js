import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
  ImageBackground
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import SideMenu from '../sideMenu/sideMenu.component.js';
import { setCurrentTitle, logOut, getQuestionnairesForUser, getUserQuestions, getDiaryForUser, setModal } from '../../redux/actions/actions.js';
import styles from '../../styles/styles.js';
import Menu from '../menu/menu.js';
import Graphs from '../graphs/graphs.js'
import QuestionsOthers from './questionsOthers.js';
import DashboardWidget from './dashboardWidgetsl.js';
import GenericModal from '../modal/modal.component.js';
import Header from '../header/header.component.js'; 
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const statusBarHeight = StatusBar.currentHeight;
const S = styles;
const months = [
  'januar',
  'februar',
  'marts',
  'april',
  'maj',
  'juni',
  'juli',
  'august',
  'september',
  'oktober',
  'november',
  'december',
]
const weekDays = [
  'Søndag',
  'Mandag',
  'Tirdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag'
];

class Home extends Component {
  state={
    dateString: ''
  }
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
   getTodayDateString = () => {
   var today = new Date();
   var dateString = '' + weekDays[today.getDay()] + ' d. ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
   this.setState({dateString});
  }
  componentDidMount(){
    this.props.getQuestionnaires();
    this.props.getQuestions();
    this.props.getDiaryEntries();
    this.getTodayDateString();
  }
  render(){
    return (
        <View style={[S.scrollView, {width: screenWidth}]}>
        	{this.props.modal && this.props.modal.isVisible ? <GenericModal /> : null}
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
                {this.state.dateString}
              </Text>
            </View>
            <View style={{width: '100%', marginTop: 20}}>
              <Menu handleNavigation={(routeName) => this.handleNavigation(routeName)} navigation={this.props.navigation} />
            </View>
            <View style={{width: '100%', marginTop: 30}}>
              {this.props.questionnaires[0] && this.props.scores && this.props.scores[0] ? <Graphs isForDashboard={true} /> : null}
            </View>
            <View style={{width: '100%', marginTop: 20}}>
              <QuestionsOthers questionsShown={3} />
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
    },
    
  }
} 

mapStateToProps = state => {
  return {
    sideMenuIsVisible: state.users.sideMenuIsVisible,
    user: state.users.user,
    questionnaires: state.users.questionnaires,
    modal: state.users.modal,
    scores: state.users.scoresForWeek
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Home));