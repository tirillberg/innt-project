import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from "./components/LoginView";
import MainView from "./components/MainView";
import NewGoalView from "./components/NewGoalView";
import EditGoalView from "./components/EditGoalView";


const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="/login">
                <Stack.Screen
                    name="/login"
                    component={LoginView}
                    options={{ title: 'Login' }}
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
    container: {
        flex: 1,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
    },

});