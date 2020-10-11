import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default function LoginView({navigation}) {


    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <Text style={styles.header}>RULE OF 3</Text>

            <TouchableOpacity
                style={styles.orangeButton}
                //navigerer videre til MainView
                onPress={() => navigation.navigate('/main')}>
                <Text>Connect with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.whiteButton}
                onPress={() => navigation.navigate('/main')}>
                <Text  style={styles.whiteButtonText} >Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.accountButton}
                onPress={() => navigation.navigate('/main')}>
                <Text style={styles.accountText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
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
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 50,
    },

    text:{
        color: '#47525E',
        fontSize: 15,
        marginTop: 30,
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
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },

    whiteButton:{
        backgroundColor: '#FFFFFF',
        width: '75%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 20,
        paddingHorizontal: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    accountButton:{
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
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },

    whiteButtonText:{
        fontWeight:'bold',
        fontSize: 17,
        color: '#47525E',
        justifyContent: 'center',
        alignItems: 'center',
    },

    accountText: {
        fontWeight:'bold',
        color: '#47525E'
    }

});

