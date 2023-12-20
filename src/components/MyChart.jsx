import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = ({ data3 =
  [
    { x: '2023-11-01', y: 4.5 },
    { x: '2023-11-02', y: 3.2 },
    { x: '2023-11-03', y: 3.1 },
    { x: '2023-11-04', y: 4.0 },
    { x: '2023-11-05', y: 3.9 },
    { x: '2023-11-06', y: 2.8 },
    { x: '2023-11-07', y: 4 },
    { x: '2023-11-08', y: 5 },
    { x: '2023-11-09', y: 3.4 },
    { x: '2023-11-10', y: 4.8 },
    { x: '2023-11-11', y: 4.2 },
    { x: '2023-11-12', y: 3.1 },
    { x: '2023-11-13', y: 3.8 },
    { x: '2023-11-14', y: 4.0 },
    { x: '2023-11-15', y: 4.9 },
    { x: '2023-11-16', y: 4.9 },
    { x: '2023-11-17', y: 4.9 },
    { x: '2023-11-18', y: 4.9 },
    { x: '2023-11-19', y: 2.9 },
    { x: '2023-11-20', y: 3.9 },
    { x: '2023-11-21', y: 4.9 },
    { x: '2023-11-22', y: 1.9 },
    { x: '2023-11-23', y: 4.9 },
    { x: '2023-11-24', y: 2.9 },
    { x: '2023-11-25', y: 4.9 },
    { x: '2023-11-26', y: 3.9 },
    { x: '2023-11-27', y: 4.9 },
    { x: '2023-11-28', y: 0.9 },
    { x: '2023-11-29', y: 4.9 },
    { x: '2023-11-30', y: 1.9 },
    { x: '2023-11-31', y: 2.9 },
    // { x: '2023-11-16', y: 3700 },
    // { x: '2023-11-17', y: 4300 },
    // { x: '2023-11-18', y: 3900 },
    // { x: '2023-11-19', y: 3300 },
    // { x: '2023-11-20', y: 2900 },
    // Add more data points as needed
  ]
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the existing chart before creating a new one
      chartRef.current.destroy();
    }

    const data_date = [];
    const data_value = [];

    for (let index = 0; index < data3.length; index++) {
      data_date.push(data3[index].x);
      data_value.push(data3[index].y);
    }

    const dates = data_date;
    const demo = getDateArray(dates[0], dates[dates.length - 1]);

    function getDateArray(start, end) {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var arr = [];
      var dt = new Date(start);
      while (dt <= new Date(end)) {
        arr.push(dt.getDate() + " " + monthNames[dt.getMonth()]);
        dt.setDate(dt.getDate() + 1);
      }
      return arr;
    }

    const data = {
      labels: demo,
      datasets: [{
        label: 'none',
        data: data_value,
        backgroundColor: ["#00A19F"],
        borderColor: ["#00A19F"],
        borderWidth: 0.7,
        barPercentage: 1.0
      }]
    };
    const options = {
      scales: {
        x: {
          grid: {
            color: 'transparent', // Set the color of the vertical grid lines to transparent
            borderColor: 'rgba(0, 0, 0, 0.1)', // Set the color of the horizontal grid lines
            borderWidth: 1, // Set the width of the horizontal grid lines
          },
          ticks: {
            color: '#333',
            minTicksLimit: 1,
            maxTicksLimit: 6,
            stepSize: 4,
            maxRotation: 0,
          },
          categoryPercentage: 0.8,
          barPercentage: 0.7,
        },
        y: {
          type: 'linear',
          beginAtZero: false,
          grid: {
            color: '#f0f0f0', // Add a light gray color to the horizontal grid lines
          },
          ticks: {
            callback: function (value, index, values) {
              return '$' + (value) + 'K';
            },
            stepSize: 0,
            maxTicksLimit: 4,
            max: 4,
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: 'rgba(0, 161, 159, 1)',
        borderColor: '#fff',
        borderWidth: 2,
        titleFont: {
          size: 16,
          weight: 'bold',
        },
        bodyFont: {
          size: 14,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    
    const config = {
      type: 'bar',
      data,
      options,
    };

    // Create the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    chartRef.current = new Chart(ctx, config);

    return () => {
      // Cleanup code if needed
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data3]);

  return <div style={{marginLeft:"-0.8rem"}}><canvas id="myChart" width="360" height="200" style={{maxWidth:"600px",minHeight:"170px"}}></canvas></div>
  
};

export default MyChart;
