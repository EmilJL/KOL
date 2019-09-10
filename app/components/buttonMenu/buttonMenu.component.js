import React from "react";
import { connect } from 'react-redux';
import { Modal, View, Text, Dimensions, TouchableOpacity, TouchableNativeFeedback, StyleSheet } from "react-native";
import { notifyNewMessage } from '../../redux/actions/actions.js';
import HelpOthers from "../../assets/helpOthers.svg";
import GetHelp from "../../assets/getHelp.svg";
import Diary from "../../assets/diary.svg";
import SendSMS from "../../assets/sendSMS.svg";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const S = StyleSheet.create({
	background: {
		flex: 1,
		marginLeft: 20,
		marginRight: 20 
	},
	menuTitle: {
		textTransform: 'uppercase',
		color: 'white',
		fontSize: 16,
		marginBottom: 30,
	},
	boxWrapper: {
		flexDirection: 'row',
	},
	singleBox: {
		flex: 1,
		height: 150,
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 7,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	boxText: {
		fontWeight: 'bold',
		position: 'absolute',
		bottom: 30,
		width: '100%',
		textAlign: 'center',
		color: '#414D55',
	},
});

const ButtonMenu = ({addMessageNotification, navigation, toggleMenu, setTitle}) => {
	const notification = {ID: 0, type: 'MESSAGE', seenOnce: false};
	const handleNavigation = (routeName) => {
		setTitle(routeName);
		navigation.navigate({ routeName });
		toggleMenu();
	}

	return(
		<View style={{paddingTop: screenHeight/13, paddingBottom: screenHeight/6.5, paddingLeft: 20, paddingRight: 20, width: screenWidth, height: screenHeight, backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0}}>
				<Text style={{fontSize: 16, color: 'white', lineHeight: 19, fontWeight: 'bold', marginBottom: 20.5}}>
					HVAD VIL DU GERNE FORETAGE DIG?
				</Text>
				<View style={S.boxWrapper}>
					<TouchableOpacity onPress={() => this.handleClick('GetHelp')} style={[S.singleBox, {marginLeft: 0}]}>
						<View style={S.singleBox}>
							<GetHelp style={{marginBottom: 20}} width={51} height={58.29} />
							<Text style={S.boxText}>
								Få hjælp
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.handleClick('HelpOthers')} style={[S.singleBox, {marginRight: 0}]}>
						<View style={S.singleBox}>
							<HelpOthers style={{marginBottom: 15}} width={53} height={53} />
								<Text style={S.boxText}>
									Hjælp andre
								</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={S.boxWrapper}>
					<TouchableOpacity onPress={() => this.handleClick('SendText')} style={[S.singleBox, {marginLeft: 0}]}>
						<View style={S.singleBox}>
							<SendSMS style={{marginBottom: 20, marginLeft: 12}} width={50} height={58} />
							<Text style={[S.boxText]}>
								Send SMS
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.handleClick('Diary')} style={[S.singleBox, {marginRight: 0}]}>
						<View style={S.singleBox}>
							<Diary style={{marginBottom: 15}} width={50} height={53} />
							<Text style={S.boxText}>
								Dagbog
							</Text>
						</View>
					</TouchableOpacity>
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