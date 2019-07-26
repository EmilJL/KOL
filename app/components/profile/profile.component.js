import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';



class Profile extends Component {
	static navigationOptions = {
    	header: null	
  	}
	render() {
		return (
		    <Fragment>
		      <SafeAreaView style={{flex: 2, alignContent: 'center', justifyContent: 'center', backgroundColor: 'lightgrey'}}>
		      	<View style={{flex: 0.5}}>
		        </View>
		      	<View style={{flex: 0.5, alignContent: 'stretch', justifyContent: 'center', borderWidth: 2, borderColor: 'black'}}>
		        	<View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
		        		<Text style={{textAlign: 'center'}}>Her er noget andet?</Text>
		        	</View>
		        	<View style={{flex: 1, alignContent: 'stretch', justifyContent: 'center'}}>
			        	<Button
				            title='Home'
				            onPress={() => this.props.navigation.navigate('Home')}
				            style={{}}
			        	/>
		        	</View>
		        </View>
		        <View style={{flex: 3}}>
		        </View>
		      </SafeAreaView>
		    </Fragment>
	  	);
	}
}

export default Profile;
