import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const AddPatientScreen = props => {
  const patients = useSelector((state) => state.patients.clients);

  return (
    <FlatList
      data={patients}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
};

AddPatientScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Patients',
    headerLeft: ()=> (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
  };
};

export default AddPatientScreen;