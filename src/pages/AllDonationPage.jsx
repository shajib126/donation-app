/* eslint-disable react/prop-types */
import Health from '../assets/images/Health.png'
import Clothing from '../assets/images/Clothing.png'
import Food from '../assets/images/Food.png'
import Education from '../assets/images/Education.png'
import { Link } from 'react-router-dom';

//all domain
const AllDonationPage = ({donation}) => {
  return (
    <div className={donation.textColor == 'health' ? 'bg-health bg-opacity-20 card card-side w-[45%] mt-2' : donation.textColor == 'food' ? 'bg-food bg-opacity-20 card card-side w-[45%] mt-2' : donation.textColor == 'education' ? 'bg-education bg-opacity-20 card card-side w-[45%] mt-2' : 'bg-clothing bg-opacity-20 card card-side w-[45%] mt-2'}>
        
      <figure>
        <img
         src={donation.category == 'Clothing' ? Clothing : donation.category == 'Food' ? Food : donation.category == 'Education' ? Education : Health}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <div className={donation.textColor == 'health' ? 'bg-health bg-opacity-20 w-[100px] text-center rounded-md' : donation.textColor == 'food' ? 'bg-food bg-opacity-20 w-[100px] text-center rounded-md' : donation.textColor == 'education' ? 'bg-education bg-opacity-20 w-[100px] text-center rounded-md' : 'bg-clothing bg-opacity-20 w-[100px] text-center rounded-md'}>
        
            <p className={donation.textColor == 'health' ? 'text-health' : donation.textColor == 'food' ? 'text-food' : donation.textColor == 'education' ? 'text-education' : 'text-clothing'}>{donation.category}</p>
        </div>
        <h2 className="card-title">{donation.title}</h2>
        <p className={donation.textColor == 'health' ? 'text-health' : donation.textColor == 'food' ? 'text-food' : donation.textColor == 'education' ? 'text-education' : 'text-clothing'}>${donation.price}</p>

        <Link to={`/details/${donation.id}`}>
        <button className={donation.textColor == 'health' ? 'bg-health w-[120px] p-1 rounded-md text-neutral-50' : donation.textColor == 'food' ? 'bg-food  w-[120px] p-1 rounded-md text-neutral-50' : donation.textColor == 'education' ? 'bg-education w-[120px] p-1 rounded-md text-neutral-50' : 'bg-clothing w-[120px] p-1 rounded-md text-neutral-50'}>Veiw Details</button>
        </Link>
      </div>
      
    </div>
  );
};

export default AllDonationPage;
