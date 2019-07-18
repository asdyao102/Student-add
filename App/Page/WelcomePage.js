
import React, {Component} from 'react';
import {Platform,Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DataStore from '../Https/AS'
import axios from 'axios'

export default class extends Component {
  constructor(props){
    super(props);
    this.state={
      isLogin:false,
      token:''
    }
    this.dataStore=new DataStore();
  }
  async componentDidMount(){
    //因为AsyncStorage是异步，所以最后用await
    // this.dataStore.fetchLocalData('token').then(wrapdata =>{
    //   console.log(wrapdata);
    //   this.setState({
    //     token:wrapdata
    //   })
    //   console.log(this.state.token);
    // }).catch(error => {
    //   console.log(error);
    // });
    
    let otoken = await this.dataStore.fetchLocalData('token')
    let res = await axios.get('http://192.168.1.164:7001/login_token',{
          headers: {
            "Authorization": "Bearer " + otoken
           }
        })
    if(res.status===200 && res.data.user){
          this.setState({
            isLogin:true
          })
    }
  }
  render() {
    return (
      <View>
        <Text>Welcome!!!!</Text>
        <Button
            title={"点我进入App"}
            onPress={()=>{
              this.props.navigation.navigate(
                this.state.isLogin?"Main":"Auth"
              )
            }}
          />
      </View>
    );
  }
}
