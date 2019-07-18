
import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, Image, Button } from 'react-native';
let { Height, Width } = Dimensions.get('window');
import NavigatorBriage from "../Navigator/NavigatorBriage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const styles = StyleSheet.create({
  prolist: {
    width: '33.3%',
    height: 97,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    marginTop: -1,
    marginLeft: -1,
    textAlign: 'center'
  },
  icostyle: {
    marginTop: 10,
    textAlign: 'center'
  }
});
export default class extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View>
        <View style={{ width: Width, height: 150 }}>
          <Image
            style={{ width: Width, height: 150 }}
            source={require("../img/timg.jpg")}
          />
        </View>
        {/* 下面的的justifyContent迟早会改成center，现在项目少先不改 */}
        <View style={{ width: Width, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 2 }}>
          <View style={styles.prolist}>
            <FontAwesome name="briefcase" size={50} color={"#2196f3"} style={styles.icostyle} />
            <Button
              style={{ textAlign: 'center' ,height:30}}
              title={"录入学员"}
              onPress={() => {
                NavigatorBriage.navigation.navigate("AddxyPage");
              }}
            />
          </View>
          <View style={styles.prolist}>
            <FontAwesome name="bitbucket-square" size={50} color={"#f46d64"} style={styles.icostyle} />
            <Button
              style={{ textAlign: 'center',height:30}}
              title={"待开发"}
              color={'#f46d64'}
              onPress={() => {
                
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
