import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class StateButton extends Component {
    state = {
        boxTitle: 'Tom boks',
        clicked:false
    }
    onPress = () => {

        if(!this.state.clicked){
            this.setState({
                boxTitle: 'Fyldt boks',
                clicked: true
            })
        }else {
            this.setState({
                boxTitle: 'Tom boks',
                clicked: false
            })
        }
    };

    render() {
        return (
            <View style={{paddingTop: 25}}>
                <Text>3.StateRenderfunktion</Text>
                <Button title={this.state.boxTitle} onPress={this.onPress} />
            </View>
        )
    }
}
