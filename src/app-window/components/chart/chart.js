import classes from "./chart.module.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useMemo, useState } from "react";

ChartJS.register(ArcElement, Tooltip);

export const Chart = ({pfc, gender, kkal}) => {
    //protein fat carbohydrates

    const data = useMemo(() => {
      return {
          labels: ['protein', 'fat', 'carbohydrates'],
          legend: {
              display: false,
              position: "right"
          },
          datasets: [
            {
              data: pfc,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
      }
    }, [pfc]);

    const liIcons = {
      protein: {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      fat: {
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      carbs: {
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
      },
    }


    return (
        <div className={classes.chart}>
            <p className="bold">{kkal} kkal</p>
            {gender !== 'developer' ? (
              <Doughnut data={data}/>
            ): <img src='https://img.devrant.com/devrant/rant/r_1825530_6oF8Q.jpg' style={{width: '382px'}}></img>}
            <ul>
              <li><div style={liIcons.protein}></div> Protein: {pfc[0]} g</li>
              <li><div style={liIcons.fat}></div> Fat: {pfc[1]} g</li>
              <li><div style={liIcons.carbs}></div> Carbohydrates: {pfc[2]} g</li>
            </ul>
        </div>
    )
}

// https://www.npmjs.com/package/react-minimal-pie-chart

// import ApexCharts from 'apexcharts'import { useEffect } from 'react';
