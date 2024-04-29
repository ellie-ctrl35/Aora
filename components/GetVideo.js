import { StyleSheet, Pressable, Image } from "react-native";
import React from "react";

const GetVideo = ({ onPress, videoURL }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {videoURL ? (
        <Image style={styles.img} source={{ uri: videoURL }} resizeMode="cover" />
      ) : (
        <Text>Select Video</Text>
      )}
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
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
