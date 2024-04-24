import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Client/Home";
import Create from "../screens/Client/Create";
import Profile from "../screens/Client/Profile";
import Saved from "../screens/Client/Saved";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          height:"10%",
          border:"none"
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "account-circle";
          } else if (route.name === "Create") {
            iconName = "plus-circle";
          } else if (route.name === "Saved") {
            iconName = "bookmark";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={30} color={focused ? "#FFA001" : "#4B5563"} />
          );
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#4B5563",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
};

export default Tabs;
