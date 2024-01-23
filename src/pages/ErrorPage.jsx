import React from 'react'
import { Link } from 'react-router-dom'
//error page 
const ErrorPage = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      
      <div className="card-actions">
      <Link to='/'>
        <button className="btn btn-primary">
            
                Go Home
           
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage