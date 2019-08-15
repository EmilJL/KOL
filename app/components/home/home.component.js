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


class Home extends Component {
  render(){
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
        <View style={{borderWidth: 1, borderColor: 'green', height: screenHeight, width: '100%', paddingTop: screenHeight/9, alignContent: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', borderWidth: 2, borderColor: 'green'}}>
          <ScrollView style={{paddingLeft: '5%', paddingRight: '5%', paddingBottom: screenHeight/6}}>
            <View style={{height: screenHeight*0.6, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', backgroundColor: 'green', height: 50, width: 50}} onPress={() => console.log('hejmeddig')}/>
            </View>
            <View style={{height: screenHeight*0.7, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', backgroundColor: 'green', height: 50, width: 50}} onPress={() => console.log('hejmeddig')}/>
            </View>
            <View style={{height: screenHeight*0.7, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', backgroundColor: 'green', height: 50, width: 50}} onPress={() => console.log('hejmeddig')}/>
            </View>
            <View style={{height: screenHeight* 0.7, width: '100%', borderWidth: 2}}>
              <Text style={{alignSelf: 'center', textAlign: 'center', fontSize: 30}}>Hjem</Text>
              <Button title={'sup'} style={{alignSelf: 'center', backgroundColor: 'green', height: 50, width: 50}} onPress={() => console.log('hejmeddig')}/>
            </View>
            <View style={{height: screenHeight/5}}>
            </View>
          </ScrollView>
        </View>
    );
  }
};


export default Home;