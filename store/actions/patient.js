export const DELETE_PATIENT = 'DELETE_PATIENT';
export const CREATE_PATIENT = 'CREATE_PATIENT';
export const UPDATE_PATIENT = 'UPDATE_PATIENT';

export const deletePatient = patientId => {
  return { type: DELETE_PATIENT, pid: patientId };
};

export const createPatient = (title, description, imageUrl, age, bodyTemperature, pulseRate, respirationRate, systolicBP, diastolicBP, o2sat) => {
  return {
    type: CREATE_PATIENT,
    patientData: {
      title,
      description,
      imageUrl,
      age,
      bodyTemperature,
      pulseRate,
      respirationRate,
      systolicBP,
      diastolicBP,
      o2sat
    }
  };
};

export const updatePatient = (id, title, description, imageUrl, bodyTemperature, pulseRate, respirationRate, systolicBP, diastolicBP, o2sat) => {
  return {
    type: UPDATE_PATIENT,
    pid: id,
    patientData: {
      title,
      description,
      imageUrl,
      bodyTemperature,
      pulseRate,
      respirationRate,
      systolicBP,
      diastolicBP,
      o2sat
    }
  };
};