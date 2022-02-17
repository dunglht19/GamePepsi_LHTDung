import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";




const SignUp = (props) => {
     const { navigation } = props;
      

   const onSignIn=()=>{
            navigation.navigate('PageMain');
        }
    return (
       <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg.png")}
        resizeMode="cover"
        style={styles.image}>
      
        <View style={styles.top}>
        <Text style={styles.fontWhite}>Hey, mừng bạn đến với</Text>
        <Text style={styles.fontWhite2}>Pepsi Tết</Text> 
        </View>
        

        <View style={styles.middle}>
          <Text style={styles.fontWhite2}>ĐĂNG NHẬP</Text>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            placeholderTextColor="black"
          />
         <Image style={styles.img} source={require("../../assets/nuocngot.png")}/>
          
          
        </View>

        <View style={styles.bottom}>
        
          <TouchableOpacity style={styles.touchable}>
            <ImageBackground
               source={require("../../assets/button1.png")}
              resizeMode="cover"
              style={styles.imageButton}
            >
              <Text style={styles.title}>Lấy mã OTP</Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
             
              color: "white",
            }}
          >
            Hoặc
          </Text>
          <TouchableOpacity style={styles.touchable}
          onPress={onSignIn}
          >
            <ImageBackground
              source={require("../../assets/button2.png")}
              resizeMode="cover"
              style={styles.imageButton}
             

            >
              <Text style={styles.title2}>Đăng Ký</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  top: {
    flex: 0.3,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
    color: "white",
  },

  middle: {
    flex: 0.3,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
    color: "white",
  },

  bottom: {
    flex: 0.3,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    
  },

touchable: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 5,
  },
  title: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  title2: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 8,
    color: "darkblue",
  },
  imageButton: {
    justifyContent: "center",
    width: 230,
    height: 50,
    // borderWidth: 5,
  },
  fontWhite:{
    color: "white",
    textAlign: "center",
    fontSize:17,
  },
  fontWhite2: {
    color: "white",
    textAlign: "center",
    fontSize:30,
    fontWeight:'bold',
    marginTop:5,
  },
  img: {
    width: 130,
    height: 130,
    marginLeft: 130,
    
    
    }
})
