import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Chart({data}:any) {

    const chartData ={
        labels: data?.products.map((product:any)=>{
            return product.title
        }),
        datasets: [
          {
            label: 'Rating',
            data: data?.products.map((product:any)=>{
                return product.rating
            }),
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
            ],
          },
        ],
    }

    const calAverage = () => {
        let sum:number = 0
        data?.products.map((product:any)=>{
            sum = product.rating + sum
        })
        let av: number = 0
        if(sum>0 && data?.products){
            av = sum/data?.products.length
        }
        return av
    }

    const average = calAverage();

  return (
    <div className="md:w-1/3 w-full md:h-[65vh] h-[50vh] flex flex-col bg-white p-8 justify-center">
        <Doughnut 
        options={{
           plugins:{
           legend:{
            display:false
           }
        }}}
        data={chartData} 
        />
        <p className="text-center pt-4">Average product rating: {average.toFixed(2)}</p>
    
    </div>
  )
}
