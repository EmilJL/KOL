import {
  View,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Image
} from 'react-native';

const Header = (flexSize, notificationPress) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);
  return(
      <TouchableNativeFeedback onPress={() => {this.props.buttonFunction()}}>
        <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
          <Image style={{height: '80%'}} src={require(this.props.buttonImageSource)}/>
        </View>
      </TouchableNativeFeedback>
  );
}