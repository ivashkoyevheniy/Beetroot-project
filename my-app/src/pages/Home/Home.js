import React from "react";
import { AppHeader, HomeTable, Sidebar } from "../../components";
import './Home.css';

export const Home = () => { 
  return (
    <div className="app-container">
        <Sidebar />
        <div className='app-right-container'>
        <AppHeader />
        <main className='main-table'>
          <HomeTable/>
        </main>
        </div>
        
    </div>
  );
}