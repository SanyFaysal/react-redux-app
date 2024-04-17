import { ADD_BOOKINGS } from "./actionTypes";

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKINGS:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};
export default bookingReducer;
