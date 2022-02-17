import React, { useState,useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated, PanResponder,
} from "react-native";





const PageGame = (props) => {
   const { navigation } = props;
      

   const onSignIn=()=>{
            navigation.navigate('PageMain');
        }

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0, } } // Back to zero
        
      ).start();
    },
  });


    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg3.png")}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.top}>
            <Text style={styles.fontWhite2}>Vuốt lên để chơi</Text>
            <Text style={styles.fontWhite}>Bạn còn <Text style={{ color: "yellow" }}>0</Text> lượt chơi miễn phí</Text> 
          </View>
          <View style={styles.bottom}>
          <Image
                style={styles.img2}
                source={require("../../assets/swiperUp.png")}
              />

            <Animated.View {...panResponder.panHandlers}>
            <Image
                style={styles.img}
                source={require("../../assets/daulan.png")}
              /> 
            </Animated.View>
            
          </View>
        </ImageBackground>
      </View>
    );
}

export default PageGame

const styles = StyleSheet.create({
    container: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  top: {
    flex: 0.7,
   
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
  width: 208,
    height: 225,
    marginLeft: 90,    
  },
   img2: {
    
    bottom:210,
    left:160,
    position:'absolute',    
  },
})
