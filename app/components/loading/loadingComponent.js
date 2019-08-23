import React, {Fragment, Component} from 'react';
import {
  View
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';



class LoadingComponent extends Component {
  componentDidMount(){
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('DrawerFlow');
    }
  } 
  render(){
    return(
      <View style={{flex: 1}}>
      </View>
    )
  }
};


mapStateToProps = state => {
  return {
     isLoggedIn: state.users.isLoggedIn,
  }
}

export default LoadingComponent;