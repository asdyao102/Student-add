
import React, {Component} from 'react';
import {Platform, StyleSheet, Button,Text, View,TextInput} from 'react-native';
import DataStore from '../Https/AS'
import axios from 'axios'


export default class  extends Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:""
    }
    this.dataStore=new DataStore();
  }
  async login (uname,pword){
     const res = await axios.post('http://192.168.1.164:7001/login',{
       uname:uname,
       password:pword
     })
     if(res.status === 200){
        // res.data.message=='ok' && NavigatorBriage.navigation.navigate("HomePage");
        //下面用main和homepage都可以，而且当前的路由用不到搭桥
        if(res.data.message=='ok'){
          await this.dataStore.saveData("token", res.data.token)
          console.log(res.data.token);
          this.props.navigation.navigate("Main")
        }  
     }
  }
  render() {
    return (
      <View>
        <Text>
          账号
        </Text>
        <TextInput
          style={{
            width: 100,
            height: 40,
            borderWidth: 3,
            borderColor: "blue",
            padding: 0
          }}
          onChangeText={text => {
            this.setState({
              username: text
            });
          }}
        />
        <Text>
          密码
        </Text>
        <TextInput
          style={{
            width: 100,
            height: 40,
            borderWidth: 3,
            borderColor: "blue",
            padding: 0
          }}
          secureTextEntry={true} 
          onChangeText={pass => {
            this.setState({
              password: pass
            });
          }}
        />
        <View>
          {/* button里面必须是箭头函数，不然会只要渲染就会执行。花括号 {} 有取对象值的意思在內，而方法也是对象的一种，因此，这里并不单单是为onPress指定属性值那么简单，在赋值的同时还自动调用了一次该响应方法。 */}
          <Button
              title={"登陆"}
              onPress={()=>{
                this.login(this.state.username,this.state.password)
              }}
            />
        </View>
      </View>
      
    );
  }
}
