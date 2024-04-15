import React from "react";

export default function BookingTableHeader() {
  return (
    <tr className="text-black text-left">
      <th>Destination From</th>
      <th>Destination To</th>
      <th className="text-center">Journey Date</th>
      <th className="text-center">Guests</th>
      <th className="text-center">Class</th>
      <th className="text-center">Delete</th>
    </tr>
  );
}
