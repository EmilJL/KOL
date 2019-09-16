import React, {Fragment, Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image
} from 'react-native'

class NewUserLoading extends Component {
  componentDidMount(){
    console.log('newUserLoading is mounted!')
    this.props.navigation.navigate('DrawerFlow');
  }
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#565BF6', alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/welcome.png')} style={{width: '70%'}} />
      </View>
    );
  }
};

export default NewUserLoading;