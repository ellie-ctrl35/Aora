import { StyleSheet, Text, View, Pressable,Image } from "react-native";
import React from "react";
import UploadImg from '../../resources/UploadImg.png'

const GetVideo = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.img} source={UploadImg} resizeMode="contain"/>
    </Pressable>
  );
};

export default GetVideo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E2D",
    width: "90%",
    height: "24%",
    borderRadius: 8,
    marginTop: "2%",
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:"35%",
    height:"35%"
  }
});
