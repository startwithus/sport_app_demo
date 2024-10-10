import React, { useState } from 'react'
import '../fixture.css'
import close from '../../../assets/closeicon.png'
const FilterFixtures = ({ setToggleOpen }) => {
  const [teamActive, setTeamActive] = useState(0)
  const teamtab = [
    {
      id: 1,
      name: "Team",
      tabsData: [
        {
          id: 1,
          title: "All",
        },
        {
          id: 2,
          title: "Men",
        },
        {
          id: 3,
          title: "Women",
        },
      ]
    },
    {
      id: 2,
      name: "Format",
      tabsData: [
        {
          id: 1,
          title: "All",
        },
        {
          id: 2,
          title: "T20",
        },
        {
          id: 3,
          title: "ODI",
        },
        {
          id: 3,
          title: "Test",
        },
      ]
    },
    {
      id: 3,
      name: "League Type",
      tabsData: [
        {
          id: 1,
          title: "All",
        },
        {
          id: 2,
          title: "International",
        },
        {
          id: 3,
          title: "Domestic",
        },
      ]
    },


  ]
  return (
    <div className="modalFixtureContainer">
      <div className="modal-content-1">
        <div className="close-container" >
          <div className="">
            <p className='filter-name'>Filter Matches</p>
          </div>
          <div className="" onClick={() => setToggleOpen(false)}>
            <img src={close} alt="" />
          </div>
        </div>
        <div className="">
          {
            teamtab?.map((item, index) => (
              <div className="" key={index}>
                <div className="" style={{ marginTop: "2rem" }}>
                  <p className='filter-name'>{item.name}</p>

                </div>
                <div className='Group-series'>
                  {
                    item?.tabsData?.map((el, i) => (
                      <div key={i} className={`group-tab ${teamActive === index ? "active-group-tab" : ""}`} onClick={() => setTeamActive(index)} >
                        <p>{el.title}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FilterFixtures