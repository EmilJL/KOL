import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';
import HelpOthers from "../../assets/helpOthers.svg";
import GetHelp from "../../assets/getHelp.svg";
import Diary from "../../assets/diary.svg";
import SendSMS from "../../assets/sendSMS.svg";

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
		alignItems: 'center'
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

class Menu extends Component {
	render(){
		return(
			<View style={S.background}>
				<View style={S.boxWrapper}>
					<TouchableOpacity style={[S.singleBox, {marginLeft: 0}]}>
						<View style={[S.singleBox, {marginLeft: 0}]}>
							<GetHelp style={{marginBottom: 20}} width={51} height={58.29} />
							<Text style={S.boxText}>
								Få hjælp
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[S.singleBox, {marginLeft: 0}]}>
						<View style={[S.singleBox, {marginRight: 0}]}>
							<HelpOthers style={{marginBottom: 15}} width={53} height={53} />
							<Text style={S.boxText}>
								Hjælp andre
							</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={S.boxWrapper}>
					<TouchableOpacity style={[S.singleBox, {marginLeft: 0}]}>
						<View style={[S.singleBox, {marginLeft: 0}]}>
							<SendSMS style={{marginBottom: 20, marginLeft: 12}} width={50} height={58} />
							<Text style={S.boxText}>
								Send SMS
							</Text>
						</View>
					</TouchableOpacity>
						<View style={[S.singleBox, {marginRight: 0}]}>
							<TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
								<Diary style={{marginBottom: 15}} width={50} height={53} />
								<Text style={S.boxText}>
									Dagbog
								</Text>
							</TouchableOpacity>
						</View>
				</View>

			</View>
		);
	}
}

export default Menu;