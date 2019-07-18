
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavigatorBriage from "../Navigator/NavigatorBriage";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import XyPage from "./XyPage";
import MyPage from "./MyPage";
const TABS = {
  NewsPage: {
    screen: XyPage,
    navigationOptions: {
      tabBarLabel: "学员管理",
      tabBarIcon: ({ tintColor, focused }) => {
        return <FontAwesome name="tasks" size={26} color={tintColor} />;
      }
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "个人中心",
      tabBarIcon: ({ tintColor, focused }) => {
        return <FontAwesome name="user" size={26} color={tintColor} />;
      }
    }
  }
};
const Tab = createAppContainer(createBottomTabNavigator(TABS));
export default class extends Component {
  constructor(props){
    super(props);
  }
  render() {
    NavigatorBriage.navigation = this.props.navigation;
    return (
        <Tab/>
    );
  }
}
