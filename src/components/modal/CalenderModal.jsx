import React, { useState, useEffect } from 'react'
import close from '../../assets/closeicon.png'
import '../modal/modal.css'
import { getCaller } from '../../services/api'
const CalenderModal = ({ setCalenderToggle }) => {
  const [teamActive, setTeamActive] = useState("all")

  //  const tabsData = [
  //   {
  //       id: 1,
  //       title: "all"
  //     },
  //     {
  //       id: 2,
  //       title: "male"
  //     },
  //     {
  //       id: 3,
  //       title: "t20"
  //     },
  //     {
  //       id: 4,
  //       title: "oneday"
  //     }
  //       ]
  const [fixtureSeries, setFixtureSeries] = useState([])
  const [loading, setLoading] = useState(true)

  const getFixtureSeries = async (date, page) => {
    setLoading(true)
    const res = await getCaller(`user/v1/get/tournament/month`)
    setFixtureSeries(res?.data)
    setLoading(false)
  }
  useEffect(() => {
    getFixtureSeries()
  }, [])

  // const filterData = () => {
  //     let newVal;
  //     if (teamActive === 'all') {
  //       return fixtureSeries
  //     }
  //     else if (teamActive === 't20') {
  //       newVal = fixtureSeries?.data?.filter((el) => el.format === teamActive)
  //     }
  //     else if (teamActive === 'oneday') {
  //       newVal = fixtureSeries?.data?.filter((el) => el.format === teamActive)
  //     }
  //     else if (teamActive === 'male') {
  //       newVal = fixtureSeries?.data?.filter((el) => el.gender === teamActive)
  //     }
  //     return newVal
  //   }


  return (
    <div className="modalFixtureContainer">
      <div className="modal-content-1">
        <div className="close-container" >
          <div className="calender-select">
            <p className='filter-name'>Calender</p>
            <select name="" id="">
              <option value="">2023</option>
            </select>
          </div>
          <div className="" onClick={() => setCalenderToggle(false)}>
            <img src={close} alt="" />
          </div>
        </div>

      </div>
    </div>

  )
}

export default CalenderModal