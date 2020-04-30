import * as actionTypes from "../actions/types";

const initialState = {
  loading: false,
  userdata: {},
  flights: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.NOT_LOADING:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SET_USER_DATA:
      console.log("USERDATA", action.payload);
      return {
        ...state,
        userdata: action.payload,
      };
    case actionTypes.SET_FLIGHTS:
      console.log("FLIGHTS", action.payload);
      return {
        ...state,
        flights: action.payload,
      };
    default:
      return state;
  }
}
