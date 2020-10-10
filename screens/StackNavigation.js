import {createStackNavigator} from "react-navigation-stack";
import LoginView from "./LoginView";
import MainView from "./MainView";
import NewGoalView from "./NewGoalView";

/*Her har vi stack navigationen*/
const SettingStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Login:{screen: LoginView },
        MainView:{screen: MainView},
        NewGoalView:{screen: NewGoalView}
    },

    {
        /*Hvilket View skal starte*/
        initialRouteName:'LoginView',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default SettingStack
