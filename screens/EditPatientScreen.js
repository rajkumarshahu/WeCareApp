import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import * as patientsActions from '../store/actions/patient';

const EditPatientScreen = props => {
  const patId = props.navigation.getParam('patientId');
  const editedPatient = useSelector(state =>
    state.patients.criticalPatients.find(pat => pat.id === patId)
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedPatient ? editedPatient.title : '');
  const [imageUrl, setImageUrl] = useState(
    editedPatient ? editedPatient.imageUrl : ''
  );
  const [age, setAge] = useState(editedPatient ? editedPatient.age : '');
  const [description, setDescription] = useState(
    editedPatient ? editedPatient.description : ''
  );
  const [bodyTemperature, setBodyTemperature] = useState(editedPatient ? editedPatient.bodyTemperature : '');
  const [pulseRate, setPulseRate] = useState(editedPatient ? editedPatient.pulseRate : '');
  const [respirationRate, setRespirationRate] = useState(editedPatient ? editedPatient.respirationRate : '');
  const [systolicBP, setSystolicBP] = useState(editedPatient ? editedPatient.systolicBP : '');
  const [diastolicBP, setDiastolicBP] = useState(editedPatient ? editedPatient.diastolicBP : '');
  const [o2sat, setO2sat] = useState(editedPatient ? editedPatient.o2sat : '');


  const submitHandler = useCallback(() => {
    if (editedPatient) {
      dispatch(
        patientsActions.updatePatient(patId, title, description, imageUrl, description,bodyTemperature, pulseRate, respirationRate, systolicBP, diastolicBP, o2sat)
      );
    } else {
      dispatch(
        patientsActions.createPatient(title, description, imageUrl, age, description,bodyTemperature, pulseRate, respirationRate, systolicBP, diastolicBP, o2sat)
      );
    }
    props.navigation.goBack();
  }, [dispatch, patId, title, description, imageUrl, age, description, bodyTemperature, pulseRate, respirationRate, systolicBP, diastolicBP, o2sat ]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
        </View>
        {editedPatient ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={text => setAge(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Body Temperature</Text>
          <TextInput
            style={styles.input}
            value={bodyTemperature}
            onChangeText={text => setBodyTemperature(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Pulse Rate</Text>
          <TextInput
            style={styles.input}
            value={pulseRate}
            onChangeText={text => setPulseRate(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Respiration Rate</Text>
          <TextInput
            style={styles.input}
            value={respirationRate}
            onChangeText={text => setRespirationRate(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Systolic BP</Text>
          <TextInput
            style={styles.input}
            value={systolicBP}
            onChangeText={text => setSystolicBP(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Diastolic BP</Text>
          <TextInput
            style={styles.input}
            value={diastolicBP}
            onChangeText={text => setDiastolicBP(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Oxygen Saturation</Text>
          <TextInput
            style={styles.input}
            value={o2sat}
            onChangeText={text => setO2sat(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditPatientScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: navData.navigation.getParam('patientId')
      ? 'Edit Patient'
      : 'Add Patient',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default EditPatientScreen;
