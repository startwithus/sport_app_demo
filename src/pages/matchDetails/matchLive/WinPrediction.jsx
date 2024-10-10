import React, { useState } from 'react'
import ProgressBar from '../../../components/Progress/ProgressBar'
import '../matchLive/matchlive.css'
const WinPrediction = ({ matchInfoData }) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>Win Prediction</p>
      </div>
      <div className='Prediction-section'>
        <div className="">
          <div className='Group-series' style={{ whiteSpace: "nowrap", overflowX: "scroll", display: "flex", justifyContent: "center" }}>
            <div className={`group-tab ${activeTab === 0 ? 'active-group-tab' : ""}`} onClick={() => setActiveTab(0)}>
              <p style={{ cursor: 'pointer' }}>{matchInfoData?.team?.a?.code ?? ""}</p>
            </div>
            <div className={`group-tab ${activeTab === 1 ? 'active-group-tab' : ""}`} onClick={() => setActiveTab(1)}>
              <p style={{ cursor: 'pointer' }}>{matchInfoData?.team?.b?.code ?? ""}</p>

            </div>

          </div>
          <div className='Bat-first'>
            <div className="win-predict-content">
              <p>If Bat First</p>
            <div className="loose-win-section">
              <div className="loose-win-flex">
                <div className="fill" style={{backgroundColor:"#F44464"}}></div>
                <p>Loose%</p>
              </div>
            <ProgressBar />
       
              <div className="loose-win-flex ">
              <div className="fill" ></div>
                <p>Win%</p>
                
              </div>
            </div>
            </div>
          </div>
          <div className='Bat-first'>
            <div className="win-predict-content">
              <p>If Bowl First</p>
              <div className="loose-win-section">
              <div className="loose-win-flex">
                <div className="fill" style={{backgroundColor:"#F44464"}}></div>
                <p>Loose%</p>
              </div>
            <ProgressBar />
       
              <div className="loose-win-flex ">
              <div className="fill" ></div>
                <p>Win%</p>
                
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WinPrediction