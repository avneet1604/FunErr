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

export default class MainScreen extends Component{
    render(){
        return(
           <View style={styles.container}>
             <SafeAreaView style={styles.droidSafeArea} />
             <ImageBackground source={require('../assets/bg3.jpg')} style={styles.backgroundImage}>
             
             <Image
              source={require("../assets/logo.png")}
              style={styles.appIcon}
            ></Image>
             
             <View style={styles.titleBar}>
                <Text style={styles.titleText}>FUNLEARN</Text>
             </View>

             <TouchableOpacity style={styles.routeCardW} onPress={() =>
                this.props.navigation.navigate("Write")
             }>
                <Text style={styles.routeText}>Let's Write</Text>
                <Image source={require("../assets/write.png")} style={styles.iconImage1}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCardM} onPress={() =>
                this.props.navigation.navigate("Match")
             }>
                <Text style={styles.routeText}>Let's Match</Text>
                <Image source={require("../assets/match.png")} style={styles.iconImage2}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCardT} onPress={() =>
                this.props.navigation.navigate("Train")
             }>
                <Text style={styles.routeText}>Fun with Trains</Text>
                <Image source={require("../assets/train2.png")} style={styles.iconImage3}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCardC} onPress={() =>
                this.props.navigation.navigate("Count")
             }>
                <Text style={styles.routeText}>Fun Counting</Text>
                <Image source={require("../assets/numbers1.jpg")} style={styles.iconImage4}></Image>
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
    routeCardW: {
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white',
        bottom:20
    },
    routeCardM: {
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white',
        bottom:20
    },
    routeCardT: {
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white',
        bottom:20
    },
    routeCardC: {
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'white',
        bottom:20

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
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginTop: 30,
        paddingLeft: 20
    },
    iconImage1: {
        position: "absolute",
        height: 80,
        width: 90,
        resizeMode: "contain",
        right: 5,
        top: 0
    },
    iconImage2: {
        position: "absolute",
        height: 100,
        width: 120,
        resizeMode: "contain",
        right:10,
        top:0
    },
    iconImage3: {
        position: "absolute",
        height: 90,
        width: 150,
        resizeMode: "contain",
        right: -30,
        top: 0
    },
    iconImage4: {
        position: "absolute",
        height: 50,
        width: 80,
        resizeMode: "contain",
        right: 20,
       top: 15
    },
    appIcon: {
        resizeMode: "contain",
        width:110,
        height:110
      }
});