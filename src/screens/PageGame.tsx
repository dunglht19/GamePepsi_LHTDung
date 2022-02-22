import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'

import Animated, {
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

// console.log("width",windowWidth);
// console.log("height",windowHeight);

const BUTTON_HEIGHT = windowHeight * 0.4
const BUTTON_WIDTH = windowWidth * 0.2
const ScreenMiddle = windowWidth / 2.5
const BUTON_PADDING = 10
const SWIPEABLE_DIMENSON = BUTTON_WIDTH - 2 * BUTON_PADDING
const V_SWIPE_RANGE = BUTTON_HEIGHT - 2 * BUTON_PADDING - SWIPEABLE_DIMENSON

const PageGame = props => {
  const { navigation } = props

  const onSignIn = () => {
    navigation.navigate('PageMain')
  }
  const X = useSharedValue(0)
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: e => {
      X.value = e.translationX
      
    }
  })

  const AnimatedStyles = {
    buttonSwipe: useAnimatedStyle(() => {
      return {
        transform: [{ translateY: X.value }]
      }
    })
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg3.png')}
        resizeMode='cover'
        style={styles.image}
      >
        <View style={styles.top}>
          <Text style={styles.fontWhite2}>Vuốt lên để chơi</Text>
          <Text style={styles.fontWhite}>
            Bạn còn <Text style={{ color: 'yellow' }}>0</Text> lượt chơi miễn
            phí
          </Text>
        </View>
        <View style={styles.bottom}>
          {/* <Image
                style={styles.img2}
                source={require("../../assets/swiperUp.png")}
              />
            
            
            <Image
                style={styles.img}
                source={require("../../assets/daulan.png")}
              />  */}

          <View style={styles.swipeCont}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
              <Animated.View
                style={[styles.buttonSwipe, AnimatedStyles.buttonSwipe]}
              ></Animated.View>
            </PanGestureHandler>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PageGame

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  top: {
    flex: 0.7,

    // borderWidth: 3,
    textAlign: 'center',
    color: 'white'
  },
  bottom: {
    flex: 0.3,
    justifyContent: 'center',
    borderWidth: 3,
    textAlign: 'center'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white'
  },

  touchable: {
    alignItems: 'center',
    justifyContent: 'center'
    // borderWidth: 5,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 8,
    color: 'white'
  },
  title2: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 8,
    color: 'darkblue'
  },
  imageButton: {
    justifyContent: 'center',
    width: 230,
    height: 50
    // borderWidth: 5,
  },
  fontWhite: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17
  },
  fontWhite2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5
  },
  img: {
    width: 208,
    height: 225,
    marginLeft: 90
  },
  img2: {
    bottom: 210,
    left: 160,
    position: 'absolute'
  },

  swipeCont: {
    // width:BUTTON_WIDTH,
    // height:BUTTON_HEIGHT,
    width: BUTTON_HEIGHT,
    height: BUTTON_WIDTH,

    padding: BUTON_PADDING,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BUTTON_HEIGHT
    // marginHorizontal:ScreenMiddle,
  },
  buttonSwipe: {
    height: SWIPEABLE_DIMENSON,
    width: SWIPEABLE_DIMENSON,
    borderRadius: SWIPEABLE_DIMENSON,
    backgroundColor: 'red',
    position: 'absolute',
    left: 0
  }
})
