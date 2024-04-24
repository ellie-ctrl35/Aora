import { StyleSheet, Text, View, Pressable ,Image} from "react-native";
import React from "react";
import UploadImg from '../resources/UploadImg.png'

const GetImage = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
          <Image style={styles.img} source={UploadImg} resizeMode="contain"/>
        
        </Pressable>
      );
};

export default GetImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E2D",
    height: "8%",
    width: "90%",
    marginTop: "2%",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row"
  },
  img:{
    width:"45%",
    height:"55%"
  },
  
});
