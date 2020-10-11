import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';

const PatientDetailScreen = props => {
  const patientId = props.navigation.getParam('patientId');
  const selectedPatient = useSelector(state =>
    state.patients.clients.find(patient => patient.id === patientId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPatient.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add Detail" onPress={() => {}} />
      </View>
      <Text style={styles.price}>Age: {selectedPatient.age}</Text>
      <Text style={styles.description}>{selectedPatient.diagnosis}</Text>
    </ScrollView>
  );
};

PatientDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('patientTitle')
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default PatientDetailScreen;