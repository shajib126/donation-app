/* eslint-disable react/prop-types */

import data from '../data.json'
import DonationCard from '../pages/DonationCard';
//donation component 
// eslint-disable-next-line react/prop-types, no-unused-vars
const Donation = ({searchedData}) => {

    
  return (
    <div className='flex flex-wrap gap-5 mx-auto w-[95%]'>
      {searchedData.length > 0 ?searchedData?.map((item,i)=><DonationCard item={item} key={i} />): data.map((item,i)=><DonationCard item={item} key={i} />)}
       
    </div>
  )
}

export default Donation