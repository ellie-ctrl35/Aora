import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { useState } from "react";
import GetVideo from "../../components/GetVideo";
import GetImage from "../../components/GetImage";
import { launchImageLibraryAsync } from "expo-image-picker";
import SubmitButton from "../../components/SubmitButton";
import { useInfo } from "../../context/InfoCenter";
import useCreatePost from "../../hooks/useCreatePost";

const Create = () => {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [videoURL, setVideoUrl] = useState();
  const [imgUrl, setImgUrl] = useState();
  const { user } = useInfo();
  const { loading, createPost } = useCreatePost();

  const handleVideo = async () => {
    const videoPickerResult = await launchImageLibraryAsync({
      mediaTypes: "videos",
    });
    if (!videoPickerResult.cancelled) {
      setVideoUrl(videoPickerResult.uri);
    }
  };

  const handleThumbnail = async () => {
    const imagePickerResult = await launchImageLibraryAsync({
      mediaTypes: "images",
    });
    if (!imagePickerResult.cancelled) {
      setImgUrl(imagePickerResult.uri);
    }
  };

  const handleSubmit = () => {
    createPost(title, prompt, videoURL, imgUrl);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Upload Video</Text>
      <Text style={styles.label}>Video Title</Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        placeholder="Give your video catchy title"
        style={styles.vidTitle}
      />
      <Text style={styles.label}>Upload Video</Text>
      <GetVideo onPress={handleVideo} videoURL={videoURL} />
      <Text style={styles.label}>Thumbnail Image</Text>
      <GetImage onPress={handleThumbnail} imgUrl={imgUrl} />
      <Text style={styles.label}>AI Prompt</Text>
      <TextInput
        onChangeText={(text) => setPrompt(text)}
        placeholder="The AI prompt of the video"
        style={styles.vidTitle}
      />
      <SubmitButton
        onPress={handleSubmit}
        text={loading ? "Submitting..." : "Submit & Publish"}
        width="90%"
        height="8%"
      />
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#161622",
  },
  head: {
    color: "white",
    fontWeight: 500,
    fontSize: 22,
    alignSelf: "flex-start",
    marginLeft: "6%",
    marginTop: "5%",
    marginBottom: "2%",
  },
  label: {
    color: "white",
    fontSize: 15,
    opacity: 0.6,
    marginTop: "5%",
    marginLeft: "6%",
    alignSelf: "flex-start",
  },
  vidTitle: {
    backgroundColor: "#1E1E2D",
    height: "8%",
    width: "90%",
    marginTop: "2%",
    borderRadius: 8,
    color: "white",
    fontSize: 18,
    paddingLeft: "3%",
  },
});
