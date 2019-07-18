
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DataStore from '../Https/AsDemo'
import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
export default class extends Component {
  constructor(props) {
    super(props);
    this.NAMES = ["推荐", "视频", "热点", "社会", "娱乐", "军事"];
  };
   genTabs (){
    const obj={};
    this.NAMES.forEach((item,index) => {
        obj[`${item}`] = {
          screen: props =>{
            return <NewsItem {...props} name={item}/>
          }
        }
    });
    return obj;
  };

  render() {
    const Tab = createAppContainer(
      createMaterialTopTabNavigator(this.genTabs())
    );
    return (
      <Tab/>
    );
  }
}


class NewsItem extends Component{
  constructor(props) {
    super(props);
    this.dataStore=new DataStore();
  }
  componentDidMount() {
    let url = `https://api.github.com/search/repositories?q=NodeJS`;
    this.dataStore
      .fetchData(url)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render(){
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}
