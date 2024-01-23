import Navbar from "./Navbar"
import { Chart } from "react-google-charts";
import donatedata from '../data.json'
import { useEffect } from "react";
//statistic page
// const totalDonation = data.length
const donated = JSON.parse(localStorage.getItem('donation'))
const totalPrice = donatedata.reduce((acc,curr)=>{
    return acc + curr.price
},0)
const totalDonated = donated.reduce((acc,curr)=>{
    return acc + curr.price
},0) 
const data = [
    ["Donation", "Donation Stats"],
    ["Total Donation", totalPrice],
    ["Your Donation", totalDonated],
  ];
export const options = {
    title: "Donation",
  };

 
const Statistic = () => {
    
  
  return (
    <div>
        <Navbar/>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default Statistic