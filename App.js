import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from "./screens/LoginView";
import MainView from "./screens/MainView";
import NewGoalView from "./screens/NewGoalView";
import EditGoalView from "./screens/EditGoalView";


const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="/login">
                <Stack.Screen
                    name="/login"
                    component={LoginView}
                />
                <Stack.Screen
                    name="/main"
                    component={MainView}
                    options={{ title: 'MainView' }}
                />
                <Stack.Screen
                    name="/newGoal"
                    component={NewGoalView}
                    options={{ title: 'NewGoalView' }}
                />
                <Stack.Screen
                    name="/editGoal"
                    component={EditGoalView}
                    options={{ title: 'EditGoalView' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    /*container: {
        flex: 1,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
        //justifyContent: 'center',
    },*/

});