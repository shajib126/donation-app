import Navbar from "./Navbar"
import { Chart } from "react-google-charts";
import donatedata from '../data.json'

//statistic page
// const totalDonation = data.length

export const options = {
    title: "Donation",
  };

 
const Statistic = () => {
  const donated = JSON.parse(localStorage.getItem('donation'))
  let totalPrice =donatedata?.reduce((acc,curr)=>{
    return acc + curr.price
  },0)
  let totalDonated = donated?.reduce((acc,curr)=>{
    return acc + curr.price
  },0) 
  const data = [
      ["Donation", "Donation Stats"],
      ["Total Donation", totalPrice],
      ["Your Donation", totalDonated],
    ];
  
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