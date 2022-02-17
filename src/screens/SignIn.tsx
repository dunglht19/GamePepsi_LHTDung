import React, { useState } from "react";
import { StyleSheet, Text, View,  Button,TextInput,ImageBackground,Image,TouchableOpacity} from "react-native";

import Checkbox from "expo-checkbox";

const SignIn = (props) => {
  const { navigation } = props;
  const [isChecked, setChecked] = useState(false);
  const onLogin = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/bg.png")} resizeMode="cover" style={styles.image}>        
        <View style={styles.top}>
          <Text style={styles.fontWhite}>Hey, mừng bạn đến với</Text>
          <Text style={styles.fontWhite2}>Pepsi Tết</Text>  
        </View>

        <View style={styles.middle}>          
          <Text style={styles.fontWhite2}>ĐĂNG KÝ</Text>
          <TextInput  style={styles.input}   placeholder="Số điện thoại"  placeholderTextColor="black"/>
          
          <TextInput style={styles.input}  placeholder="Tên người dùng"  placeholderTextColor="black"/>           
          {/* checkbox */}
          <View style={styles.section}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}/>            
            <Text style={styles.paragraph}> Tôi đã đọc và đồng ý với <Text style={{color:'yellow',fontWeight:'bold'}}> thể lệ chương trình</Text> Pepsi Tết.</Text>
          </View>
        </View>

        <View style={styles.bottom}>   
          <TouchableOpacity style={styles.touchable}>
            <ImageBackground
              source={require("../../assets/button1.png")} resizeMode="cover" style={styles.imageButton}>              
              <Text style={styles.title}>Lấy mã OTP</Text>  
            </ImageBackground>
          </TouchableOpacity>  

          <Text style={{textAlign: "center", color: "white",}}>Hoặc</Text>
          
          <TouchableOpacity style={styles.touchable} onPress={onLogin}>
            <ImageBackground source={require("../../assets/button2.png")} resizeMode="cover" style={styles.imageButton}>              
              <Text style={styles.title2}>Đăng Nhập</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;

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
    flex: 0.1,
    justifyContent: "center",
    // borderWidth: 3,
    
    color: "white",
  },

  middle: {
    flex: 0.45,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
    color: "white",
  },

  bottom: {
    flex: 0.2,
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
    
    // borderWidth: 2,
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
  fontWhite: {
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
  // checkbox
  section: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
  },
  paragraph: {
    fontSize: 14,
    // borderWidth: 2,
    color: "white",
    
  },
  checkbox: {
      
   
    marginLeft: 10,
  },

  
});
