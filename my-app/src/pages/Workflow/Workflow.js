import React from "react";
import { AppHeader, Sidebar, WorkflowTable } from "../../components";

export const Workflow = () => { 
  return (
    <div className="app-container">
        <Sidebar />
        <div className='app-right-container'>
        <AppHeader />
        <main className='main-table'>
          <WorkflowTable/>
        </main>
        </div>
        
    </div>
  );
}