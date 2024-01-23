import React, { useEffect, useState } from 'react'
import Navbar from '../pages/Navbar'
import AllDonationPage from '../pages/AllDonationPage'

const AllDonation = () => {
    const [donations,setDonations] = useState([])
    const [seeAll,setSeAll] = useState(false)
    useEffect(()=>{
        const allDonation = JSON.parse(localStorage.getItem('donation'))
        setDonations(allDonation)
    },[])
    const data = donations.slice(0,4)
    console.log(data);
  return (
    <div>
        <Navbar/>
        
        <div className='flex flex-wrap justify-between w-[80%] mx-auto mt-8'>
            {
                seeAll ? donations?.map((donation,i)=><AllDonationPage key={i} donation={donation} />):
                data?.map((donation,i)=><AllDonationPage key={i} donation={donation} />)
                
            }
            
        </div>
        <button onClick={()=>setSeAll(!seeAll)} className='btn btn-success flex ml-[50%] mt-[100px] text-neutral-50'>
            {seeAll ? 'See Less' : 'See All'}
        </button>
    </div>
  )
}

export default AllDonation