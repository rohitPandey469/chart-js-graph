import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = ({ data3 }) => {
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
          beginAtZero: true,
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

  return <div style={{width:"100%",padding:"1rem",boxShadow:"1px 1px 1px #000"}}>
    {/* <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}> 
            <p style={{fontWeight:"650",fontSize:"0.95rem"}}>Total sales</p>
            <p style={{color:"#4a4a4a"}}>This month</p>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <p style={{fontWeight:"650",fontSize:"1.8rem"}}>$47,791.64</p>
            <p style={{color:"#4a4a4a"}}>471 orders</p>
        </div>
    </div> */}
    <canvas id="myChart" width="400" height="200" style={{maxWidth:"600px",minHeight:"400px"}}></canvas>
  </div>
};

export default MyChart;
