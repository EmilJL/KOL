import React, { useState, useEffect } from 'react';
import { Animated, View, Image, Text, Dimensions } from 'react-native';
import Logo from '../../assets/logo.svg';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const SplashScreen = (props) => {
	const [growthAnimation] = useState(new Animated.Value(0));

	React.useEffect(() => {
	    Animated.timing(
	      growthAnimation,
	      {
	        toValue: screenWidth*2.5,
	        duration: 2000,
	      }
	    ).start(() => {props.setAnimationDone()});
	 }, [])

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		<Animated.View 
			style={{position: 'absolute', alignSelf: 'center', alignContent: 'center', justifyContent: 'center', height: growthAnimation, width: growthAnimation, backgroundColor: '#565BF6', borderRadius: growthAnimation}}
		>
			<Logo width='28%' style={{alignSelf: 'center'}} />
		</Animated.View>
		</View>
	);
}

export default SplashScreen;