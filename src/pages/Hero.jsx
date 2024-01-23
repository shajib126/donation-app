import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types, no-unused-vars
const Hero = ({searchData}) => {
  const [searchInput,setSearchInput] = useState('')
  return (
    <div className='md:w-[40%] mx-auto mt-[5rem]  '>
        <h1 className='text-3xl font-bold text-center mb-4'>I Grow By Helping People In Need</h1>
        <input onChange={(e)=>setSearchInput(e.target.value)} type="text" className='border border-2 w-[80%] py-2' />
        <button onClick={()=>searchData(searchInput)} className="btn btn-error text-white w-[20%]">Search</button>
    </div>
  )
}

export default Hero