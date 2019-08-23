import React, {Fragment, Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';



class LoadingComponent extends Component {
  componentDidMount(){
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate(this.props.path);
    }
    else{
      this.props.navigation.navigate(this.props.path);
    }
  } 
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#565BF6', alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar hidden={true} />
      
        <Image source={require('../../assets/welcome.png')} style={{width: '70%'}} />
      </View>
    );
  }
};

export default LoadingComponent;