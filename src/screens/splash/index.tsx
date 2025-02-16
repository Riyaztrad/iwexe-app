import React from 'react'
import { View,StyleSheet , Image} from 'react-native'
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'


const LogoImage = require('../splash/assets/Images/iwexe-logo.png')


function Splash({ navigation }: any) {

  setTimeout(() => {
    navigation.navigate("Leaveapproved");
  }, 2000);

  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={LogoImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',      
    backgroundColor: '#f0f0f0', 
  },
  text: {
    fontSize: 24,              
    fontWeight: 'bold',       
    color: '#333',             
  },
  imageContainer:{
    width:responsiveWidth(80),
    height:responsiveHeight(50)
  }
})

export default Splash