import React from 'react'

const CoffeeCard = ({coffee}) => {

  const {name, price, quantity, photo} = coffee;

  return (
      <div className="card card-side bg-base-100 shadow-sm">
    <figure>
      <img
        src={photo}
        alt="Movie" />
    </figure>
    <div className="flex mt-8 w-full justify-around">

      <div>
        <h2 className="">{name}</h2>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      
      <div className="card-actions justify-end">
        <div className="join join-vertical space-y-2">
        <button className="btn join-item">View</button>
        <button className="btn join-item">Edit</button>
        <button className="btn join-item">X</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CoffeeCard