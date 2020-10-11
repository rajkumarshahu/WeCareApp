import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const PatientsListScreen = props => {
    const patients = useSelector(state => state.patients.clients)
    return <FlatList data={patients} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.title}</Text>} />;
};

export default PatientsListScreen;