import "./Bucket.css"
import React from 'react'
export const Bucket = ({perc, money}) => {
  return (
    <>
      <div className="bucket" style={{"background":`linear-gradient(0deg, red 0 ${perc}%, rgba(255, 255, 255, 0) ${perc}% 100%)`}}>
        <div className="amount">
          <p>$ {money}</p>
        </div>
      </div>
    </>
  )
}
