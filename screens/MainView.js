import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function MainView({navigation}) {

    //Use state hook for goal list and for adding new goal to list
    const [goalList, addGoalList] = useState([
        {
            id: 1,
            name: 'LIST 1',
            frequency: 'WEEKLY GOAL',
            goal1: '• WAKE UP BEFORE 7',
            goal2: '• GO TO BED BEFORE 10',
            goal3: '• DRINK X LITERS EVERYDAY',
        },

        {
            id: 2,
            name: 'LIST 2',
            frequency: 'DAILY GOAL',
            goal1: '• WORKOUT',
            goal2: '• CALL GRANDMA',
            goal3: '• SMILE',
        },
    ]);

    return (
        /*Her har vi et et View med klassenavnet container og der er en enkel render View*/
        <View style={styles.container}>

            <Text style={styles.header}>RULE OF 3</Text>

            <Text style={styles.subHeader}>OVERVIEW OF GOALS</Text>

            <Text style={styles.text1}>You have {goalList.length} goal(s)</Text>

            <TouchableOpacity
                style={styles.orangeButton}
                //navigate sier jeg ønsker å gå til den skjermen, men hvis man er på den skjermen så trenger man ikke gå til den skjermen
                //push --> legger siden oppå
                //back --> går ned en side igjen
                onPress={() => navigation.push('/newGoal',
                    {
                        goalList: goalList,
                        addNewGoal: addGoalList,
                    })}>
                {/*onPress={() => navigation.push('/newGoal')}> */}
                <Text>Add new goal</Text>
            </TouchableOpacity>

            {/*Check if goal list is empty or not*/}
            {goalList.length > 0 ?
                (
                    <View style={styles.list}>
                        {/*Iterating through goalList, return view for each goal item*/}
                        {goalList.map(goal=>{
                            return (
                                <TouchableOpacity
                                    style={styles.listItem}
                                    key={goal.id}
                                    onPress={()=>navigation.push('/editGoal',
                                    {
                                        // goal: goal, <-- dette betyr det samme som under
                                        id: goal.id,
                                        name: goal.name,
                                        frequency: goal.frequency,
                                        goal1: goal.goal1,
                                        goal2: goal.goal2,
                                        goal3: goal.goal3,

                                        //metodene som er kaldt lenger oppe:
                                        //editGoalList: addGoalList,
                                        //goalList: goalList,

                                    })} >

                                <Text style={styles.text3}>
                                    {goal.name}
                                </Text>

                                <Text style={styles.text2}>
                                    {goal.frequency}
                                </Text>

                                <Text style={styles.text4}>
                                    {goal.goal1}
                                </Text>

                                <Text style={styles.text4}>
                                    {goal.goal2}
                                </Text>

                                <Text style={styles.text4}>
                                    {goal.goal3}
                                </Text>

                            </TouchableOpacity>
                            )
                        })}
                    </View>
                ) :
                (
                    <View>
                        <Text>
                            Tom liste
                        </Text>
                    </View>
                )
            }

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F8F4EC',
        alignItems: 'center',
    },

    component:{
        paddingTop:10
    },

    list:{
        backgroundColor: '#F8F4EC',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8190A5',
    },

    listItem:{
        backgroundColor: '#F8F4EC',
        width: '100%',
        borderWidth: 0,
        marginTop: 10,
        marginBottom: 10,
        //alignItems: 'center',
        justifyContent: 'center',
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

    text1:{
        color: '#47525E',
        fontSize: 15,
        marginBottom: 20,
    },

    text2:{
        color: '#47525E',
        marginBottom: 5,
        marginLeft: 15,
    },

    text3:{
        color: '#47525E',
        fontWeight: 'bold',
        marginLeft: 15,
    },

    text4:{
        color: '#8190A5',
        marginLeft: 15,
    },

    orangeButton:{
        backgroundColor: '#FDDFAC',
        color: '#47525E',
        width: '60%',
        height: '10%',
        elevation: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#47525E',
        paddingVertical: 5,
        paddingHorizontal: 30,
        marginTop: 10,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

