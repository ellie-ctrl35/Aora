import { Image, StyleSheet } from 'react-native';
import React from 'react';
import logo from '../resources/logo.png';

// Accept style as a prop
const Logo = ({ marginLeft, marginTop }) => {
  return (
    <Image 
      source={logo} 
      style={[styles.logo, { marginLeft: marginLeft, marginTop: marginTop }]} 
      resizeMode="contain" 
    />
  );
}

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: "25%", // Example width, adjust as needed
    height: 100, // Example height, adjust as needed
  },
});
