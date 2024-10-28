'use client'
import Homepage from '@app/home/Homepage'
import { DropContext } from '@context/DropContext';
import { PickupContext } from '@context/PickupContext'
import React, { useState } from 'react'

const page = () => {
  const [pickup,setPickup] = useState([]);
  const [destination,setDestination] = useState([]);
  return (
    <PickupContext.Provider value={{pickup,setPickup}}>
      <DropContext.Provider value={{destination,setDestination}}>
    <Homepage></Homepage>
    </DropContext.Provider>
    </PickupContext.Provider>
  )
}

export default page