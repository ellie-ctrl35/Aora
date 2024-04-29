import { StyleSheet, Pressable, Image } from "react-native";
import {useEffect,useEffect} from "react";

const GetImage = ({ onPress, imgUrl }) => {
  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    if (videoURL) {
      setPreviewURL(videoURL);
    }
  }, [videoURL]);
  
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {previewURL ? (
        <Image style={styles.img} source={{ uri: previewURL }} resizeMode="cover" />
      ) : (
        <Text>Select Video</Text>
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
