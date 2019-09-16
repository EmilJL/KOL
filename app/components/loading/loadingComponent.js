import React, {Fragment, Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { setCurrentTitle, logOut, getQuestionnairesForUser } from '../../redux/actions/actions.js';
import NewUserLoading from './newUserLoading.js';


class LoadingComponent extends Component {
  componentDidMount(){
    if (this.props.isNewUser) {
      this.props.getQuestionnaires();
    }
    else{
      if (this.props.isLoggedIn) {
        this.props.navigation.navigate(this.props.path);
      }
      else{
        this.props.navigation.navigate(this.props.path);
      }
    }
    
  } 
  render(){
    if (this.props.questionnaires && this.props.questionnaires.length > 0){
      return(
        <NewUserLoading navigation={this.props.navigation} />
      );
    }
    else{
      return(
      <View style={{flex: 1, backgroundColor: '#565BF6', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/welcome.png')} style={{width: '70%'}} />
      </View>
    );
    }
    
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

export default connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);