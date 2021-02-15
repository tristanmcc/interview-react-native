import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import StartGameScreen from '../Screens/StartGameScreen';
import TimerScreen from '../Screens/TimerScreen';

const AppNavigator = createStackNavigator({
    Square: 
        StartGameScreen,
    Timer: 
        TimerScreen,
});

export default createAppContainer(AppNavigator);