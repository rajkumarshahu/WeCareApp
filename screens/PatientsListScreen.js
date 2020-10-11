import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import PatientListItem from '../components/PatientListItem';

const PatientsListScreen = (props) => {
	const patients = useSelector((state) => state.patients.clients);
	return (
		<FlatList
			data={patients}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<PatientListItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					age={itemData.item.age}
					onViewDetail={() => {
						props.navigation.navigate('PatientDetail',{ patientId: itemData.item.id, patientTitle: itemData.item.title} )
					}}
				/>
			)}
		/>
	);
};

PatientsListScreen.navigationOptions = {
	headerTitle: 'Patients',
};

export default PatientsListScreen;
