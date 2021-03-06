import styles from './GanttChart.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Chart from './Chart/Chart';

export default function GanttChart() {

    return (
        <div className={styles.content} style={{ backgroundColor: "white" }}>
            <div style={{ backgroundColor: "#E5E5E5" }}>
            <Link to='/' className={styles.smalltext}>&lt; Back</Link>
            <h2 className={styles.name}>Sun Hung Kai Properties Rooftop Roadmap</h2>
            <p className={styles.smalltext}>MetroPlaze | 223 Hing Fong Ro, Kwai Chung, Hong Kong</p>
            <h2 className={styles.name} style={{paddingBottom:'15px'}}>Overview</h2>
                </div>
                <Chart />
        </div> 
    )
}




