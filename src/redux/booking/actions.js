import { ADD_BOOKINGS } from "./actionTypes";

export const addBookings = (data) => {
  return {
    type: ADD_BOOKINGS,
    payload: data,
  };
};
