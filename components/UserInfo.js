import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import avatar from '../resources/avatar.png'
import {useInfo} from '../context/InfoCenter'
const UserInfo = () => {
  const {user}=useInfo();
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} resizeMode='contain' source={avatar}/>
      <Text style={styles.username}>
        {user.email}
      </Text>
      <View style={styles.numbers}>
        <View style={styles.figure}>
         <Text style={styles.number}>10</Text>
         <Text style={styles.title}>Posts</Text>
        </View>
        <View style={styles.figure}>
         <Text style={styles.number}>130</Text>
         <Text style={styles.title}>Views</Text>
        </View>
      </View>
    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
    container:{
        width:"50%",
        height:"30%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    avatar:{
        width:"50%",
        height:"50%",
        marginTop:"5%"
    },
    username:{
        color:"#fff",
        fontSize:18,
        fontWeight:400,
        marginTop:"3%",
        width:300,
        textAlign:"center",
    },
    numbers:{
        width:"70%",
        height:"25%",
        marginTop:"4%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    figure:{
        height:"100%",
        width:"45%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    number:{
        color:"white",
        fontSize:25,
        fontWeight:700
    },
    title:{
        color:"white",
        opacity:0.8
    }
})