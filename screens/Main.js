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
        flex: 0.5,
        height: 90,
        width:150,
        marginLeft: 30,
        //marginRight: 50,
        top: 100,
        //bottom:0,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeCardM: {
        flex: 0.5,
        height: 60,
        width:150,
        marginLeft: 200,
        //marginRight: 50,
        //marginTop: 90,
        bottom:105,
        top:-55,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeCardT: {
        flex: 0.5,
        height: 50,
        width:150,
        marginLeft: 30,
        marginRight: 50,
        marginTop: 20,
        //bottom:120,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeCardC: {
        flex: 0.5,
        height: 30,
        width:150,
        marginLeft: 200,
        //marginRight: 50,
        //marginTop: 0,
        bottom:145,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        marginTop:50
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
        top: 50
    },
    iconImage2: {
        position: "absolute",
        height: 100,
        width: 120,
        resizeMode: "contain",
        right:10,
        top: 55
    },
    iconImage3: {
        position: "absolute",
        height: 90,
        width: 150,
        resizeMode: "contain",
        right: 9,
        top: 80
    },
    iconImage4: {
        position: "absolute",
        height: 50,
        width: 80,
        resizeMode: "contain",
        right: 30,
       top: 90
    },
});