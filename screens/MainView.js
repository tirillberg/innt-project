import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function MainView() {

    /*static navigationOptions= {
        title:'MainView'
    }*/

    /*GoToNewGoalView = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('NewGoalView');
    }*/

    return (
        /*Her har vi et et View med klassenavnet container og der er en enkel render View*/
        <View style={styles.container}>

            <Text style={styles.text}>MainView</Text>

            <Text style={styles.header}>RULE OF 3</Text>

            <Text style={styles.subHeader}>OVERVIEW OF GOALS</Text>

            <TouchableOpacity
                style={styles.orangeButton}
                onPress={() => Alert.alert('Simple Button pressed')}>
                <Text>Add new goal</Text>
            </TouchableOpacity>

            {/*<TouchableOpacity
                style={styles.orangeButton}
                onPress={this.GoToNewGoalView}>
                <Text>Add new goal</Text>
            </TouchableOpacity>*/}

            <Text style={styles.text}>*Insert list here*</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    component:{
        paddingTop:10
    },

    header:{
        color: '#47525E',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30,
    },

    subHeader:{
        color: '#47525E',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 50,
    },

    text:{
        color: '#47525E',
        fontSize: 15,
        marginTop: 40,
    },

    orangeButton:{
        backgroundColor: '#FDDFAC',
        color: '#47525E',
        width: '75%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 10,
        marginBottom: 50,
    },

});

