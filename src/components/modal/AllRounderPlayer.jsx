import React from 'react'
import '../modal/modal.css'
const AllRounderPlayer = ({squadsData}) => {
  return (
    <div className="player-main-squads-container">
                <p className='player-name-s' style={{fontWeight:"400"}}>AR({squadsData?.players?.ar?.length})</p>
       <div className="player-squads-container">
       {
            squadsData?.players?.ar?.length>0 ? squadsData?.players?.ar?.map((item,i)=>(
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

export default AllRounderPlayer