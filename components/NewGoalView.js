import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function NewGoalView({route, navigation}) {

    const {goalList, addNewGoal} = route.params;

    const [goalName, setGoalName] = useState('');
    const [goalFrequency, setGoalFrequency] = useState('');
    const [goalGoal1, setGoalGoal1] = useState('');
    const [goalGoal2, setGoalGoal2] = useState('');
    const [goalGoal3, setGoalGoal3] = useState('');

    function onSubmit(){

        //etablerer en helt ny liste, inni listen sier jeg at "...goalList" skal starte på den måten
        //legger til et ekstra element etter det

        //bruker hooks (addNewGoal hook) for å legge inn et ny element
        addNewGoal([...goalList,
            {
            id: goalList.length+1,
            name: goalName,
            frequency: goalFrequency,
            goal1: goalGoal1,
            goal2: goalGoal2,
            goal3: goalGoal3,
        },

        ])

        navigation.goBack();

        //console.log("submit");
    };

    //console.log(goalName);

    return (
        /*Her har vi et et View med klasse navnet container og der er en enkel render View*/
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>

            <Text style={styles.subHeader}>ADD NEW GOAL</Text>

            <TextInput
                style={styles.textInput}
                placeholder=' NAME OF LIST'
                onChangeText={(text) => setGoalName(text)}
                selectionColor={'#47525E'}
            />

            <TextInput
                style={styles.textInput}
                placeholder=' DAILY, WEEKLY, MONTHLY GOAL?'
                onChangeText={(text) => setGoalFrequency(text)}
            />

            <TextInput
                style={styles.textInput}
                placeholder=' GOAL 1'
                onChangeText={(text) => setGoalGoal1(text)}
                selectionColor={'#47525E'}
            />

            <TextInput
                style={styles.textInput}
                placeholder=' GOAL 2'
                onChangeText={(text) => setGoalGoal2(text)}
                selectionColor={'#47525E'}
            />

            <TextInput
                style={styles.textInput}
                placeholder=' GOAL 3'
                onChangeText={(text) => setGoalGoal3(text)}
                selectionColor={'#47525E'}
            />

            <TouchableOpacity
                style={styles.orangeButton}
                onPress={onSubmit}>
                <Text>Create new sets of goals</Text>
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
        color: '#47525E',
        width: '100%',
        height: '10%',
        elevation: 8,
        marginTop: 30,
        marginRight: 350,
        marginBottom: -35,
    },


    textInput: {
        height: 40,
        width:300,
        fontSize: 18,
        borderRadius: 0,
        borderWidth: 0.5,
        borderColor: '#8190A5',
        marginTop: 10,
        marginBottom: 10,
    },

});

