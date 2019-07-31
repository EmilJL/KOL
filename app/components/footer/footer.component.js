import React, {Fragment, Component} from 'react';
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Button,
  Image,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Entypo';

class Footer extends Component {
  state={

  }

  render(){
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);

    return(
      <View style={{height: screenWidth/4.2}}>
        <View style={{position: 'absolute', bottom: 0, height: '100%', width: '100%'}}>
          <ImageBackground resizeMode='cover' source={require('../../assets/footer2.png')} style={{width: '100%', height: '100%', bottom: 0, postition: 'absolute', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 0.3}}>
            </View>
            <View style={{flex: 1, borderColor: 'red', borderWidth: 0, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
                <Icon name="email" size={35} color={'grey'}/>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: '15%'}}>
                <Text style={{fontSize: 14, textAlign: 'center'}}>
                  Inbox
                </Text>
              </View>
            </View>
            <View style={{flex: 1, borderColor: 'green', borderWidth: 0, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
                <Icons name="bar-graph" size={35} color={'grey'}/>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: '15%'}}>
                <Text style={{fontSize: 14}}>
                  Grafer
                </Text> 
              </View>
            </View>

            <View style={{flex: 1.6, borderColor: 'red', borderWidth: 0}}>
            </View>
            
            <View style={{flex: 1, borderColor: 'red', borderWidth: 0, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
                <Icons name="calendar" size={35} color={'grey'}/>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: '15%'}}>
                <Text style={{fontSize: 14, textAlign: 'center'}}>
                  Kalender
                </Text>
              </View>
            </View>
            <View style={{flex: 1, borderColor: 'green', borderWidth: 0, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
                <Icons name="user" size={35} color={'grey'}/>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: '15%'}}>
                <Text style={{fontSize: 14}}>
                  Profil
                </Text> 
              </View>
            </View> 
            <View style={{flex: 0.3}}>
            </View>
          </ImageBackground>
        </View>
  
        
      </View>
    );
  } 
}

export default Footer;
