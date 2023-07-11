import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement,Tooltip} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import  {DualAxes}  from '@ant-design/plots';
import { Liquid } from '@ant-design/plots';
import { Column } from '@ant-design/plots';
import { Area } from '@ant-design/plots';
import { RingProgress } from '@ant-design/plots';


ChartJS.register(ArcElement,Tooltip);

// console.log(data);
// export const DemoPie = (props)=> {
//   const data = {
//     datasets: [
//       {
//         data: props.values,
//         backgroundColor: [
//           // 'const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
//           // ',
//           '#00C49F',
//           '#0088FE'
//           // 'rgba(54, 162, 235, 0.2)',
//         ],
//         borderColor: [
//           'rgb(0, 186, 154)',
//           'rgb(0, 132, 236)'
          
//         ],
//         borderWidth: 1,
//         // offset:100,
//         // borderDashOffset: 140,
//         // spacing:2
//         // circular:false
//         // angle:15
//       },
//       {}
//     ],
//   };

//   // data.datasets[0].data = props.values
//   return <Doughnut data={{...data}} />;
// }


export const RingChart = (props) => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: props.value,
    color: ['#5B8FF9', '#5AD8A6'],
  };
  return <RingProgress {...config} />;
};


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const LineChart = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    // geometryOptions: [
    //   {
    //     geometry: 'line',
    //     color: '#5B8FF9',
    //   },
    //   {
    //     geometry: 'line',
    //     color: '#5AD8A6',
    //   },
    // ],
  };
  return <DualAxes {...config} />;
};





export const LiquidChart = () => {
  const config = {
    percent: 0.68,
    outline: {
      border: 6,
      distance: 0,
      style: {
        stroke: '#FFC100',
        strokeOpacity: 0.65,
      },
    },
    wave: {
      length: 120,
    },
    theme: {
      styleSheet: {
        brandColor: '#FAAD14',
      },
    },
  };
  return <Liquid {...config} />;
};







export const BarsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return <Column {...config} />;
};
// export default LineChart




export const AreaChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} />;
};




// export default {DemoPie,Stats}
