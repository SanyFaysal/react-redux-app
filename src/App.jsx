import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import AddBookingsForm from "./components/AddBookingsForm";
import BookingTable from "./components/BookingTable";
function App() {
  return (
    <>
      <Header />
      <AddBookingsForm />
      <BookingTable />
    </>
  );
}

export default App;
