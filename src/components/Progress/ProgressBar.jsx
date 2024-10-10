import React from 'react'
import './progressBar.css'

const ProgressBar = () => {
  return (
    <div className="set-size charts-container">
      <div className="pie-wrapper progress-75 style-2">
        <span className="label">70%</span>

        <div className="pie">
          <div className="left-side half-circle"></div>
          <div className="right-side half-circle"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>

  )
}

export default ProgressBar
