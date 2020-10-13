import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from "./components/LoginView";
import MainView from "./components/MainView";
import NewGoalView from "./components/NewGoalView";
import EditGoalView from "./components/EditGoalView";
import firebase from "firebase";
import SignInView from "./components/SignInView";


const Stack = createStackNavigator();

//Oprettelse af databasekonfiguration
const firebaseConfig = {
    apiKey: "AIzaSyBDkc4wRVIh2h5jHj7UgMVk1bJQZT5m0qc",
    authDomain: "innt-project.firebaseapp.com",
    databaseURL: "https://innt-project.firebaseio.com",
    projectId: "innt-project",
    storageBucket: "innt-project.appspot.com",
    messagingSenderId: "746647376566",
    appId: "1:746647376566:web:a54f9009ab37bc53984c17"
};

//Vi kontrollerer at det ikke allerede er en initialisert instans av firebase
//Så unngår vi feilen Farebase App named '[DEFAULT]' already exists.
    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged(user =>{
        this.setState({user});
    })


//export default function App() {
export default class App extends React.Component {

    render() {

        //oppretter stack navigator som holder styr på navigasjon. Denne delen er ytterste og første del av stacken
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="/login">
                    <Stack.Screen
                        name="/login"
                        component={LoginView}
                        options={{title: 'Login'}}
                    />
                    <Stack.Screen
                        name="/main"
                        component={MainView}
                        options={{title: 'MainView'}}
                    />
                    <Stack.Screen
                        name="/newGoal"
                        component={NewGoalView}
                        options={{title: 'NewGoalView'}}
                    />
                    <Stack.Screen
                        name="/editGoal"
                        component={EditGoalView}
                        options={{title: 'EditGoalView'}}
                    />

                    <Stack.Screen
                        name="/signIn"
                        component={SignInView}
                        options={{title: 'SignInView'}}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
    },

});
