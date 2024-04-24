import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserInfo from '../../components/UserInfo';
import NoVids from '../../components/NoVids';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons style={styles.exit} name="exit-to-app" size={30} color="#FF5B5B" />
      <UserInfo/>
      <NoVids/>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#161622"
    },
    exit:{
        alignSelf:"flex-end",
        marginRight:"7%",
        marginTop:"4%"
    }
})