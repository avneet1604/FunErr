import React, {Component} from 'react';
import {View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg2.jpg')} style={styles.backgroundImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}> FUNLEARN </Text>
                </View>

                <TouchableOpacity style={styles.routeCard}
                onPress={()=>this.props.navigation.navigate("Main")} 
                 >
                  <Text style={styles.clickHere}> Click here to Learn--- </Text>
                  <Image source={require("../assets/play.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
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
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black",
        marginTop:230
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 250,
        borderRadius: 30,
    },
    clickHere: {
        paddingLeft: 30,
        color: "green",
        fontSize: 20
    },
    iconImage: {
        position: "absolute",
        height: 100,
        width: 100,
        resizeMode: "contain",
        right: 5,
        top: 30,
        marginRight:70
    },
})