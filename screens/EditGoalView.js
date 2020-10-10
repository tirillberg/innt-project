import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function MainView() {

    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => Alert.alert('Simple Button pressed')}>
                <Text>Back</Text>
            </TouchableOpacity>

            <Text style={styles.text}>EditGoalView</Text>

            <Text style={styles.subHeader}>LIST 1</Text>

            <TextInput
                style={styles.textInput}
                placeholder=" LIST 1"
                onChangeText={(text) => this.setState({text})}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" WEEKLY GOAL"
                onChangeText={(text) => this.setState({text})}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" WAKE UP BEFORE 7"
                onChangeText={(text) => this.setState({text})}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" GO TO BED BEFORE 10"
                onChangeText={(text) => this.setState({text})}
            />

            <TextInput
                style={styles.textInput}
                placeholder=" DRINK X LITERS WATER EVERY DAY"
                onChangeText={(text) => this.setState({text})}
            />

            <TouchableOpacity
                style={styles.orangeButton}
                onPress={() => Alert.alert('Simple Button pressed')}>
                <Text>Save changes</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    component:{
        paddingTop:10
    },

    header:{
        color: '#47525E',
        fontSize: 70,
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 100,
    },

    subHeader:{
        color: '#47525E',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 50,
    },

    text:{
        color: '#47525E',
        fontSize: 15,
    },

    text2:{
        color: '#8190A5',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },

    orangeButton:{
        backgroundColor: '#FDDFAC',
        color: '#47525E',
        width: '75%',
        height: '7.5%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 70,
    },

    whiteButton:{
        backgroundColor: '#FFFFFF',
        color: '#47525E',
        width: '100%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 83,
        marginTop: 20,
    },

    backButton:{
        //backgroundColor: '#FFFFFF',
        color: '#47525E',
        width: '100%',
        height: '10%',
        elevation: 8,
        //borderRadius: 10,
        //borderWidth: 0.5,
        //borderColor: '#47525E',
        //paddingVertical: 20,
        //paddingHorizontal: 83,
        marginTop: 30,
        marginRight: 350,
        marginBottom: -35,
    },


    textInput: {
        height: 40,
        width:300,
        //backgroundColor: 'azure',
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#8190A5',
        marginTop: 10,
        marginBottom: 10,
    },

});

