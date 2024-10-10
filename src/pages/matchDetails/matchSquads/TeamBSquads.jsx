import React from 'react'
import img from '../../../assets/playerimg.jpg'
import { Link } from 'react-router-dom'
const TeamBSquads = ({matchSquad,matchInfoData}) => {
  return (
    <div className='formContainer'>
            {
              matchSquad?.team?.b?.player?.length > 0 ? matchSquad?.team?.b?.player?.map((el, i) => (
                <div className='playerElevenSection' key={i}>
                  <div className='elevenSection'>
                    {
                      el.image ? <img src={el.image} alt='' /> : <img src={img} alt='' />
                    }
                  </div>
                  <Link to={`/getMatchList/playerInformation/${matchInfoData?.match_id}`}
                  style={{fontSize:"1rem"}}
                 state={{
                  matchData:matchInfoData,
                  playerKey:el?.player_key
                }} className='elevenPlayerName'>
                    <h5>{el?.player_name}</h5>
                    <h6>Batsman</h6>
                  </Link>
                </div>


              )) : null

            }
          </div>
  )
}

export default TeamBSquads