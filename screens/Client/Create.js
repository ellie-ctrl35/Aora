import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import GetVideo from '../../components/GetVideo'
import GetImage from '../../components/GetImage'
import SubmitButton from '../../components/SubmitButton'

const Create = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Upload Video</Text>
      <Text style={styles.label}>Video Title</Text>
      <TextInput placeholder='Give your video catchy title' style={styles.vidTitle}/>
      <Text style={styles.label}>Upload Video</Text>
      <GetVideo/>
      <Text style={styles.label}>Thumbnail Image</Text>
      <GetImage/>
      <Text style={styles.label}>AI Prompt</Text>
      <TextInput placeholder='The AI prompt of the video' style={styles.vidTitle}/>
      <SubmitButton text="Submit & Publish" width="90%" height={60}/>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      backgroundColor:"#161622"
    },
    head:{
      color:"white",
      fontWeight:500,
      fontSize:22,
      alignSelf:"flex-start",
      marginLeft:"6%",
      marginTop:"5%",
      marginBottom:"2%"
    },
    label:{
      color:"white",
      fontSize:15,
      opacity:0.6,
      marginTop:"5%",
      marginLeft:"6%",
      alignSelf:"flex-start"
    },
    vidTitle:{
      backgroundColor:"#1E1E2D",
      height:"8%",
      width:"90%",
      marginTop:"2%",
      borderRadius:8,
      color:"white",
      fontSize:18,
      paddingLeft:"3%"
    }
})