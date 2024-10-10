import React, { useState,useEffect } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import AccordianContent from './AccordianContent';
const AccordianItem = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change 768 to your desired breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="container-hundred-main" >
      <div className='container-hundred' >
       <div className="mobile-match-flex">
       <div className='col-1'>
          <img src={match.imgURl} alt="" />
        </div>
        {
          isMobile? <div className='date-container' id='mobile'>
          <h5 className='p-left'>{match.tou_name}</h5>
          <p className='p-left'>{(new Date(match?.start_date * 1000).toLocaleString('default', {month: 'short',day:"2-digit"}))} - {(new Date(match?.last_scheduled_match_date * 1000).toLocaleString('default', {month: 'short',day:"2-digit"}))} <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
            <circle cx="2" cy="2" r="2" fill="#0080DC" /></svg> Played for {match?.countries}</p>
        </div>:null
         }
       </div>
        <div className='container-hundred2'>
         {
          isMobile?null: <div className='date-container'>
          <h5 >{match.tou_name}</h5>
          <p>{(new Date(match?.start_date * 1000).toLocaleString('default', {month: 'short',day:"2-digit"}))} - {(new Date(match?.last_scheduled_match_date * 1000).toLocaleString('default', {month: 'short',day:"2-digit"}))} <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
            <circle cx="2" cy="2" r="2" fill="#0080DC" /></svg> Played for {match?.countries}</p>
        </div>
         }
          <div className='average-flex'>
            <div className='Average flex'>
              <p>Runs <span>{match.totalRun}</span></p>
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
          {isOpen &&  <div className="">
              <AccordianContent match={match}/>
        
          </div> }
        </div>
    </div>
  )
}

export default AccordianItem