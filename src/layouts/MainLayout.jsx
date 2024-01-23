
import Navbar from '../pages/Navbar'
import Hero from '../pages/Hero'
import Donation from '../components/Donation'
import {Outlet} from 'react-router-dom'
import { useState } from 'react'
import data from '../data.json'
//main layout
const MainLayout = () => {
 const [searchedData,setSearchedData] = useState([])
  
  const searchData = (text)=>{
    const filterdData = data.filter((item)=>(item.category).toLowerCase() == text.toLowerCase())
    setSearchedData(filterdData);

  }
  return (
    <div>
        <div className='bg-slate-100 h-[50vh]'>
        <Navbar/>
        <Hero searchData={searchData} />
        </div>
        <Donation searchedData={searchedData} />
        <Outlet/>
    </div>
  )
}

export default MainLayout