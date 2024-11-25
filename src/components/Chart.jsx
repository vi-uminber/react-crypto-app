import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

const Chart = ({arr=[],currencySymbol,days}) => {
    console.log("done")
    const Prices=[];
    const date=[];

    for (let i = 0;  i< arr.length; i++) {
        if (days ==="24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
        else
        date.push(new Date(arr[i][0]).toLocaleDateString());
        Prices.push(arr[i][1]);
        
        
    }
   

    const data= {
        
        labels:date,
        datasets:[{
            label:`Prices in ${currencySymbol}`,
            data:Prices,borderColor:"rgb(255,92,132)",
            backgroundColor:"rgba(255,92,132,0.5)"
        },
    ],
       };

        

    

  return (
   <Line options={{
    responsive: true,
   }}
   data={data}
   />
  )
}

export default Chart