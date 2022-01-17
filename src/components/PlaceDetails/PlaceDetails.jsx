import React from 'react'

const PlaceDetails = ({ place }) => {
  const { name } = place
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default PlaceDetails
