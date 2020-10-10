import React,{Component} from 'react'
import {Text,View, Button,TextInput, Stylesheet} from 'react-native'
import SubTitleComponent from "./subComponents/SubTitleComponent";

export default class inputComponent extends Component {
    /*Init value*/
    state = {Tirill:''}

    /*Lav reference, så val kan sættes*/
    subtitle = React.createRef();

    /*Hent text input med text prop felt og sæt det i state*/
    handleTextChange = (text) => {
        this.setState({Tirill: text})
    }

    /*Sæt inputVal til vores subTitle reference i BoxComponenten via Set*/
    handleButtonPressing = ()=>{
        /*Se om knappen virker console.log*/
        console.log(this.state.Tirill)
        this.subtitle.current.setTitel(this.state.Tirill)
    }

    render() {
        return(
            <View style={{paddingTop: 25}}>
                <Text>4. references og input value </Text>
                <TextInput
                    placeholder='Sett inn tekst her'
                    onChangeText={this.handleTextChange}
                />

                <Button onPress={this.handleButtonPressing} title='Lag ny tittel'/>

                {/*Referrencen er ligesom vores Title i TitleComponent og passer data videre*/}
                <SubTitleComponent ref={this.subtitle}/>

            </View>

        )
    };
};

