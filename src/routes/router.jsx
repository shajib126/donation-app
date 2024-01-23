import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import DontationDetails from '../pages/DontationDetails'
import AllDonation from '../components/AllDonation'
import Statistic from '../pages/Statistic'
import ErrorPage from '../pages/ErrorPage'



const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>
    },
    {
        path:'/details/:id',
        element:<DontationDetails/>
    },
    {
        path:'/all-donation',
        element:<AllDonation/>
    },
    {
        path:'/statistic',
        element:<Statistic/>
    }
    
])

export default router