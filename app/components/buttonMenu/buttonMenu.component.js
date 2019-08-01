import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const ButtonMenu = () => {
	return(
		<View style={{width: screenWidth, height: screenHeight, backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', justifyContent: 'center'}}>
			<View style={{height: screenWidth* 0.88, width: screenWidth * 0.88, marginBottom: screenHeight/5, alignItems: 'center', justifyContent: 'center', marginTop: -screenHeight/13}}>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', flexDirection: 'row', marginBottom: screenHeight/50}}>
					<TouchableOpacity style={{flex: 1, marginRight: screenHeight/50, backgroundColor: 'white'}}>
					</TouchableOpacity>
					<TouchableOpacity style={{flex: 1, marginLeft: screenHeight/50, backgroundColor: 'white'}}>
					</TouchableOpacity>
				</View>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', flexDirection: 'row', marginTop: screenHeight/50}}>
					<TouchableOpacity style={{flex: 1, marginRight: screenHeight/50, backgroundColor: 'white'}}>
					</TouchableOpacity>
					<TouchableOpacity style={{flex: 1, marginLeft: screenHeight/50, backgroundColor: 'white'}}>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default ButtonMenu;