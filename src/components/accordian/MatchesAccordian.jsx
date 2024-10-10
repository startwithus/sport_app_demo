import React, { useState } from 'react'

const MatchesAccordian = ({title,content}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <img alt='' src={title}></img>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default  MatchesAccordian