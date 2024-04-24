import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import {useState,useEffect} from "react";
import NoVids from "../../components/NoVids";

const Saved = () => {

  const [savedVids ,setSavedVids] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Saved Videos</Text>
      <View style={styles.searchBox}>
        <TextInput style={styles.searchInput} textContentType="text" placeholder="Search you saved videos"/>
      </View>
      {
        savedVids ? <View style={{width:"90%",height:"40%",backgroundColor:"dodgerblue"}}></View>:<NoVids/>
      }
    </SafeAreaView>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#161622",
  },
  head:{
    color:"white",
    alignSelf:"flex-start",
    marginLeft:"5%",
    fontSize:25,
    fontWeight:600,
    marginTop:"6%"
  },
  searchBox:{
    width:"90%",
    height:"7%",
    backgroundColor:"#1E1E2D",
    marginTop:"7%",
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
