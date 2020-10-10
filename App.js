import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import LoginView from "./screens/LoginView";
import MainView from "./screens/MainView";
import NewGoalView from "./screens/NewGoalView";
import EditGoalView from "./screens/EditGoalView";

export default function App() {

    return (
        /*Her har vi et et View med klassenavnet container og der er en enkel render View*/
        <View style={styles.container}>

            <MainView/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
        //justifyContent: 'center',
    },

});

/*
// Denne TabNavigator holder styr på det yderste niveau af navigation i appen.
const TabNavigator = createNavigator(
    {
        /!*Tilføj routes*!/
        Home: {
            /!*HVilket view skal loades*!/
            screen: LoginView,
            /!*Instillinger til navigation*!/
            navigationOptions: {
                /!*Navn*!/
                tabBarLabel:"Login",
                /!*Ikon*!/
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="home" size={24} color={tintColor} />
                )
            },
        },
        /!*Navn på Route*!/
        MainView: {
            screen: MainViewStack,
            navigationOptions: {
                tabBarLabel:"MainView",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-mainView" size={24} color={tintColor} />
                )
            },
        },
    },
    /!*Generelle label indstillinger*!/
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            size:40
        }
    }

)


export default createAppContainer(TabNavigator)*/
