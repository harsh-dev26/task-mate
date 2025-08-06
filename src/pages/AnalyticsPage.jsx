import React from 'react';
import SeriousnessMeter from '../components/SeriousnessMeter';

/**
 * A reusable component for displaying a chart card with a title
 * and a placeholder for the chart visualization.
 */
const ChartCard = ({ title, placeholderText }) => (
  <div className="bg-white p-6 rounded-xl shadow-md h-full">
    <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
    <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">{placeholderText}</p>
    </div>
  </div>
);


const AnalyticsPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Grid container for the analytics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Productivity Over Time Card */}
        <ChartCard 
          title="Productivity Over Time" 
          placeholderText="Line Chart Placeholder" 
        />

        {/* Task Completion Rate Card */}
        <ChartCard 
          title="Task Completion Rate" 
          placeholderText="Bar Chart Placeholder" 
        />

        {/* Seriousness Meter Card (reusing the existing component) */}
        {/* Note: The title is inside the SeriousnessMeter component itself */}
        <div className="md:col-span-1">
           <SeriousnessMeter />
        </div>

        {/* Task Distribution by Category Card */}
        <ChartCard 
          title="Task Distribution by Category" 
          placeholderText="Pie Chart Placeholder" 
        />

      </div>
    </div>
  );
};

export default AnalyticsPage;
