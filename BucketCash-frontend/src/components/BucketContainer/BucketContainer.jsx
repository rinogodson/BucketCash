import React from 'react'
import "./BucketContainer.css"
import { Bucket } from '../Bucket/Bucket'

function BucketContainer() {
  return (
    <div className="container">
      <Bucket perc={80} money={30}/> 
    </div>
  )
}

export default BucketContainer
