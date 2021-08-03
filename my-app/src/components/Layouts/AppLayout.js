import React from "react";
import { AppHeader, Sidebar } from "..";

export const AppLayout = (props) => { 
  return (
    <div className="app-container">
        <Sidebar />
        <div className='app-right-container'>
        <AppHeader />
        <main className='main-table'>
        {props.children}
        </main>
        </div>
    </div>
  );
}