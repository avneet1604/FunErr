import React, {Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image  
     } from 'react-native';

export default class MatchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
             <SafeAreaView style={styles.droidSafeArea} />
             <ImageBackground source={require('../assets/bg4.jpg')} style={styles.backgroundImage}>
             
             <Image
              source={require("../assets/logo.png")}
              style={styles.appIcon}
            ></Image>
             
             <View style={styles.titleBar}>
                <Text style={styles.titleText}>Let's Match ...</Text>
             </View>
             
             </ImageBackground>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
    },
    titleBar: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        marginTop:-165,
        marginLeft:50
    },
    appIcon: {
        resizeMode: "contain",
        width:110,
        height:110
      },
      line:{
          marginTop:-70,
          width:750
      }
})