import React, { useState, useReducer, useCallback, useEffect } from 'react';
import {
	ScrollView,
	View,
	TextInput,
	Text,
	KeyboardAvoidingView,
	StyleSheet,
	Button,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';

import Input from '../components/Input';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import * as logInSignUpAction from '../store/actions/logInSignUp';


const formReducer = (state, action) => {
	if (action.type === 'FORM_INPUT_UPDATE') {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value,
		};
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid,
		};
		let updatedFormIsValid = true;
		for (const key in updatedValidities) {
			updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
		}
		return {
			formIsValid: updatedFormIsValid,
			inputValidities: updatedValidities,
			inputValues: updatedValues,
		};
	}
	return state;
};

const LogInSignUpScreen = (props) => {
  const [ isSignUp, setIsSignUp] = useState(false)

	const dispatch = useDispatch();

	const [formState, dispatchFormState] = useReducer(formReducer, {
		inputValues: {
			email: '',
			password: '',
		},
		inputValidities: {
			email: false,
			password: false,
		},
		formIsValid: false,
	});

	const loginSignupHandler = () => {
    let action;
    if(isSignUp){
      action =
        logInSignUpAction.signup(
          formState.inputValues.email,
          formState.inputValues.password
      );
    } else {
      action =
      logInSignUpAction.login(
        formState.inputValues.email,
        formState.inputValues.password
      )
    }
    dispatch(action)

	};

	const inputChangeHandler = useCallback(
		(inputIdentifier, inputValue, inputValidity) => {
			dispatchFormState({
				type: 'FORM_INPUT_UPDATE',
				value: inputValue,
				isValid: inputValidity,
				input: inputIdentifier,
			});
		},
		[dispatchFormState]
	);

	return (
		<KeyboardAvoidingView
			behavior='padding'
			keyboardVerticalOffset={50}
			style={styles.screen}
		>
			<ScrollView>
      <View tyle={styles.authContainer}>


				<View style={styles.formControl}>
					<Text style={styles.label}>Email</Text>
					<TextInput
						style={styles.input}
						id='email'
						label='E-Mail'
						keyboardType='email-address'
						required
						email
						autoCapitalize='none'
						errorText='Please enter a valid email address.'
						value={formState.inputValues.email}
						onChangeText={inputChangeHandler.bind(this, 'email')}
						autoCorrect
						returnKeyType='next'
						initialValue=''
					/>
					{!formState.inputValidities.title && (
						<Text>Please enter a valid email!</Text>
					)}
				</View>
				<View style={styles.formControl}>
					<Text style={styles.label}>Password</Text>
					<TextInput
						style={{ height: 20, width: 100 }}
						id='password'
						label='Password'
						keyboardType='default'
						secureTextEntry
						required
						minLength={5}
						autoCapitalize='none'
						errorText='Please enter a valid password.'
						onChangeText={inputChangeHandler.bind(this, 'password')}
						initialValue=''
					/>
					{!formState.inputValidities.title && (
						<Text>Please enter a valid password!</Text>
					)}
				</View>
				<View style={styles.buttonContainer}>
					<Button
						title={isSignUp ? 'Sign Up' : 'Login'}
						color={Colors.primary}
						onPress={loginSignupHandler}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						title={isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
						color={Colors.accent}
						onPress={() => {setIsSignUp(prevState => !prevState)}}
					/>
				</View>
        </View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

LogInSignUpScreen.navigationOptions = {
	headerTitle: 'Authenticate',
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	authContainer: {
		width: '80%',
		maxWidth: 400,
		maxHeight: 400,
		padding: 20,
	},
	buttonContainer: {
		marginTop: 10,
	},
	form: {
		margin: 20,
	},
	formControl: {
		width: '100%',
	},
	label: {
		marginVertical: 8,
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 5,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
});

export default LogInSignUpScreen;
