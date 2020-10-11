import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import PatientsListScreen from '../screens/PatientsListScreen';
import Colors from '../constants/Colors';

const Navigator = createStackNavigator({
    PatientsList : PatientsListScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(Navigator);
