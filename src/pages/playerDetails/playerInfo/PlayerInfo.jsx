import React from 'react'
import './playerInfosection.css'
const PlayerInfo = ({ playerDetailsData }) => {
  const playerInfoDetails = [
    {
      title: "Name",
      content: playerDetailsData?.player?.player_name
    },
    {
      title: "DOB",
      content: playerDetailsData?.player?.player_name
    },
    {
      title: "Birth Location",
      content: playerDetailsData?.player?.player_name
    },
    {
      title: "Height",
      content: playerDetailsData?.player?.player_name
    },
    {
      title: "Nationality",
      content: playerDetailsData?.player?.nationality?.name
    },

  ]
  return (
    <div className='scroll-padding'>
      <div className="head-wrapper flex">
        <p>Details</p>
      </div>
      <div className='PlayerInformationDetails'>{
        playerInfoDetails.map((el, i) => (
          <div className='player-info-section' key={i}>
            <div className='info-section'>
              <div className='Pname'>
                <h3>{el.title}</h3>
              </div>
              <div className='fullName'>
                <p>{el.content}</p>
              </div>
            </div>
          </div>

        ))

      }</div>

      <div className="head-wrapper flex">
        <p>About</p>
      </div>

      <div className='about-info'>
        <p>Lorem ipsum dolor sit amet consectetur. Sed scelerisque ultrices lectus iaculis aliquam scelerisque maecenas ipsum aliquam. Tortor tortor sed id morbi cursus feugiat. Cursus quam semper nibh lectus auctor arcu non diam tortor. Neque vel vulputate at nibh amet sagittis et.Lorem ipsum dolor sit amet consectetur. Sed scelerisque ultrices lectus iaculis aliquam scelerisque maecenas ipsum aliquam. </p>
      </div>
    </div>
  )
}

export default PlayerInfo