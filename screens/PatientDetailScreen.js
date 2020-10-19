import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux'; // Use this to select single patient

import Colors from '../constants/Colors';

const PatientDetailScreen = props => {
  const patientId = props.navigation.getParam('patientId');
  const selectedPatient = useSelector(state =>
    // Find a single patient
    state.patients.clients.find(patient => patient.id === patientId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPatient.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add Detail" onPress={() => {}} />
      </View>
      <Text style={styles.age}>Age: {selectedPatient.age}</Text>
      <Text style={styles.description}>{selectedPatient.diagnosis}</Text>
      <Text style={styles.description}>{selectedPatient.description}</Text>
    </ScrollView>
  );
};

// Get header title
PatientDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('patientTitle')
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  age: {
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