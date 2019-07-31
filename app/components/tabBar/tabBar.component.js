import React from "react";
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image } from "react-native";
import { setCurrentPage } from '../../redux/actions/actions.js';
import ButtonMenu from '../buttonMenu/buttonMenu.component.js';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const S = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: 'center', alignItems: 'center', width: '100%', height: screenHeight/6, paddingLeft: '2%', paddingRight: '2%', bottom: 0, position: 'absolute'},
  tabButton: { justifyContent: "center", alignItems: "center"},
  middleButton: {width: '100%', height: '100%' },
  middleButtonPressed: { width: '100%', height: '100%', transform:[{ rotateZ: '45deg'}, ], }
});

class TabBar extends React.Component {
	
	state = {
		buttonStyle: S.middleButton,
		buttonPressed: false
	}
	handleButtonPress = () => {
		if (this.state.buttonStyle === S.middleButton ) {
			this.setState({buttonStyle: S.middleButtonPressed, buttonPressed: true});
		}
		else{
			this.setState({buttonStyle: S.middleButton, buttonPressed: false});
		}
	}

	render(){

	  	const {
	    	renderIcon,
	    	getLabelText,
	    	activeTintColor,
	    	inactiveTintColor,
	    	onTabPress,
	    	onTabLongPress,
	    	getAccessibilityLabel,
	    	navigation
	  	} = this.props;
		const { routes, index: activeRouteIndex } = navigation.state;
		const buttonStyle = this.state.buttonStyle;

	  	return (
	  		<View style={{height: screenHeight*12/13, width: '100%', position: 'absolute', top: screenHeight/13}}>
	  			{this.state.buttonPressed ? <ButtonMenu /> : null}
	  			<TouchableOpacity onPress={() => this.handleButtonPress()} style={{alignSelf: 'center', position: 'absolute', bottom: (screenHeight/6)-(screenHeight/6/3.1116), height: screenHeight/6/1.5558, width: screenHeight/6/1.5558, alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
			  		<Image style={buttonStyle} source={require('../../assets/footerButton.png')}/>
	  			</TouchableOpacity>
	  			<View style={{height: screenHeight/6, position: 'absolute', bottom: 0, width: '100%'}}>
			  		<ImageBackground resizeMode='cover' source={require('../../assets/footer2.png')} style={{height: screenHeight/6, bottom: 0, position: 'absolute', width: '100%'}}>
					    <View style={S.container}>
					      {routes.map((route, routeIndex) => {
					      	console.log(route);
					        const isRouteActive = routeIndex === activeRouteIndex;
					        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
					        var extraStyles = {};
					        if (route.key == 'Home') {
					        	extraStyles = {flex: 2, marginTop: screenHeight/12, height: screenHeight/6};
					        }
					        else{
					        	extraStyles = {flex: 1, paddingTop: screenHeight/42, height: screenHeight/6}
					        }
					        return (
					          <TouchableOpacity
					            key={routeIndex}
					            style={[S.tabButton, extraStyles]}
					            onPress={() => {
					              onTabPress({ route });
					              this.props.nav(route.key);
					            }}
					            onLongPress={() => {
						            onTabLongPress({ route });
						            this.props.nav(route.key);
					            }}
					            accessibilityLabel={getAccessibilityLabel({ route })}
					          >
					            {renderIcon({ route, focused: isRouteActive, tintColor })}
					            <Text style={{color: tintColor, fontSize: 12, position: 'absolute', paddingTop: '40%'}}>{getLabelText({ route })}</Text>
					          </TouchableOpacity>
					        );
					      })}
					    </View>
				    </ImageBackground>
				</View>
	  		</View>
	  		
	  	);
	}
};

const mapDispatchToProps = dispatch => {
  return {
    nav: (key) => {
      dispatch(setCurrentPage(key))
    }
  }
}

export default connect(null, mapDispatchToProps)(TabBar);
