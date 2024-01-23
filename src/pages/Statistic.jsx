import Navbar from "./Navbar"
import { Chart } from "react-google-charts";
import donatedata from '../data.json'

//statistic page
// const totalDonation = data.length
const donated = JSON.parse(localStorage.getItem('donation'))
let totalPrice =0
 donatedata.forEach((item)=>{
  totalPrice += item.price
})
let totalDonated = 0 
donated.forEach((item)=>{
  totalDonated += item.price
}) 
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