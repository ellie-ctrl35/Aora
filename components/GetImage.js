import { StyleSheet, Pressable, Image } from "react-native";
import React from "react";

const GetImage = ({ onPress, imgUrl }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {imgUrl ? (
        <Image style={styles.img} source={{ uri: imgUrl }} resizeMode="cover" />
      ) : (
        <Text>Select Image</Text>
      )}
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
    flexDirection: "row",
  },
  img: {
    width: "45%",
    height: "55%",
  },
});
