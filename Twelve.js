import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import {  Button, Icon, Text } from 'native-base';
import Video from "react-native-video";

const Twelve = () => {
  return (
    <>
    <Video
source={require('../assests/login.mp4')}
style={styles.backgroundVideo}
muted={true}
repeat={true}
resizeMode={"cover"}
rate={1.0}
ignoreSilentSwitch={"obey"}
/>
<View style={{width:'100%', height:'100%'}}>
  <View style={{width:'100%', height:'45%'}}></View>
  <View style={{width:'100%', height:'15%',}}>
    <Text style={{textAlign:'center',fontWeight:'700',fontSize:40,color:'white'}}>muzmatch </Text>
    <Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'700'}}>Where single muslim meet</Text>
  </View>
<View style={{width:'100%', height:'35%',justifyContent:'space-around'}}>
<Button rounded style={{backgroundColor:'white',width:'80%',height:'30%',alignSelf:'center'}}>
<Image  style={{width:32, height:29,marginLeft:15}} source={require('../assests/google.png')} />
            <Text style={{color:'black',textAlign:'center'}}>Continue with Google</Text>
          </Button>
          <Button rounded style={{backgroundColor:'white',width:'80%',height:'30%',alignSelf:'center'}}>
            <Image  style={{width:45, height:33, alignSelf:'center'}} source={require('../assests/face.png')} />
            <Text style={{color:'black',textAlign:'center'}}>Continue with Facebook</Text>
          </Button>
          <Button rounded style={{backgroundColor:'white',width:'80%',alignSelf:'center',height:'30%'}}>
          <Image  style={{width:32, height:30,marginLeft:15}}  source={require('../assests/mail.png')} />
            <Text style={{color:'black',textAlign:'center'}}>Continue with Mail</Text>
          </Button>
</View>
</View>
</>
  )
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
    }
});

export default Twelve ;
