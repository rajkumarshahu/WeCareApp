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
  const [age, setAge] = useState('');
  const [description, setDescription] = useState(
    editedPatient ? editedPatient.description : ''
  );

  const submitHandler = useCallback(() => {
    if (editedPatient) {
      dispatch(
        patientsActions.updatePatient(patId, title, description, imageUrl)
      );
    } else {
      dispatch(
        patientsActions.createPatient(title, description, imageUrl, age)
      );
    }
    props.navigation.goBack();
  }, [dispatch, patId, title, description, imageUrl, age]);

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
