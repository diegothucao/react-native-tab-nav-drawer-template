import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import HomeScreen from './ui/HomeScreen';

const Stack = createStackNavigator();
export enum Routes {
  splash = "splash",
  homeScreen = "homeScreen",

}

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.splash}>
          <Stack.Screen
            name={Routes.splash}
            component={Splash}
            options={{
              title: 'Splash Screen',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
      
              },
            }} />
          <Stack.Screen
            name={Routes.homeScreen}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default (App);
