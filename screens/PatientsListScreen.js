import React from 'react';
import { FlatList, Platform, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PatientListItem from '../components/PatientListItem';
import Colors from '../constants/Colors';

const PatientsListScreen = (props) => {
	const patients = useSelector((state) => state.patients.clients);

	const selectItemHandler = (id, title) => {
		props.navigation.navigate('PatientDetail', {
			patientId: id,
			patientTitle: title,
		});
	};
	return (
		<FlatList
			data={patients}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<PatientListItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					age={itemData.item.age}
					onSelect={() => {
						selectItemHandler(itemData.item.id, itemData.item.title);
					}}
				>
					<Button
						color={Colors.primary}
						title="View Details"
						onPress={() => {
						selectItemHandler(itemData.item.id, itemData.item.title);
            		}}
          			/>
				</PatientListItem>
			)}
		/>
	);
};

PatientsListScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Patients',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Menu'
					iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
	};
};

export default PatientsListScreen;
