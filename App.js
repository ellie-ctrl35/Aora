// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";
import { InfoProvider,useInfo } from "./context/InfoCenter"; // Import the InfoProvider context

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <InfoProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </InfoProvider>
    </GestureHandlerRootView>
  );
};

const MainNavigator = () => {
  const { user } = useInfo(); // Access the user from InfoCenter

  return <>{user ? <AppStack /> : <AuthStack />}</>;
};

export default App;
