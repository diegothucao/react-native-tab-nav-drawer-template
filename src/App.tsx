import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import HomeScreen from './ui/HomeScreen';
import CreateScreen from './ui/CreateScreen'
import SettingScreen from './ui/SettingScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppColor from './resources/colors/AppColor';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export enum Routes {
  splash = "splash",
  homeScreen = "homeScreen",
  createScreen = "createScreen",
  settingScreen = "Setting",
  tabHome = "tabHome",
  home = "Home"
}

class App extends React.Component {

  HomeStackScreen = () => {
    return (
      <HomeStack.Navigator >
        <HomeStack.Screen
          name={Routes.homeScreen}
          component={HomeScreen}
        />
        <HomeStack.Screen
          name={Routes.createScreen}
          component={CreateScreen}
        />
      </HomeStack.Navigator>
    )
  }

  TabHome = () => {
    return (
      <Tab.Navigator initialRouteName={Routes.splash}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === Routes.home) {
              iconName = focused
                ? 'md-home'
                : 'md-home';
            } else if (route.name === Routes.settingScreen) {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: AppColor.lightYellow,
          inactiveTintColor: AppColor.lightGrey,
        }} >
        <Tab.Screen name={Routes.home} component={this.HomeStackScreen} />
        <Tab.Screen name={Routes.settingScreen} component={SettingScreen} />
      </Tab.Navigator>
    );
  }
  render() {
    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName={Routes.splash}>
          <MainStack.Screen
            name={Routes.splash}
            component={Splash}
            options={{
              headerShown: false
            }}
          />
          <MainStack.Screen
            name={Routes.tabHome}
            component={this.TabHome}
            options={{
              headerShown: false
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default (App);
