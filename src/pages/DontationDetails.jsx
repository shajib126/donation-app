import Navbar from "./Navbar";
import data from "../data.json";
import Clothing from '../assets/images/Clothing.png'
import Health from '../assets/images/Health.png'
import Education from '../assets/images/Education.png'
import Food from '../assets/images/Food.png'
import { useEffect, useState } from "react";
//donation details
const DontationDetails = () => {
    const [donations,setDonations] = useState([])

  const paramid = window.location.href.split("/");
  const id = paramid[paramid.length - 1];

  const detailsData = data.find((item) => item.id == id);
  
  useEffect(()=>{
    const storedDontaion = JSON.parse(localStorage.getItem('donation'))
    setDonations(storedDontaion)
  },[])

  const handleItemStore = (item)=>{
    
        localStorage.setItem('donation',JSON.stringify(donations == null ? [item] : [...donations,item]))

    
  }
  return (
    <div>
      <Navbar />
      <div className="card w-[50%] mx-auto mt-10">
        <figure>
          <img
            className="w-[90%] h-[450px]"
           src={detailsData.category == 'Clothing' ? Clothing : detailsData.category == 'Food' ? Food : detailsData.category == 'Education' ? Education : Health}
          />
          
        </figure>
        <div className="bg-neutral-900 opacity-80 h-[50px] w-[90%] absolute top-[64%] left-11 ">
        <button onClick={()=>handleItemStore(detailsData)} className={detailsData.textColor == 'health' ? 'bg-health text-neutral-50 p-1 mt-2 ml-1 font-bold rounded-md ' : detailsData.textColor == 'food' ? 'bg-food text-neutral-50 p-1 mt-2 ml-1 font-bold rounded-md' : detailsData.textColor == 'education' ? 'bg-education text-neutral-50 p-1 mt-2 ml-1 font-bold rounded-md' : 'bg-clothing text-neutral-50 p-1 mt-2 ml-1 font-bold rounded-md'}>Donate ${detailsData.price} </button>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {detailsData.title}
            
          </h2>
          <p>{detailsData.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default DontationDetails;
