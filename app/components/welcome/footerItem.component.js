import React, {Fragment, Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

S = StyleSheet.create({
	footerQuestionBox: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		zIndex: 2
	},
	footerContentBox: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	footerCircle: {
		height: 12,
		width: 12,
		borderRadius: 12,
		borderColor: '#DDDEFD',
		borderWidth: 2
	},
	footerCircle_Active: {
		borderWidth: 0,
		backgroundColor: '#565BF6'
	},
	footerNumber: {
		fontSize: 14,
		lineHeight: 17,
		color: '#AEACBE'
	},
	footerNumber_Active: {
		fontWeight: 'bold',
		color: '#414D55'
	}
})

const FooterItem = ({questionNumber, isActive}) => {
	return (
		<View style={S.footerQuestionBox}>
			<View style={S.footerContentBox}>
  				<Text style={[S.footerNumber, isActive ? S.footerNumber_Active : null]}>{questionNumber}</Text>
  			</View>
  			<View style={S.footerContentBox}>
  				<View style={[S.footerCircle, isActive ? S.footerCircle_Active : null]}></View>
  			</View>
      	</View>
	)
}

export default FooterItem;