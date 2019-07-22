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
  Button
} from 'react-native';



class Main extends Component {
  static navigationOptions = {
    header: null    
  }
  render(){
    return (
      <Fragment>
        <SafeAreaView style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Her er noget?</Text>
          <Button
            title='Profil'
            onPress={() => this.props.navigation.navigate('User')}
            style={{alignSelf: 'center'}}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
};


export default Main;
