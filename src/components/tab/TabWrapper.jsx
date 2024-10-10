import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const TabWrapper = ({tabsData1}) => {
    const navigate = useNavigate()
    const location = useLocation();
  return (
    <ul>
        {
            tabsData1.map((el,i)=>(
              <li key={i} className={`tablink-agent-1 ${location.pathname === el.route ? 'active-side-1' : null}`} onClick={() =>navigate(el.route)}>
                {el.title}
              </li>
            ))
          }
        </ul>
  )
}

export default TabWrapper