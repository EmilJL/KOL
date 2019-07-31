import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
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
    const entryTitle = this.props.title;
    const mainTitle = this.props.mainTitle;
    var someTitle = this.props.currentPage;
    console.log('eeeylmao: ' + someTitle);
    if (this.props.notificationIsVisible) {

      return(
        <View style={{backgroundColor: 'white', zIndex: 100, width: screenWidth, height: screenHeight/13, position: 'absolute', top: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          
          <TouchableNativeFeedback onPress={() => {this.props.leftButtonPress()}}>
            <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}}>
              <Image style={{width: '27%', marginLeft: '27%', marginTop: '12.5%'}} source={require('../../assets/menuHeader.png')}/>
            </View>
          </TouchableNativeFeedback>

          <View style={{justifyContent: 'center', alignItems: 'center', flex: 7}}>
            <Text style={{fontSize: 14, textAlign: 'center'}}>
              {this.props.currentPage}
            </Text>
          </View>

          <TouchableNativeFeedback onPress={() => {}}>
            <View style={{flex: 1.5, alignContent: 'center', justifyContent: 'center', height: '100%'}}>
                <Image style={{width: '50%', marginLeft: '25%', marginTop: '12.5%'}} source={require('../../assets/notificationHeader.png')}/>
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
              {entryTitle}
            </Text>
          </View>

          <View style={{flex: 1.5}}>
          </View>

        </View>
      );

    }
    
  } 
}

const mapStateToProps = state => {
  return{
    currentPage: state.nav.currentPage
  }
}

export default connect(mapStateToProps)(Header);