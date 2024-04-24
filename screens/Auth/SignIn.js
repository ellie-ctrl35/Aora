import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../components/Logo'
//import SubmitButton from '../../components/SubmitButton'
import SignInForm from '../../components/Forms/SignInForm'


const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo marginLeft="7%" marginTop="15%"/>
      {/*<SubmitButton text="Log in" width="80%" height="5%" />*/}
      <SignInForm/>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#161622"
    }
})