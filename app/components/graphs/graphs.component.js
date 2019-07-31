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


class Graphs extends Component {
  render(){
    return (
      <Fragment>
        <SafeAreaView style={{flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0'}}>
                <Text style={{textAlign: 'center', fontSize: 30}}>Grafer</Text>
        </SafeAreaView>
      </Fragment>
    );
  }
};


export default Graphs;