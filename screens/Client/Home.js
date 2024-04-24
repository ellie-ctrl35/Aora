import { SafeAreaView, StyleSheet, Text, View,TextInput } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeMsg}>
          Welcome back {'\n'}
          Emmanuel
        </Text>
      </View>
      <View style={styles.searchBox}>
        <TextInput style={styles.searchInput} textContentType="text" placeholder="Search for a video topic"/>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#161622",
  },
  headerContainer:{
    width:"90%",
    height:"10%",
    display:"flex",
    flexDirection:"row",
    marginTop:"4%"  ,
    alignItems:"center",  
    justifyContent:"space-between"           
  },
  welcomeMsg:{
    color:"white",
    fontSize:17,
    fontWeight:"600"
  },
  searchBox:{
    width:"90%",
    height:"7%",
    backgroundColor:"#1E1E2D",
    marginTop:"4%",
    borderRadius:8
  },
  searchInput:{
    color:"#fff",
    width:"87%",
    height:"100%",
    paddingLeft:"4%",
    fontSize:17
  }
});
