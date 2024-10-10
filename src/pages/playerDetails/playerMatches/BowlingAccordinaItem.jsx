import React, { useState } from 'react'
import BowlingAccordianContent from './BowlingAccordianContent';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
const BowlingAccordinaItem = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container-hundred-main" >
      <div className='container-hundred' >
        <div className='col-1'>
          <img src={match.imgURl} alt="" />
        </div>
        <div className='container-hundred2'>
          <div className='date-container' id='mobile'>
            <h5>{match.tou_name}</h5>
            <p>{(new Date(match?.start_date * 1000).toLocaleString('default', { month: 'short', day: "2-digit" }))} - {(new Date(match?.last_scheduled_match_date * 1000).toLocaleString('default', { month: 'short', day: "2-digit" }))} <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="#0080DC" /></svg> Played for {match?.countries}</p>
          </div>
          <div className='average-flex'>
            <div className='Average flex'>
              <p>Wickets <span>{match.wickets}</span></p>
              <p>inn <span>{match?.totalMatch}</span></p>
              <p>SR <span>{Math?.round(match?.totalstrike_rate)}</span></p>
              <p>Avg. <span>{Math?.round(match?.totalRunAvg)}</span></p>
            </div>
            <div className={`accordion-match ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
              {
                isOpen ? <BsChevronUp className="acc-icon" /> : <BsChevronDown className="acc-icon" />
              }
            </div>
          </div>
        </div>
      </div>
      <div className='Container-score'>
        {isOpen && <div className="">

          <BowlingAccordianContent match={match} />

        </div>}
      </div>
    </div>
  )
}

export default BowlingAccordinaItem