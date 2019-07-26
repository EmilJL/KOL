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
  Image
} from 'react-native';


class Header extends Component {
  state={

  }

  render(){
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width);
    const title = this.props.title;

    if (this.props.notificationIsVisible) {

      return(
        <View style={{borderBottomWidth: 1, borderColor: 'grey', height: screenHeight/12, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          
          <TouchableNativeFeedback onPress={() => {this.props.leftButtonPress()}}>
            <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
              <Image style={{width: '100%'}} source={require('../../assets/menuHeader.png')}/>
            </View>
          </TouchableNativeFeedback>

          <View style={{justifyContent: 'center', alignItems: 'center', flex: 5}}>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              {title}
            </Text>
          </View>

          <TouchableNativeFeedback onPress={() => {}}>
            <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                <Image style={{width: '10%'}} source={require('../../assets/notificationHeader.png')}/>
            </View>
          </TouchableNativeFeedback>

        </View>
      );

    }

    else{

      return(
        <View style={{borderBottomWidth: 1, borderColor: 'lightgrey', width: screenWidth, height: screenHeight/13, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          
          <TouchableNativeFeedback onPress={() => {this.props.leftButtonPress()}}>
            <View style={{flex: 1.5, height: screenHeight/13, alignItems: 'center', justifyContent: 'center'}}>
              <Image resizeMode='contain' style={{width: '30%'}} source={require('../../assets/backHeader.png')}/>
            </View>
          </TouchableNativeFeedback>

          <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              {this.props.title}
            </Text>
          </View>

          <View style={{flex: 1.5}}>
          </View>

        </View>
      );

    }
    
  } 
}



/*const mapDispatchToProps = dispatch => {
  return {
    auth: (success) => {
      dispatch(authenticateUser(success))
    }
  }
}
*/
export default Header;
