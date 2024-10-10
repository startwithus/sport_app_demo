import React, { useState } from 'react'
import '../modal/modal.css'
import BattingPlayer from './BattingPlayer'
import BowlingPlayer from './BowlingPlayer'
import AllRounderPlayer from './AllRounderPlayer'
import WicketKeeper from './Wicketkeeper'
const SquadsModal = ({ squadsData }) => {
  const [tabActive, setTabActive] = useState(0)
  return (

    <div className="modal-content-1">
      <div className="flex">
        <div className="">
          <p className='squad-team-name'>{squadsData?.name}</p>
        </div>

      </div>
      <div className='Group-series' style={{overflowX:"auto",whiteSpace:"nowrap"}}>
        <div className={`group-tab ${tabActive === 0 ? "active-group-tab" : ""}`} onClick={() => setTabActive(0)} >
          <p>All</p>
        </div>
        <div className={`group-tab ${tabActive === 1 ? "active-group-tab" : ""}`} onClick={() => setTabActive(1)} >
          <p>Bat</p>
        </div>
        <div className={`group-tab ${tabActive === 2 ? "active-group-tab" : ""}`} onClick={() => setTabActive(2)} >
          <p>Bowl</p>
        </div>
        <div className={`group-tab ${tabActive === 3 ? "active-group-tab" : ""}`} onClick={() => setTabActive(3)} >
          <p>AR</p>
        </div>
        <div className={`group-tab ${tabActive === 4 ? "active-group-tab" : ""}`} onClick={() => setTabActive(4)} >
          <p>Wk</p>
        </div>
      </div>
      {
        tabActive === 0 && <div className="">
          <BattingPlayer squadsData={squadsData} />
          <WicketKeeper squadsData={squadsData} />
          <AllRounderPlayer squadsData={squadsData} />
          <BowlingPlayer squadsData={squadsData} />
        </div>
      }

      {
        tabActive === 1 && <div className="">
          <BattingPlayer squadsData={squadsData} />
        </div>
      }
      {
        tabActive === 2 && <div className="">
          <BowlingPlayer squadsData={squadsData} />
        </div>
      }
      {
        tabActive === 3 && <div className="">
          <AllRounderPlayer squadsData={squadsData} />
        </div>
      }
      {
        tabActive === 4 && <div className="">
          <WicketKeeper squadsData={squadsData} />
        </div>
      }
    </div>
    //    </div>
  )
}

export default SquadsModal