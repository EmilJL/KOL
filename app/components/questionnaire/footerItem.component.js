import React, {Fragment, Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

styles = StyleSheet.create({
	footerQuestionBox: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
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
		<View style={styles.footerQuestionBox}>
			<View style={styles.footerContentBox}>
  				<Text style={[styles.footerNumber, isActive ? styles.footerNumber_Active : null]}>{questionNumber}</Text>
  			</View>
  			<View style={styles.footerContentBox}>
  				<View style={[styles.footerCircle, isActive ? styles.footerCircle_Active : null]}></View>
  			</View>
      	</View>
	)
}

export default FooterItem;