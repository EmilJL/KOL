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


class Footer extends Component {
  state={

  }

  render(){
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);

    return(
      <View style={{position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: screenWidth/3.5}}>
        <ImageBackground resizeMode='cover' source={require('../../assets/footer.png')} style={{width: '100%', bottom: 0, postition: 'absolute'}}>
          <View style={{flex: 1}}>
          </View>
        </ImageBackground>
      </View>
    );
  } 
}

export default Footer;
