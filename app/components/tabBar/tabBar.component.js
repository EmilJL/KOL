import React from "react";
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Image } from "react-native";
import { setCurrentTitle, toggleHeaderVisibility } from '../../redux/actions/actions.js';
import ButtonMenu from '../buttonMenu/buttonMenu.component.js';
import Header from '../header/header.component';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const S = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: 'center', alignItems: 'center', width: '100%', height: screenHeight/6.5, backgroundColor: 'rgba(0,0,0,0)', bottom: 0, position: 'absolute'},
  containerTest: { flexDirection: "row", justifyContent: 'center', alignItems: 'center', width: '100%', position: 'absolute', bottom: 0, height: screenHeight, backgroundColor: '#f0f0f0' },
  subContainer: { height: '76.42%', width: '100%', position: 'absolute', bottom: 0, opacity: 1},
  subContainer_buttons: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%'},
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
			this.props.toggleHeaderVisibility(false);
		}
		else{
			this.setState({buttonStyle: S.middleButton, buttonPressed: false});
			this.props.toggleHeaderVisibility(true);
		}
	}
	handleNavigation = (routeName) => {
		switch(routeName){
			case 'Inbox':
				return (
					this.props.nav('INDBAKKE')
				);
			case 'Grafer':
				return( 
					this.props.nav('GRAFER')
				);
			case 'Home':
				return (
					this.props.nav('DASHBOARD')
				);
			case 'Kalender':
				return (
					this.props.nav('KALENDER')
				);
			case 'Profil':
				return(
					this.props.nav('PROFIL')
				);
			case 'HelpOthers':
				return(
					this.props.nav('HJÆLP ANDRE')
				);
			case 'GetHelp':
				return(
					this.props.nav('FÅ HJÆLP')
				);
			case 'SendText':
				return(
					this.props.nav('SEND SMS')
				);
			case 'Diary':
				return(
					this.props.nav('DAGBOG')
				);
			default:
				return null;
		}
	}

	render(){
		const screenHeight = Math.round(Dimensions.get('window').height);
    	const screenWidth = Math.round(Dimensions.get('window').width);
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
		const buttonSize = screenHeight/6.5*0.4716;

	  	return (	<View style={{height: screenHeight, width: screenWidth, position: 'absolute', bottom: 0, opacity: 1}}>
	  					{this.state.buttonPressed ? <ButtonMenu setTitle={(routeName) => this.handleNavigation(routeName)} toggleMenu={() => this.handleButtonPress()} navigation={navigation} /> : null}
					    <View style={S.container}>
					    	
				  			<TouchableOpacity onPress={() => this.handleButtonPress()} style={{alignSelf: 'center', position: 'absolute', top: 0, height: buttonSize, width: buttonSize, alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
						  		<Image style={buttonStyle} source={require('../../assets/footerButton.png')}/>
				  			</TouchableOpacity>
					    	<Image resizeMode='stretch' source={require('../../assets/footer2.png')} style={S.subContainer}/>
						    <View style={[S.subContainer, S.subContainer_buttons]}>
						     	{routes.map((route, routeIndex) => {
							        const isRouteActive = routeIndex === activeRouteIndex;
							        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
							        var extraStyles = {};
							        if (route.key == 'Home') {
							        	extraStyles = {flex: 2};
							        }
							        else{
							        	extraStyles = {flex: 1, paddingBottom: '12%', paddingTop: '12%'}
							        }
							        if (route.key == 'MainNavigator') 
							        {
							        	console.log(route);
							        	return null;
							        }
							        else{
							        	return (
								          <TouchableOpacity
								            key={routeIndex}
								            style={[S.tabButton, extraStyles]}
								            onPress={() => {
								              	onTabPress({ route });
								              	this.handleNavigation(route.routeName);
								            }}
								            onLongPress={() => {
									            onTabLongPress({ route });
									            this.handleNavigation(route.routeName);
								            }}
								            accessibilityLabel={getAccessibilityLabel({ route })}
								          >
								            {renderIcon({ route, focused: isRouteActive, tintColor })}
								            <Text style={{color: tintColor, fontSize: screenHeight/50}}>{getLabelText({ route })}</Text>
								          </TouchableOpacity>
								        );
							        }
						     	})}
						    </View>
					    </View>
					 </View>
	  	);
	}
};

const mapDispatchToProps = dispatch => {
  return {
    nav: (title) => {
      dispatch(setCurrentTitle(title))
    },
    toggleHeaderVisibility: (isVisible) => {
    	dispatch(toggleHeaderVisibility(isVisible))
    }
  }
}

export default connect(null, mapDispatchToProps)(TabBar);
