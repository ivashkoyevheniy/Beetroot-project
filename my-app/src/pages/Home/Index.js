import React from "react";
import { Sidebar } from "../../components";
import { AppHeader } from "../../components";
import './Home.css';

export const Home = () => { 
  return (
    <div className="app-container">
        <Sidebar />
        <div className='app-right-container'>
        <AppHeader />
        <main className='main'>
        </main>
        </div>
        
    </div>
  );
}