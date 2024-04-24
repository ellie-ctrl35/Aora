import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Logo from '../../components/Logo'
import SignUpForm from '../../components/Forms/SignUpForm'

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Logo marginLeft="7%" marginTop="15%"/>
    <SignUpForm/>
  </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#161622"
}
})