import Step2 from './Step2'
import styles from './Chart.module.css'
import { Bar } from 'react-chartjs-2'
import 'chartjs-adapter-moment'
import ChartDataLabels from 'chartjs-plugin-datalabels'
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
let month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var date =(month[today.getMonth()]);
export const options = {
  indexAxis: "y",
  barPercentage: 0.8,
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
      max: 18,
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
              if(label>11){
                date = (month[today.getMonth()+parseInt(label-12)]);
              }else{
                date = (month[today.getMonth()+parseInt(label)]);
              }
              return date;
          }
        },
      },
    },
    y: {
       grid:{display:false},
       ticks:{
         color: '#42C1C6',
       }
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
      enabled: true,
    },
  },
};

const roots = 'rgb(242,165,138)'
const herbs = 'rgb(222,164,239)'
const edibleflowers = 'rgb(243,192,66)'
const leavygreen = 'rgb(200,215,132)'
const fruitbearing = 'rgb(56,126,190)'

const data = {
  labels: ['Zone A', 'Zone B', 'Zone C', 'Zone D'],
  datasets: [{
            label: 'Strawberry',
            data: [3,0,0,0],
            backgroundColor: fruitbearing,
    stack: 'Stack 0',
            
        },{
            label: 'Cornflowers',
            data: [0,5,1.5,4],
            backgroundColor: edibleflowers,
    stack: 'Stack 0',
            
        },{
            label: 'Pak Choi',
            data: [0,0,6,0],
            backgroundColor: leavygreen,
    stack: 'Stack 0',
            
        },{
            label: 'Honeysuckle',
            data: [0,0,0,2],
            backgroundColor: edibleflowers,
    stack: 'Stack 0',
            
        },{
            label: 'Thyme',
            data: [1,0,6.5,0],
            backgroundColor: herbs,
    stack: 'Stack 1',
            
        },{
            label: 'Mint Leaves',
            data: [5,0,0,0],
            backgroundColor: herbs,
    stack: 'Stack 1',
            
        },{
            label: 'Cabbage',
            data: [5,0,0,0],
            backgroundColor: leavygreen,
    stack: 'Stack 1',
            
        },{
            label: 'Tomatoes',
            data: [0,2,0,5],
            backgroundColor: fruitbearing,
    stack: 'Stack 1',
            
        },{
            label: 'Tomatoes',
            data: [0,5,0,0],
            backgroundColor: fruitbearing,
    stack: 'Stack 1',
            
        },{
            label: 'Garlic',
            data: [5,3,5.5,0],
            backgroundColor: fruitbearing,
    stack: 'Stack 2',
            
        },{
            label: 'Cabbage',
            data: [0,0,0,2],
            backgroundColor: leavygreen,
    stack: 'Stack 2',
            
        },{
            label: 'Coriander',
            data: [0,0,0,2],
            backgroundColor: edibleflowers,
    stack: 'Stack 2',
            
        },{
            label: 'Onion',
            data: [0,0,0,4],
            backgroundColor: fruitbearing,
    stack: 'Stack 2',
            
        }],
}

export default function Chart() {
  return (
    <section >
            <div className={styles.chart} >
              <div>
        <ul className={styles.label}>
          <li><span className={styles.dot} style={{backgroundColor:'rgb(242,165,138)'}}></span> Roots</li>
          <li><span className={styles.dot} style={{backgroundColor:'rgb(222,164,239)'}}></span> Herbs</li>
          <li><span className={styles.dot} style={{backgroundColor:'rgb(243,192,66)'}}></span> Edible Flowers</li>
          <li><span className={styles.dot} style={{backgroundColor:'rgb(200,215,132)'}}></span> Leavy Green</li>
          <li><span className={styles.dot} style={{backgroundColor:'rgb(56,126,190)'}}></span> Fruit Bearing</li>
        </ul>
      </div>
          <div>
            <Bar
              options={options}
              data={data}
            />
                </div>
            </div>
            <div className={styles.step2}>
              <p className={styles.heading}>Step 2: Plan your schedule</p>
            <p className={styles.des}>Chosen by you</p>
            <Step2/></div>
      </section>
    )
}
