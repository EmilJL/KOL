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
	},
	boxText: {
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
					<View style={[S.singleBox, {marginLeft: 0}]}>
						<Text style={S.boxText}>
							Få hjælp
						</Text>
					</View>
					<View style={[S.singleBox, {marginRight: 0}]}>
						<Text style={S.boxText}>
							Hjælp andre
						</Text>
					</View>
				</View>

				<View style={S.boxWrapper}>
					<View style={[S.singleBox, {marginLeft: 0}]}>
						<Text style={S.boxText}>
							Send SMS
						</Text>
					</View>
					<View style={[S.singleBox, {marginRight: 0}]}>
						<Text style={S.boxText}>
							Dagbog
						</Text>
					</View>
				</View>

			</View>
		);
	}
}

export default Menu;