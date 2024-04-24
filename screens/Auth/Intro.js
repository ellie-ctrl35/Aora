import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import Img from "../../resources/img.png";
import SubmitButton from "../../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
const Intro = () => {
    const navigation = useNavigation();
    const navToAuth = () =>{
     navigation.navigate('Login')
    }
  return (
    <SafeAreaView style={styles.container}>
      <Logo marginTop="15%" />
      <Image source={Img} resizeMode="contain" style={styles.img} />
      <Text style={styles.welcome}>
        Where Creativity Meets Innovation:Embark on {"\n"} 
        a Journey of Limitless Exploration with Aora
      </Text>
      <SubmitButton text="Continue with Email" width="90%" height="7%" onPress={navToAuth}/>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: "95%",
    height: "50%",
    marginTop: -30,
  },
  welcome:{
    color:"#fff",
    fontSize:17,
    textAlign:"center",
    opacity:0.8
  }
});
