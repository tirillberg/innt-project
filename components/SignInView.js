import { StatusBar } from 'expo-status-bar';
import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import * as firebase from 'firebase';

export default class SignIn extends Component {

    state = {
        email: '',
        password: '',
        isLoggedIn: false
    };

    loginUser = async () => {
        const { email, password } = this.state;
        console.log('console log error');
        try {
            // Here the data is passed to the service and we wait for the result
            const output =  await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(output);
            this.setState({ isLoggedIn: true });
        } catch (error) {
            console.log(error.message);
            alert('Wrong username or password')
            this.setState({ isLoggedIn: false });
        }
    };
    componentDidMount() {
        this.loginUser
    }


    render(){
        if(this.state.isLoggedIn){
            return(
                <AppBottomNav/>
            )
        }else{

            return (
                <View style={styles.container}>

                    <Text style={styles.subHeader}>SIGN IN</Text>


                    <TextInput
                        value={this.state.email}
                        keyboardType = 'email-address'
                        onChangeText={(email) => this.setState({ email })}
                        placeholder=' email'
                        placeholderTextColor = '#47525E'
                        style={styles.textInput}
                        selectionColor={'#47525E'}
                    />

                    <TextInput
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={' password'}
                        secureTextEntry={true}
                        placeholderTextColor = '#47525E'
                        style={styles.textInput}
                        selectionColor={'#47525E'}
                    />


                    <TouchableOpacity
                        style={[styles.orangeButton,]}
                        onPress={this.loginUser} >
                        <Text style={styles.orangeButtonText}>Sign in</Text>
                    </TouchableOpacity>


                </View>
            );
        }



    };
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F4EC',
        //alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    error: {
        color: 'red',
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
        marginBottom: 50,
        marginLeft: 22,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        color: '#47525E',
        fontSize: 15,
    },

    text2:{
        color: '#47525E',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 40,
    },

    orangeButton:{
        backgroundColor: '#FDDFAC',
        width: '75%',
        height: '7.5%',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 15,
        paddingHorizontal: 65,
        marginTop: 25,
        marginBottom: 300,
    },

    orangeButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 62,
        fontWeight: 'bold',
        color: '#47525E',
        fontSize: 16,
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
        color: '#47525E',
        width: '100%',
        height: '10%',
        elevation: 8,
        marginTop: 20,
        marginRight: 350,
        marginBottom: -35,
    },


    textInput: {
        height: 40,
        width:'70%',
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#47525E',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#47525E',
    },

    image:{
        marginTop: 15,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },



});
