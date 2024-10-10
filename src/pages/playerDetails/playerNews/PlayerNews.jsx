import React from 'react'
import './playerNews.css'
import { Link } from 'react-router-dom'
import groundImg from '../../../assets/Frame 2283.png'
import groundImg2 from '../../../assets/Frame 2285.png';
import '../../../layout/home/homeNews/homeNews.css'
import MatchUpdates from '../../matchDetails/matchFantasy/MatchUpdates';
const PlayerNews = () => {
  const newsMatches = [
    {
      img: groundImg,
      heading: "",
    },
    {
      img: groundImg2,
      heading: "",
    },

  ]
  return (
 <div className="scroll-padding">
  <MatchUpdates/>
 </div>

  )
}

export default PlayerNews