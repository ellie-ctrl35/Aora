import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Intro from '../screens/Auth/Intro';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator 
     initialRouteName='Intro'
     screenOptions={{
      headerShown: false  // This line hides the header for all screens
    }}>
      <Stack.Screen  name="Intro" component={Intro} />
      <Stack.Screen  name="Login" component={SignIn} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;