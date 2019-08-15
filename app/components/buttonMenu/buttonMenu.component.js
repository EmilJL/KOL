import React from "react";
import { connect } from 'react-redux';
import { Modal, View, Text, Dimensions, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { notifyNewMessage } from '../../redux/actions/actions.js';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const ButtonMenu = ({addMessageNotification, navigation, toggleMenu, setTitle}) => {
	const notification = {ID: 0, type: 'MESSAGE', seenOnce: false};
	const handleNavigation = (routeName) => {
		setTitle(routeName);
		navigation.navigate({ routeName });
		toggleMenu();
	}

	return(
		<View style={{paddingTop: screenHeight/13, paddingBottom: screenHeight/6.5, width: screenWidth, height: screenHeight, backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0}}>
			<View style={{height: screenWidth*0.85, width: screenWidth * 0.85, alignItems: 'center', justifyContent: 'center'}}>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', flexDirection: 'row', marginBottom: screenWidth*0.075}}>
					<TouchableNativeFeedback style={{alignItems: 'center', justifyContent: 'center'}} onPress={() => handleNavigation('GetHelp')}>
						<View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: screenWidth*0.075}}>
							<Text style={{fontSize: 16}}>
							Få hjælp
							</Text>
						</View>
					</TouchableNativeFeedback>
					<TouchableNativeFeedback onPress={() => handleNavigation('HelpOthers')}>
						<View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
							<Text style={{fontSize: 16}}>
							Hjælp andre
							</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', flexDirection: 'row'}}>
					<TouchableNativeFeedback onPress={() => addMessageNotification(notification)}>
						<View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginRight: screenWidth*0.075}}>
							<Text style={{fontSize: 16}}>
							Send SMS eller tilføj notifikation
							</Text>
						</View>
					</TouchableNativeFeedback>
					<TouchableNativeFeedback onPress={() => handleNavigation('Diary')}>
						<View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
							<Text style={{fontSize: 16}}>
							Dagbog
							</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		</View>
	);
};

const mapDispatchToProps = dispatch => {
  return {
  	addMessageNotification: (notification) => {
  		dispatch(notifyNewMessage(notification))
  	}
  }
}

export default connect(null, mapDispatchToProps)(ButtonMenu);