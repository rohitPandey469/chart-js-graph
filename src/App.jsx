import React from 'react';
import MyChart from './components/MyChart';
import Above from './components/Above';
import "./App.css"

const App = () => {
  const dummyData = [
    { x: '2023-11-01', y: 2000 },
    { x: '2023-11-02', y: 2200 },
    { x: '2023-11-03', y: 2100 },
    { x: '2023-11-04', y: 2500 },
    { x: '2023-11-05', y: 2900 },
    { x: '2023-11-06', y: 2800 },
    { x: '2023-11-07', y: 2200 },
    { x: '2023-11-08', y: 2100 },
    { x: '2023-11-09', y: 2400 },
    { x: '2023-11-10', y: 2700 },
    { x: '2023-11-11', y: 2900 },
    { x: '2023-11-12', y: 2100 },
    { x: '2023-11-13', y: 2800 },
    { x: '2023-11-14', y: 2100 },
    { x: '2023-11-15', y: 2900 },
    // { x: '2023-11-16', y: 3700 },
    // { x: '2023-11-17', y: 4300 },
    // { x: '2023-11-18', y: 3900 },
    // { x: '2023-11-19', y: 3300 },
    // { x: '2023-11-20', y: 2900 },
    // Add more data points as needed
  ];

  return (
    <div>
      <Above/>
    </div>
  );
};

export default App;
