import React, {Fragment, Component} from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const statusbarHeight = StatusBar.currentHeight;

const DrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: screenHeight*1/14,
    zIndex: 20
  },
});

export default DrawerContentComponent;