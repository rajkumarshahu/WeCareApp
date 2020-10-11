import PATIENTS from '../../data/dummy-patients';
const initialState = {
    clients: PATIENTS
}

export default (state = initialState, action) => {
    return state;
}