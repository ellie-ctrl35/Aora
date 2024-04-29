import { StyleSheet, Pressable, Image } from "react-native";
import {useEffect,useEffect} from "react";

const GetVideo = ({ onPress, videoURL }) => {
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
