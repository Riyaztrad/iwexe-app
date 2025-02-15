import React , {useState}from 'react'
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,

} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { OtpInput } from "react-native-otp-entry";
import Icons from 'react-native-vector-icons/AntDesign'
const  shoplogo = require('../login/assets/Images/shoplogo.png')


function Login() {
  const [isLogin, setIslogin] = useState<boolean>(false)

  const onLogin = ()=> {
    setIslogin(!isLogin)
  }



  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.linearGradient}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <LinearGradient
              colors={["#351f43", "#d4dae7"]}
              locations={[0.6, 0]}
              start={{ x: 0.1, y: 0 }}
              end={{ x: 0.1, y: 1 }}
            >
              <Image source={shoplogo} style={styles.logo} />
              <View style={styles.card}>
                <View>
                  {isLogin ? (
                    <>
                      <Text style={styles.loginText}>Confirm OTP</Text>
                      <Text
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10,
                          fontSize: 12,
                          color: "#000",
                        }}
                      >
                        Enter the OTP sent to - +91 7881934945
                      </Text>
                      <OtpInput
                        numberOfDigits={4}
                        focusColor="green"
                        autoFocus={false}
                        hideStick={true}
                        blurOnFilled={true}
                        disabled={false}
                        type="numeric"
                        secureTextEntry={false}
                        focusStickBlinkingDuration={500}
                        onFocus={() => console.log("Focused")}
                        onBlur={() => console.log("Blurred")}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        textInputProps={{
                          accessibilityLabel: "One-Time Password",
                        }}
                        theme={{
                          pinCodeContainerStyle: {
                            width: 70,
                            height: 55,
                          },
                        }}
                      />
                      <View style={styles.resendContainer}>
                        <Text style={styles.remainingText}>
                          Time Remaining 0s
                        </Text>
                        <TouchableOpacity>
                          <Text>Resend</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  ) : (
                    <>
                      <Text style={styles.loginText}>Login</Text>
                      <View style={styles.inputContainer}>
                        <View style={styles.countryCodeContainer}>
                          <Text style={styles.countryCodeText}>+91</Text>
                        </View>
                        <TextInput
                          style={styles.textInput}
                          placeholder="Enter your phone number"
                          keyboardType="phone-pad"
                          maxLength={10}
                        />
                      </View>
                      <Text style={styles.otpText}>
                        We will send you a one-time password (OTP)
                      </Text>
                    </>
                  )}
                </View>
              </View>
              <View style={styles.logionButton}>
                <View style={styles.logonButtomContainer}>
                  <TouchableOpacity style={styles.button} onPress={()=>onLogin() }>
                    <Icons  name="arrowright" color="#fff" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  remainingText:{
    color: "#000", 
    fontSize: 12 
  },
  safeContainer:{
    flex: 1, 
    height: "100%", 
    backgroundColor: "#d4dae7"
  },
  resendContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingTop: 10,
  },
  // otpText:{
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   fontSize: 12,
  //   color: "#000",
  // },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logionButton: {
    position: "absolute",
    bottom:-40,
    alignSelf: "center",
  },
  logonButtomContainer: {
    padding: 10,
    backgroundColor: "#d3dae8",
    borderRadius: 50,
  },
  mainContainter: {
    height: "40%",
    backgroundColor: "#351f43",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
    alignSelf: "center",
    marginTop: 170,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    height: 250,
    alignSelf: "center",
  },
  loginText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
  countryCodeContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  countryCodeText: {
    color: "#333",
  },
  textInput: {
    flex: 1,
    padding: 10,
    color: "#000",
  },
  otpText: {
    textAlign: "center",
    color: "#666",
    fontSize:12,
    paddingTop: 30,
  },
  button: {
    backgroundColor: "#4B0082",
    borderRadius: 50,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
  },
});

export default Login