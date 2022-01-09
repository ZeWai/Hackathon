import Step2 from './Step2'
import styles from './Chart.module.css'
import { Bar } from 'react-chartjs-2'
import 'chartjs-adapter-moment'
import 'moment';
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
const today = new Date();
var date =(today.getMonth() + 1) + "-" + today.getDate();
export const options = {
  indexAxis: "y",
  barPercentage: 0.55,
  categoryPercentage: 0.8,
  borderColor: "rgba(255,255,255,0)",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      stacked: true,
      max: 30,
      title: {
        display: true,
        text: "Date",
      },
      labels: {},
      ticks: {
        min: 0,
        stepSize: 1,
        suggestedMin: date,
        callback: function (label, index, labels) {
          switch (label) {
            case 0:
              return date;
            case label:
              date = today.getMonth() + 1 + "-" + (today.getDate() + label);
              return date;
          }
        },
      },
    },
    y: {
      angleLines: { display: false },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const data = {
  labels: ['Zone A', 'Zone B', 'Zone C', 'Zone D'],
  datasets: [{
            label: 'Herbs',
            data: [1,6,5,4],
            backgroundColor: 'rgb(255,0,0)',
    stack: 'Stack 0',
            
        },{
            data: [0,6,9,0],
            backgroundColor: 'rgba(255, 255, 255,0)',
            stack: 'Stack 0',
        },{
            label: 'Roots',
            data: [13, 2, 3, 11],
            backgroundColor: 'rgb(255, 255, 0)',
            stack: 'Stack 0',
        },{
            label: 'Leavy Green',
            data: [8, 15, 9, 6],
            backgroundColor: 'rgb(0, 255, 0)',
            stack: 'Stack 1',
        },{
            label: 'Edible Flowers',
            data: [15,7,14,9],
            backgroundColor: 'rgb(0, 255, 255)',
            stack: 'Stack 2',
    }],
}

export default function Chart() {
  return (
    <section >
            <div className={styles.chart} >
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
      </section>
    )
}
