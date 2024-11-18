import React, { useEffect, useState } from 'react'
import ProgressBar from '../../../components/Progress/ProgressBar'
import '../matchLive/matchlive.css'
import { getCaller } from '../../../services/api';

const WinPrediction = ({ matchInfoData }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [winPred, setWinPred] = useState(null)
  const [loading, setLoading] = useState(true) // State for loader

  const getWinPrediction = async () => {
    setLoading(true) // Show loader before fetching data
    const res = await getCaller(`user/v1/get/winPrediction?match_key=${matchInfoData.match_key}`)
    setWinPred(res.data)
    setLoading(false) // Hide loader after data is fetched
  }

  useEffect(() => {
    if (matchInfoData?.match_key) {
      getWinPrediction();
    }
  }, [matchInfoData?.match_key]);

  return (
    <div>
      <div className="head-wrapper flex">
        <p className='batting-career-name'>Win Prediction</p>
      </div>
      <div className='Prediction-section'>
        <div>
          <div className='Group-series' style={{ whiteSpace: "nowrap", overflowX: "scroll", display: "flex", justifyContent: "center" }}>
            <div className={`group-tab ${activeTab === 0 ? 'active-group-tab' : ""}`} onClick={() => setActiveTab(0)}>
              <p style={{ cursor: 'pointer' }}>{matchInfoData?.team?.a?.code ?? ""}</p>
            </div>
            <div className={`group-tab ${activeTab === 1 ? 'active-group-tab' : ""}`} onClick={() => setActiveTab(1)}>
              <p style={{ cursor: 'pointer' }}>{matchInfoData?.team?.b?.code ?? ""}</p>
            </div>
          </div>

          {/* Display loader while data is being fetched */}
          {loading ? (
            <div className="loader">Loading...</div> // Add your loader here
          ) : (
            <div>
              {/* If Bat First */}
              <div className='Bat-first'>
                <div className="win-predict-content">
                  <p>If Bat First</p>
                  <div className="loose-win-section">
                    <div className="loose-win-flex">
                      <div className="fill" style={{ backgroundColor: "#F44464" }}></div>
                      <p>Loose%</p>
                    </div>
                    <ProgressBar value={winPred?.batFirstLoosePercentage ?? 0} /> {/* Replace with actual data */}
                    <div className="loose-win-flex ">
                      <div className="fill"></div>
                      <p>Win%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* If Bowl First */}
              <div className='Bat-first'>
                <div className="win-predict-content">
                  <p>If Bowl First</p>
                  <div className="loose-win-section">
                    <div className="loose-win-flex">
                      <div className="fill" style={{ backgroundColor: "#F44464" }}></div>
                      <p>Loose%</p>
                    </div>
                    <ProgressBar value={winPred?.bowlFirstLoosePercentage ?? 0} /> {/* Replace with actual data */}
                    <div className="loose-win-flex ">
                      <div className="fill"></div>
                      <p>Win%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WinPrediction
