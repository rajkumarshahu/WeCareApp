import React from 'react';
import { FlatList, View, StyleSheet, Text, Platform, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { IconButton } from 'react-native-paper';

import HeaderButton from '../components/HeaderButton';
import SummaryCard from '../components/SummaryCard';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const DashboardScreen = (props) => {
	const patients = useSelector((state) => state.patients.clients);
	const criticalPatients = useSelector(
		(state) => state.patients.criticalPatients
	);
  const selectItemHandler = (id, title) => {
		props.navigation.navigate('PatientDetail', {
			patientId: id,
			patientTitle: title,
		});
    };
	return (

<View>
<Card>
    <View >
				<Text style={styles.summaryText}>Total Patients: {patients.length}</Text>
			</View>
			<View>
				<Text style={styles.summaryText}>Critical Patients: {criticalPatients.length}</Text>
			</View>
    </Card>

    <FlatList
			data={criticalPatients}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<SummaryCard>

        <View style={styles.actions}>
        <Text style={styles.patientText}>{itemData.item.title}</Text>

        <IconButton
            style={styles.button}
            icon="eye"
            color={Colors.primary}
            size={20}
						onPress={() => {
							selectItemHandler(itemData.item.id, itemData.item.title);
						}}
					/>
        </View>

				</SummaryCard>
			)}
		/>

</View>

	);
};

DashboardScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Dashboard',
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

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ebd4d4',
	},
  summaryText: {
      fontSize:40,
      margin: 10,
      marginTop: 25,
      color: Colors.summary
  },
  patientText: {
    fontSize:20,
    margin: 10,
    marginTop: 25,
    color: Colors.summary
},
button: {
  alignItems: 'center',
},
actions: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '20%',
  paddingHorizontal: 20
}
});


export default DashboardScreen;
