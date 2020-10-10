import React,{Component} from 'react'
import {Text,View, Button,TextInput, Stylesheet} from 'react-native'

export default class SubTitleComponent extends Component {
    state = {title:'TEST'}
    /*kald når nuværende title skal skiftes med ny title*/
    setTitel = (title) => this.setState({ title });

    render() {
        return(
            <View style={{paddingTop: 25}}>
                <Text>{this.state.title}</Text>
            </View>
        )
    };
};

