import React from 'react'
import { Text, View , StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const  shoplogo = require('../login/assets/Images/shoplogo.png')

function Login() {

  return (
    <LinearGradient
      colors={["#351f43", "#d4dae7"]}
      locations={[0.4, 0]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.linearGradient}
    >
      <Image source={shoplogo} style={styles.logo} />
      <View style={styles.card}>
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
      </View>

      <View style={{}}>
        <TouchableOpacity 
          style={styles.button}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Text style={styles.buttonText}>→</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  mainContainter:{
    height:'40%',
    backgroundColor: '#351f43',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
    alignSelf:'center',
    marginTop:170
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    height:250,
    alignSelf:'center'
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  countryCodeContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  countryCodeText: {
    color: '#333',
  },
  textInput: {
    flex: 1,
    padding: 10,
    color: '#000',
  },
  otpText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#4B0082',
    borderRadius: 50,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize:10
  },})

export default Login