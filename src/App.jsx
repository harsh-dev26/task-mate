import React, { useState, Fragment } from 'react';

import { TaskContextProvider } from './store/TaskContext';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  const handleNavigate = (page) => {
    setActivePage(page);
  };

  return (
    <TaskContextProvider>
      <Fragment>
        <div className="flex h-screen bg-gray-100 font-sans">
          <SideBar activePage={activePage} onNavigate={handleNavigate} />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {activePage === 'Dashboard' && <Dashboard />}
              {activePage === 'Tasks' && <TasksPage />}
              {activePage==='Analytics' && <AnalyticsPage/>}
              {activePage==='Settings' && <SettingsPage/>}
            </main>
          </div>
        </div>
      </Fragment>
    </TaskContextProvider>
  );
}

export default App;
