import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Entypo';



const TabIcon = ({ name, color, size, style, ...props }) => {
  if (name==='email') {
  	return (
  		<View style={[{flex: 1}, style]}>
  			<Icon color={color} name={name} size={30}/>
  		</View>
  	);
  }

  else{
  	return(
  		<View style={[{flex: 1}, style]}>
  			<Icons color={color} name={name} size={30}/>
  		</View>
  	);	
  }
};

export default TabIcon;