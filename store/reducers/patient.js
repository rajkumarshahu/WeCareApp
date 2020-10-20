import PATIENTS from '../../data/dummy-patients';
import Patient from '../../models/patient';
import {
    DELETE_PATIENT,
    CREATE_PATIENT,
    UPDATE_PATIENT
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
        case CREATE_PATIENT:
          const newPatient = new Patient(
              new Date().toString(),
              'u1',
              action.patientData.title,
              action.patientData.imageUrl,
              action.patientData.description,
              action.patientData.age,
              action.patientData.description,
              action.patientData.bodyTemperature,
              action.patientData.pulseRate,
              action.patientData.respirationRate,
              action.patientData.systolicBP,
              action.patientData.diastolicBP,
              action.patientData.o2sat
          );
          return {
              ...state,
              clients: state.clients.concat(newPatient),
              criticalPatients: state.criticalPatients.concat(newPatient)
          }

          case UPDATE_PATIENT:
      const patientIndex = state.criticalPatients.findIndex(
        pat => pat.id === action.pid
      );
      const updatedPatient = new Patient(
        action.pid,
        state.criticalPatients[patientIndex].careProviderId,
        action.patientData.title,
        action.patientData.imageUrl,
        action.patientData.description,
        state.criticalPatients[patientIndex].age,
        action.patientData.description,
        action.patientData.bodyTemperature,
        action.patientData.pulseRate,
        action.patientData.respirationRate,
        action.patientData.systolicBP,
        action.patientData.diastolicBP,
        action.patientData.o2sat
      );
      const updatedCriticalPatients = [...state.criticalPatients];
      updatedCriticalPatients[patientIndex] = updatedPatient;
      const clientIndex = state.clients.findIndex(
        pat => pat.id === action.pid
      );
      const updatedClients = [...state.clients];
      updatedClients[clientIndex] = updatedPatient;
      return {
        ...state,
        clients: updatedClients,
        criticalPatients: updatedCriticalPatients
      };
    }
    return state;
}