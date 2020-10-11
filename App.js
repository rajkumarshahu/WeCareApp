import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import patientsReducer from './store/reducers/patient';
import Navigator from './navigation/Navigator';

const rootReducer = combineReducers({
  patients: patientsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
