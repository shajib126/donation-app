/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Clothing from '../assets/images/Clothing.png'
import Food from '../assets/images/Food.png'
import Education from '../assets/images/Education.png'
import Health from '../assets/images/Health.png'
//donation card
const DonationCard = ({ item }) => {
    
  
  return (
    <Link to={`details/${item.id}`}>
    <div className={'card w-96   shadow-xl cursor-pointer '}>
        <div className={item.textColor == 'health' ? 'bg-health bg-opacity-20' : item.textColor == 'food' ? 'bg-food bg-opacity-20' : item.textColor == 'education' ? 'bg-education bg-opacity-20' : 'bg-clothing bg-opacity-20'}>
      
      <figure>
        <img
        className="mt-2"
          src={item.category == 'Clothing' ? Clothing : item.category == 'Food' ? Food : item.category == 'Education' ? Education : Health}
        />
      </figure>

      <div className="card-body">
        
        <p className={item.textColor == 'health' ? 'text-health bg-health bg-opacity-20 w-[20%] text-center' : item.textColor == 'food' ? 'text-food bg-food bg-opacity-20 w-[20%] text-center' : item.textColor == 'education' ? 'text-education bg-education bg-opacity-20 w-[25%] text-center' : 'text-clothing bg-clothing bg-opacity-20 w-[20%] text-center'}>{item.category}</p>
        <h2 className={item.textColor == 'health' ? 'text-health' : item.textColor == 'food' ? 'text-food' : item.textColor == 'education' ? 'text-education' : 'text-clothing'}>{item.title}</h2>
      </div>
      </div>
    </div>
    </Link>
  );
};

export default DonationCard;
