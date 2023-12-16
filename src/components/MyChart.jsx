import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = ({ data3 =
  [
    { x: '2023-11-01', y: 2000 },
    { x: '2023-11-02', y: 3900 },
    { x: '2023-11-03', y: 4100 },
    { x: '2023-11-04', y: 3500 },
    { x: '2023-11-05', y: 2900 },
    { x: '2023-11-06', y: 4800 },
    { x: '2023-11-07', y: 2200 },
    { x: '2023-11-08', y: 4100 },
    { x: '2023-11-09', y: 3400 },
    { x: '2023-11-10', y: 2700 },
    { x: '2023-11-11', y: 3900 },
    { x: '2023-11-12', y: 3100 },
    { x: '2023-11-13', y: 4800 },
    { x: '2023-11-14', y: 4100 },
    { x: '2023-11-15', y: 2900 },
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
            color: '#f0f0f0'
          },
          ticks: {
            color: '#333',
            minTicksLimit: 1,
            maxTicksLimit: 6
          },
          categoryPercentage: 0.8, // Adjust the spacing between bars
          barPercentage: 0.9 // Adjust the width of the bars
        },
        y: {
          type: 'linear', // Use a linear scale
          beginAtZero: false, // Allow the scale to adjust based on data values
          grid: {
            display: false
          },
          ticks: {
            callback: function (value, index, values) {
              return '$' + (value / 1000) + 'K';
            },
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false, // Allow the chart to adjust its size
      tooltips: {
        backgroundColor: 'rgba(0, 161, 159, 1)',
        borderColor: '#fff',
        borderWidth: 2,
        titleFont: {
          size: 16,
          weight: 'bold'
        },
        bodyFont: {
          size: 14
        }
      },
      plugins: {
        legend: {
          display: false, // Set display to false to hide the legend label
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

  return <div><canvas id="myChart" width="400" height="200" style={{maxWidth:"600px",minHeight:"400px"}}></canvas></div>
  
};

export default MyChart;
