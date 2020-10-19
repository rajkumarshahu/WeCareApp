import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons'

import PatientsListScreen from '../screens/PatientsListScreen';
import PatientDetailScreen from '../screens/PatientDetailScreen';
import AddPatientScreen from '../screens/AddPatientScreen';
import EditPatientScreen from '../screens/EditPatientScreen';
import Colors from '../constants/Colors';
import CriticalPatientScreen from '../screens/CriticalPatientScreen';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

// Screens mapped to identifiers
const Navigator = createStackNavigator({
    PatientsList : PatientsListScreen,
    PatientDetail : PatientDetailScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const AddPatientNavigator = createStackNavigator({
    AddPatient: AddPatientScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
        <Ionicons
            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            size={23}
            color={drawerConfig.tintColor}
            />
        )
    }
},

{
    defaultNavigationOptions: defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    CriticalPatients: CriticalPatientScreen,
    EditPatient: EditPatientScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
        <Ionicons
            name={Platform.OS === 'android' ? 'md-alert-triangle' : 'ios-alert'}
            size={23}
            color={drawerConfig.tintColor}
            />
        )
    }
},

{
    defaultNavigationOptions: defaultNavOptions
});

const AddEditNavigator = createDrawerNavigator({
    Home : Navigator,
    AddPatient: AddPatientNavigator,
    CriticalPatient: AdminNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})

export default createAppContainer(AddEditNavigator);
