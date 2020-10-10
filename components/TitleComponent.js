import React,{Component} from 'react'
import {Text,View, StyleSheet,Image} from 'react-native'

export default class CardComponent extends Component {
    render() {
        /*Sæt min title som en props, så den kan bruges */
        const{title}=this.props

        return(
            <View style={{paddingTop: 25}}>
                <Text>2. Dette er min title komponent</Text>
                <Text> Dette er min prop title: '{title}' </Text>
            </View>
        )
    }
}
