import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../modal/modal.css'

const BattingPlayer = ({ squadsData }) => {
  const navigate = useNavigate()
  return (
    <div className="player-main-squads-container">
      <p className='player-name-s' style={{ fontWeight: "400" }}>Bat({squadsData?.players?.bt?.length})</p>
      <div className="player-squads-container">
        {
          squadsData?.players?.bt?.length > 0 ? squadsData?.players?.bt?.map((item, i) => (
            <div className="player-squads-card" key={i} onClick={() => navigate(`/getMatchList/playerInformation`)}>
              <img src={item?.image} alt="playerimage" />
              <div className="">
                <p className='player-name-s'>{item?.name}</p>
                <p className='player-role'>{item?.role[0]}</p>
              </div>
            </div>
          )) : null
        }
      </div>

    </div>
  )
}

export default BattingPlayer