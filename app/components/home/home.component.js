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
import { setCurrentTitle } from '../../redux/actions/actions.js';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);


class Home extends Component {
  render(){
    this.props.setHeaderTitle('DASHBOARD');
    return (
        <View style={{flexDirection: 'row', height: screenHeight, width: screenWidth, paddingBottom: screenHeight/9, paddingTop: 20, alignContent: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0'}}>
        
          <ScrollView style={{paddingLeft: '5%', paddingRight: '5%', paddingBottom: screenHeight/6, width: screenWidth}}>
            <View style={{height: screenHeight*0.6, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', height: 50, width: 50}} onPress={() => this.props.setHeaderTitle('DASHBOARD')}/>
            </View>
            <View style={{height: screenHeight*0.7, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', height: 50, width: 50}} onPress={() => console.log('hejmeddig')}/>
            </View>
            <View style={{height: screenHeight*0.7, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', height: 50, width: 50}} onPress={() => console.log('hejmeddig')}/>
            </View>
            <View style={{height: screenHeight* 0.7, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', height: 50, width: 50}} onPress={() => console.log('hejmeddig')}/>
            </View>
            <View style={{height: screenHeight/5}}>
            </View>
          </ScrollView>
        </View>
    );
  }
};

mapDispatchToProps = dispatch => {
  return {
    setHeaderTitle: (title) => {
      dispatch(setCurrentTitle(title));
    }
  }
} 
mapStateToProps = state => {
  return {
    sideMenuIsVisible: state.users.sideMenuIsVisible
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Home));