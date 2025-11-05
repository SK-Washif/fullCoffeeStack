import React from 'react'
import { useLoaderData } from 'react-router'

const CoffeeDetails = () => {
  const coffee = useLoaderData()
  console.log(coffee);

  const {name, quantity, supplier, taste, details, photo, price} = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-sm m-64">
      <figure>
        <img
          src={photo}
          alt="Movie" />
      </figure>
      <div className="m-20">
        <h2 className="card-title">{name}</h2>
        
        <div className='gap-20'>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste : {taste}</p>
          <p>Details : {details}</p>
          <p>Price : {price}</p>
        </div>
        
      </div>
    </div>
  )
}

export default CoffeeDetails