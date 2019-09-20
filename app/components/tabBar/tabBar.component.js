import React from "react";
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image} from "react-native";
import { setCurrentTitle, toggleHeaderVisibility } from '../../redux/actions/actions.js';
import ButtonMenu from '../buttonMenu/buttonMenu.component.js';
import Header from '../header/header.component';
import { DrawerActions } from 'react-navigation';
import MenuButtonClosed from '../../assets/menuButtonClosed';
import MenuButtonOpened from '../../assets/menuButtonOpened';
import BottomBarBG from '../../assets/Bottom_bar.svg';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const S = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: 'center', alignItems: 'center', width: '100%', height: 101.79, backgroundColor: 'rgba(0,0,0,0)', bottom: 0, position: 'absolute'},
  containerTest: { flexDirection: "row", justifyContent: 'center', alignItems: 'center', width: '100%', position: 'absolute', bottom: 0, height: screenHeight, backgroundColor: '#f0f0f0' },
  subContainer: { height: 101.79, width: '100%', position: 'absolute', bottom: 0, opacity: 1},
  subContainer_buttons: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: '2%', paddingRight: '2%', paddingBottom: '2%'},
  tabButton: { justifyContent: "center", alignItems: "center"},
  middleButton: {width: '100%', height: '100%' },
});

class TabBar extends React.Component {
	
	state = {
		buttonPressed: false
	}
	handleButtonPress = () => {
		var buttonIsPressed = this.state.buttonPressed;
		this.setState({buttonPressed: !buttonIsPressed});
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
	
	
	  	return (	<View style={{height: screenHeight, width: screenWidth, position: 'absolute', bottom: 0, opacity: 1}}>
	  					{this.state.buttonPressed ? <ButtonMenu setTitle={(routeName) => this.handleNavigation(routeName)} toggleMenu={() => this.handleButtonPress()} navigation={navigation} /> : null}
					    <View style={S.container}>
					    	
				  			<TouchableOpacity onPress={() => this.handleButtonPress()} style={{alignSelf: 'center', position: 'absolute', bottom: 52.39, height: 50, width: 50, alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
						  		{this.state.buttonPressed ? <MenuButtonOpened width='100%' /> : <MenuButtonClosed width='100%' />}
				  			</TouchableOpacity>
				  			
				  				<Image resizeMode={'stretch'} source={require('../../assets/bottomBar.png')} style={{height: 108, width: 800, bottom: 0, position: 'absolute'}} />
				  			
					    
						    <View style={[S.subContainer, S.subContainer_buttons]}>
						     	{routes.map((route, routeIndex) => {
							        const isRouteActive = routeIndex === activeRouteIndex;
							        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
							        var extraStyles = {};
							        extraStyles = {flex: 1, marginTop: 40};
							        if (route.key == 'MainNavigator') 
							        {
							        	return null;
							        }

							        else{
							        	if(route.key === 'Inbox'){
							    			extraStyles = {flex: 1, marginRight: '24%', opacity: 0.2, marginTop: 40};
										}
										else if(route.key === 'Kalender') {
											extraStyles = {flex: 1, opacity: 0.2, marginTop: 40};
										}
							        	return (
								          <TouchableOpacity
								            key={routeIndex}
								            style={[S.tabButton, extraStyles]}
								            onPress={() => {
								              	route.key == 'Kalender' || route.key == 'Inbox' ? null : 
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
								            <Text style={{color: tintColor, fontSize: 10, marginBottom: 10}}>{getLabelText({ route })}</Text>
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
