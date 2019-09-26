import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Profile from '../../assets/dude.svg';
import Friends from '../../assets/moredudes.svg';
import Members from '../../assets/list.svg';
import QuestionnaireIcon from '../../assets/paper.svg';
import Weather from '../../assets/weather.svg';
import Settings from '../../assets/settings.svg';
import Terms from '../../assets/eye.svg';
import LogOut from '../../assets/exit.svg';

const styles = StyleSheet.create({
	background: {
		width: '70%',
		height: '100%',
		backgroundColor: 'white'
	},

	menuItem: {
		flexDirection: 'row',
		height: 50,
		borderTopWidth: 1,
		borderColor: '#F6F6F7',
		alignItems: 'center',
		width: '100%'
	},
	menuIcon: {
		marginRight: 17,
	},
	menuTitle: {
		textTransform: 'uppercase',
		color: '#AEACBE',
		fontSize: 12,
		fontWeight: 'bold'
	},
});

const logOutNow = (navigation, logOut) => {
	logOut();
	navigation.navigate('AuthenticationFlow');
}

const getIcon = (name) => {
	switch(name){
		case 'profile':
			return <Profile width='20%' style={styles.menuIcon} />
		case 'friends':
			return <Friends width='20%' style={styles.menuIcon} />
		case 'members':
			return <Members width='20%' style={styles.menuIcon} />
		case 'questionnaire':
			return <QuestionnaireIcon width='20%' style={styles.menuIcon} />
		case 'weather':
			return <Weather width='20%' style={styles.menuIcon} />
		case 'settings':
			return <Settings width='20%' style={styles.menuIcon} />
		case 'terms':
			return <Terms width='20%' style={styles.menuIcon} />
		case 'logOut':
			return <LogOut width='20%' style={styles.menuIcon} />
	}
}

const DrawerItem = ({navigation, title, navPath, iconName, logOut, isInactive, handleNavigation}) => {
	return (
			<TouchableOpacity onPress={() => {logOut ? logOutNow(navigation, logOut) : handleNavigation()}}>
				<View style={[styles.menuItem, {borderBottomWidth: title =='INDSTILLINGER' ? 1 : 0}]}>
					{getIcon(iconName)}
					<Text style={[styles.menuTitle, {opacity: isInactive=='no' ? 1 : 0.2}]}>
						{title}
					</Text>
				</View>
			</TouchableOpacity>
	
	)
}

export default DrawerItem;