import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import SubmitButton from '../SubmitButton';
import { useNavigateToScreen } from '../../hooks/useNavigateToScreen';
import { useInfo } from '../../context/InfoCenter';


const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { signIn } = useInfo(); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.Headertxt}>Sign in</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput onChangeText={(text)=>setEmail(text)} style={styles.emailInput} keyboardType="email-address" placeholder='Your Unique Email' />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passBox}>
        <TextInput
          style={styles.passInput}
          textContentType='password'
          secureTextEntry={!passwordVisible}
          placeholder="Password"
          onChangeText={(text)=>setPassword(text)}
        />
        <Pressable onPress={togglePasswordVisibility} style={{ marginRight: "5%" }} >
          <AntDesign name={passwordVisible ? "eye" : "eyeo"} size={24} color="white" />
        </Pressable>
      </View>
      <Text style={styles.ForgotTxt}>Forgot Password</Text>
      <SubmitButton onPress={()=>signIn(email,password)} text="Log in" width="100%" height="13%" />
      <Pressable onPress={()=>useNavigateToScreen('SignUpScreen')} style={styles.switchLink}>
        <Text style={styles.txt1}>Don't have an account?</Text>
        <Text style={styles.txt2}>Signup</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  form: {
    height: "60%",
    width: "90%",
    alignSelf: "center",
    flexDirection: "column",
  },
  Headertxt: {
    color: "#fff",
    fontSize: 19,
    fontWeight: 500,
    marginLeft: "2%"
  },
  label: {
    marginTop: "6%",
    marginLeft: "2%",
    color: "#CDCDE0",
    fontSize: 15,
    fontWeight: 300
  },
  emailInput: {
    backgroundColor: "#1E1E2D",
    width: "96%",
    height: "13%",
    borderRadius: 8,
    marginTop: "2%",
    alignSelf: "center",
    color: "#fff",
    fontSize: 15,
    paddingLeft: "2%"
  },
  passBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E1E2D",
    width: "96%",
    height: "13%",
    borderRadius: 8,
    marginTop: "2%",
    alignSelf: "center",
    outline: "#FF8C00",
  },
  passInput: {
    width: "85%",
    height: "100%",
    color: "#fff",
    fontSize: 15,
    paddingLeft: "2%",
  },
  ForgotTxt: {
    marginTop: "3%",
    color: "#CDCDE0",
    fontSize: "1rem",
    fontWeight: 300,
    alignSelf: "flex-end",
    marginRight: "2%"
  },
  switchLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: "2%",
    width: "60%",
    height: "5%",
    marginTop: "9%",
    alignSelf: "center",
  },
  txt1: {
    color: "#fff",
    fontSize: 15
  },
  txt2: {
    color: "#FF8C00",
    fontSize: 15
  }
});
