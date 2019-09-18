import React, { useState, useEffect } from 'react';
import { Animated, View, Image, Text, Dimensions } from 'react-native';

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
			<Image resizeMode={'contain'} source={require('../../assets/logo.png')} style={{alignSelf: 'center', width: '28%'}} />
		</Animated.View>
		</View>
	);
}

export default SplashScreen;