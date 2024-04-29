// useCreatePost.js
import { useState } from "react";
import { collection, addDoc } from "../../Config/FireBase";
import { storage } from "../../Config/FireBase";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);

  const createPost = async (title, prompt, videoURL, imgUrl) => {
    setLoading(true);

    try {
      // Upload video to Firebase Storage
      const videoRef = storage.ref().child(`videos/${Date.now()}`);
      await videoRef.putFile(videoURL);
      const videoDownloadURL = await videoRef.getDownloadURL();

      // Upload image to Firebase Storage
      const imgRef = storage.ref().child(`images/${Date.now()}`);
      await imgRef.putFile(imgUrl);
      const imgDownloadURL = await imgRef.getDownloadURL();

      // Add post to Firestore
      await addDoc(collection(db, "posts"), {
        title,
        prompt,
        videoURL: videoDownloadURL,
        imgUrl: imgDownloadURL,
      });

      console.log("Post added successfully!");
    } catch (error) {
      console.error("Error adding post: ", error);
    }

    setLoading(false);
  };

  return { loading, createPost };
};

export default useCreatePost;
