import BookingRow from "./BookingRow";
import BookingTableHeader from "./BookingTableHeader";

export default function BookingTable() {
  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <BookingTableHeader />
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          <BookingRow />
        </tbody>
      </table>
    </div>
  );
}
