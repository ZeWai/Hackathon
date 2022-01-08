import Step2 from './Step2'
import styles from './Chart.module.css'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: .5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
    barPercentage: 0.2,
        }]
}

export default function Chart() {
    return (
        <div>
            <div className={styles.chart}>
          <div>
            <Bar
              options={options}
              data={data}
            />
                </div>
            </div>
            <div className={styles.step2}><h4>Step 2: Plan your schedule</h4>
            <h5>Chosen by you</h5>
            <Step2/></div>
        </div>
    )
}
