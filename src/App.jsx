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
  // State to manage the sidebar's visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (page) => {
    setActivePage(page);
    // Close the sidebar when a navigation link is clicked on mobile
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <TaskContextProvider>
      <Fragment>
        <div className="relative flex h-screen bg-gray-100 font-sans">
          {/* Pass state and handlers to SideBar and Header */}
          <SideBar 
            activePage={activePage} 
            onNavigate={handleNavigate} 
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onMenuClick={() => setIsSidebarOpen(true)} />
            
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {activePage === 'Dashboard' && <Dashboard />}
              {activePage === 'Tasks' && <TasksPage />}
              {activePage === 'Analytics' && <AnalyticsPage />}
              {activePage === 'Settings' && <SettingsPage />}
            </main>
          </div>
        </div>
      </Fragment>
    </TaskContextProvider>
  );
}

export default App;
