
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NavigatorBriage from "../Navigator/NavigatorBriage";
export default class extends Component {
  render() {
    return (
      <View>
        <Text>my !!!!</Text>
        <Button
              title={"退出"}
              onPress={()=>{
                 AsyncStorage.clear();
                 NavigatorBriage.navigation.navigate("Auth");
              }}
            />
      </View>
    );
  }
}
