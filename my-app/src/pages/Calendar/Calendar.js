import React from "react";
import { AppHeader, Sidebar } from "../../components";
import CalendarComp from "../../components/CalendarComp/CalendarComp";

export const Calendar = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className='app-right-container'>
        <AppHeader />
        <main className='main-table'>
          <CalendarComp />
        </main>
      </div>

    </div>
  );
}