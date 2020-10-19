import PATIENTS from '../../data/dummy-patients';
import {
    DELETE_PATIENT,
  } from '../actions/patient';
const initialState = {
    clients: PATIENTS,
    criticalPatients: PATIENTS.filter(p => p.isCritical === true)
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PATIENT:
        return {
            ...state,
            criticalPatients: state.criticalPatients.filter(
              patient => patient.id !== action.pid
            ),
            clients: state.clients.filter(
                patient => patient.id !== action.pid
            )
          };
    }
    return state;
}