import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import EmptyState from "../resources/EmptyState.png";
import SubmitButton from "./SubmitButton";
import { useNavigation } from "@react-navigation/native";
const NoVids = () => {
  const navigation = useNavigation();
  const navToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.emptyImg} source={EmptyState} resizeMode="contain" />
      <Text style={styles.txt}>No Videos Found for this Profile</Text>
      <SubmitButton
        onPress={navToHome}
        text="Back to Explore"
        width="100%"
        height="15%"
      />
    </View>
  );
};

export default NoVids;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "0%",
  },
  emptyImg: {
    width: "100%",
    height: "70%",
  },
  txt: {
    color: "white",
    fontSize: 22,
    fontWeight: 30,
  },
});
