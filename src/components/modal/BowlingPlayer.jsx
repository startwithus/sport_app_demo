import React from 'react'
import '../modal/modal.css'
const BowlingPlayer = ({squadsData}) => {
  return (
    <div className="player-main-squads-container">
                <p className='player-name-s' style={{fontWeight:"400"}}>Bowl({squadsData?.players?.bo?.length})</p>
       <div className="player-squads-container">
       {
            squadsData?.players?.bo?.length>0 ? squadsData?.players?.bo?.map((item,i)=>(
                <div className="player-squads-card" key={i}>
                    <img src={item?.image} alt="playerimage" />
                    <div className="">
                    <p className='player-name-s'>{item?.name}</p>
                    <p className='player-role'>{item?.role[0]}</p>
                    </div>
                </div>
            )):null
        }
       </div>
     
    </div>
  )
}

export default BowlingPlayer