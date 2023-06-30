import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  
  export default function Barchart({data}:any) {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Products by category',
          },
        },
      };

      const countProduct = (name:string) => {
        let count:number = 0
        data?.products.map((product:any)=>{
            if (product.category==name){
                count++
            }
        })
        return count;
      }

      const labels = ["smartphones","laptops", "fragrances", "skincare", "groceries", "home-decoration"]

      const chartData = {
        labels: labels,
        datasets: [
          {
            label:'',
            data: labels.map((label) => countProduct(label)),
            backgroundColor: 'rgba(101, 8, 145, 0.5)',
          }
        ],
      };

    return (
    <div className="md:w-2/3 w-full md:h-[65vh] h-[50vh] flex flex-col bg-white p-4 justify-center">
        <Bar options={options} data={chartData} />
      </div>
    )
  }
  