import styles from './GanttChart.module.css'
import React from 'react'
/* import Chart from './Chart/Chart' */
import { Link } from 'react-router-dom';
import Chart from './Chart/Chart';

export default function GanttChart() {

    return (
        <div className={styles.content}>
            <Link to='/' className={styles.smalltext}>&lt; Back</Link>
            <h2 className={styles.name}>Sun Hung Kai Properties Rooftop Roadmap</h2>
            <p className={styles.smalltext}>MetroPlaze | 223 Hing Fong Ro, Kwai Chung, Hong Kong</p>
            <h2 className={styles.name}>Overview</h2>
            <Chart/>
        </div> 
    )
}




