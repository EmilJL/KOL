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


class Home extends Component {
  componentDidMount() {
    console.log('jeg mountede (main)');
  }
  componentWillUnmount() {
    console.log('jeg unmountede (stadig main)');
  }
  render(){
    return (
      <Fragment>
        <SafeAreaView style={{flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0'}}>
                 <Text style={{textAlign: 'center', fontSize: 30}}>Hjem</Text>
        </SafeAreaView>
      </Fragment>
    );
  }
};


export default Home;