import React, { useState } from 'react'
import SquadsModal from '../../../components/modal/SquadsModal'
import '../series.css'
import { IoIosArrowForward } from "react-icons/io";

export const TeamSquadSeries = ({ matchDataByTou }) => {

  const [activeIndex, setActiveIndex] = useState()
  const [squadsData, setSquadsData] = useState({})
  const handleModal = async (item, index) => {
    setActiveIndex(item.code)
    setSquadsData(item)
  }

  if (!matchDataByTou?.teamsDetails?.teams) {
    return (
      <div></div>
    )
  }


  return (
    <div style={{ height: "auto" }}>
      <div className="head-wrapper flex">
        <p>{matchDataByTou?.tournamentName} Squads</p>
        {/* <Link to="#" >View All</Link> */}
      </div>
      <div className="team-squads-container">
        <div className='Team-squad-section'  >
          {
            matchDataByTou?.teamsDetails?.teams?.length > 0 ? matchDataByTou?.teamsDetails?.teams?.map((el, index) => (
              <div className={`section-squad-team ${activeIndex === el?.code ? "active-team" : ""}`} key={index} onClick={() => handleModal(el, index)}>
                <div className='squads-flag' >
                  <div className='arrow-icon'>
                    <div className='team-logo-squads' style={{ gap: "15px" }}>
                      <img src={el?.url} alt='' />
                      <p>{el?.name}</p>
                    </div>
                    <div className=''>
                      <p style={{ color: "white" }}><IoIosArrowForward /></p>
                    </div>
                  </div>
                </div>
              </div>
            )) : null

          }
        </div>
        {
          activeIndex && (<SquadsModal squadsData={squadsData} />)
        }
      </div>
    </div>
  )
}
