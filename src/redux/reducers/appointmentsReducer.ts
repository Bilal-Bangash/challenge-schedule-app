import {
  GET_ALL_APPOINTMENTS_REQUEST,
  GET_ALL_APPOINTMENTS_SUCCESS,
  GET_ALL_APPOINTMENTS_FAILURE,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  DELETE_APPOINTMENT_FAILURE,
  CONFIRM_APPOINTMENT_REQUEST,
  CONFIRM_APPOINTMENT_SUCCESS,
  CONFIRM_APPOINTMENT_FAILURE,
} from "../constants";
const INITIAL_STATE = {
  data: { appointments: [], patients: [], doctors: [] },
};

export const appointmentListReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS_REQUEST:
      return {
        loading: true,
        data: {
          appointments: [],
          patients: [],
          doctors: [],
        },
      };
    case GET_ALL_APPOINTMENTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ALL_APPOINTMENTS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteAppointmentReducer = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case DELETE_APPOINTMENT_REQUEST:
      return {
        loading: true,
      };
    case DELETE_APPOINTMENT_SUCCESS:
      return {
        loading: false,
      };
    case DELETE_APPOINTMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const confirmAppointmentReducer = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case CONFIRM_APPOINTMENT_REQUEST:
      return {
        loading: true,
      };
    case CONFIRM_APPOINTMENT_SUCCESS:
      return {
        loading: false,
      };
    case CONFIRM_APPOINTMENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
