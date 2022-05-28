import React, {Component} from 'react';
import {Text,View, TouchableOpacity,StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />

          

                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar App</Text>
                </View>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("DailyPic")
                }> 
                <Text style={styles.routeText}>Daily Pics</Text>

                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("SpaceCraft")
                }>
                <Text style={styles.routeText}>Space Crafts</Text>
                   
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("StarMap")
                }>
                <Text style={styles.routeText}>Star Map</Text>
                   
                </TouchableOpacity>

            
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
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
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
});