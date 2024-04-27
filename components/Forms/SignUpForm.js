import { StyleSheet, Text, View,Pressable,TextInput } from 'react-native'
import {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import SubmitButton from '../SubmitButton';
import { useNavigation } from '@react-navigation/native';
import { useInfo } from '../../context/InfoCenter';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useInfo(); 
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {

    setPasswordVisible(!passwordVisible);

  };

  const navigation = useNavigation();

  const navToRegister = () => {

    navigation.navigate('Login');

  };

  const signUserUp = () => {

    signUp(email,password);

  }

  return (
    <View style={styles.form}>
      <Text style={styles.Headertxt}>Sign up</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.emailInput} placeholder='Your Unique Username' />
      <Text style={styles.label}>Email</Text>
      <TextInput onChangeText={(text)=>setEmail(text)} style={styles.emailInput} keyboardType="email-address" />
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
      <SubmitButton onPress={signUserUp} text="Sign up" width="100%" height="10%" />
      <Pressable onPress={navToRegister} style={styles.switchLink}>
        <Text style={styles.txt1}>Already have an account?</Text>
        <Text style={styles.txt2}>Login</Text>
      </Pressable>
    </View>
  );
}

export default SignUpForm

const styles = StyleSheet.create({
  form: {
    height: "70%",
    width: "90%",
    alignSelf: "center",
    flexDirection: "column",
  },
  Headertxt: {
    color: "#fff",
    fontSize: "1.3rem",
    fontWeight: 500,
    marginLeft: "2%"
  },
  label: {
    marginTop: "6%",
    marginLeft: "2%",
    color: "#CDCDE0",
    fontSize: "1rem",
    fontWeight: 300
  },
  emailInput: {
    backgroundColor: "#1E1E2D",
    width: "96%",
    height: "10%",
    borderRadius: 8,
    marginTop: "2%",
    alignSelf: "center",
    outline: "#FF8C00",
    color: "#fff",
    fontSize: "1.1rem",
    paddingLeft: "2%"
  },
  passBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E1E2D",
    width: "96%",
    height: "10%",
    borderRadius: 8,
    marginTop: "2%",
    alignSelf: "center",
    outline: "#FF8C00",
  },
  passInput: {
    width: "85%",
    height: "100%",
    color: "#fff",
    fontSize: "1.1rem",
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
