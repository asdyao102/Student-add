import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginPage from "../Page/LoginPage";
import WelcomePage from "../Page/WelcomePage";
import HomePage from "../Page/HomePage";
import AddxyPage from "../Page/AddxyPage";
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

const styles = StyleSheet.create({
  headerstyle:{
    backgroundColor: '#2196f3'
    
  },
  titlestyle:{
    alignSelf:'center',
    textAlign: 'center',
    flex:1,
    color:'white'
  }
});


let Init = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
});

let Auth = createStackNavigator({
  LoginPage: {
    screen: LoginPage
  }
});

let Main = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: "学员录入系统",
      headerStyle: styles.headerstyle,
      headerTitleStyle:styles.titlestyle,
      headerTitleContainerStyle:{
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
      }
    }
  },
  AddxyPage: {
    screen: AddxyPage,
    navigationOptions: {
      title: "学员录入系统",
      headerStyle: styles.headerstyle,
      headerTitleStyle:styles.titlestyle,
      headerTitleContainerStyle:{
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
      }
    }
  }
});

const AppNavigator = createSwitchNavigator({
  Init: Init,
  Main: Main,
  Auth: Auth
});

export default createAppContainer(AppNavigator);



