import React from 'react'
import '../fixture.css'
import undraw from "../../../assets/undraw_1.svg"

const FixturesMyMatches = () => {
  return (
    <div className='match-live-container'>
      <div>
        <div className="mymatches-container">
          <div className="my-image">
            <img src={undraw} alt="" />
          </div>
          <div className="mymatch-para regular-para">
            <p>Add your favourite teams here to see their matches</p>
          </div>
          <div className="mymatch-button">
            <button>+ Add Teams</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FixturesMyMatches