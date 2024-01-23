import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
//navbar
const Navbar = () => {
  return (
    <div className="navbar  w-[90%] mx-auto">
  <div className="flex-1">
    <img src={Logo} alt="" />
  </div>
  <div className="flex gap-4">
   
      <NavLink style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" :'',
      borderBottom:isActive ? '1px solid red':''
    };
  }} to='/'>Home</NavLink>
      <NavLink style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" :'',
      borderBottom:isActive ? '1px solid red':''
    };
  }} to='/all-donation'>Donation</NavLink>
      <NavLink style={({ isActive}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" :'',
      borderBottom:isActive ? '1px solid red':''
    };
  }} to='/statistic'>Statistic</NavLink>
    
  </div>
</div>
  )
}

export default Navbar