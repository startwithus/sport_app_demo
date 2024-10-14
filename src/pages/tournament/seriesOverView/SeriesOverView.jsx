import React, { useState, useEffect } from 'react'
import MatchUpdates from '../../matchDetails/matchFantasy/MatchUpdates'
import { MoreSeasonsSeries } from '../MoreSeasons/MoreSeasonsSeries'
import SeriesInfoSeries from '../seriesinfoseries/SeriesInfoSeries'
import '../sliderseries.css'
import SeriesPointsTable from '../seriesPointsTable/SeriesPointTable'
import { Link } from 'react-router-dom'
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';

const SeriesOverView = ({ matchDataByTou, activeTab, setActiveTab }) => {
  const translations = useSelector(selectTranslations)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const getFeatureMatches = matchDataByTou?.teamsDetails?.matches?.slice(indexOfFirstItem, indexOfLastItem);
  const getSquads = matchDataByTou?.teamsDetails?.teams?.slice(indexOfFirstItem, indexOfLastItem);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change 768 to your desired breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (!matchDataByTou?.teamsDetails?.matches) {
    return (
      <div></div>
    )
  }

  return (
    <div>
      <SeriesInfoSeries matchDataByTou={matchDataByTou} />
      <div className="head-wrapper flex">
        <p>{translations['Featured']}</p>
        <Link to="#" onClick={() => setActiveTab(1)}>{translations['View']}</Link>
      </div>
      <div className='feature-section-match'>

        {
          getFeatureMatches?.length > 0 ? getFeatureMatches?.map((el, i) => (
            <Link to={`/getMatchList/${el.match_key}`} key={i}>
              <div className="fetured-main-container" key={i}>
                <div className='featured-match-container-2'>
                  <div className='team-logo' >
                    <img src={el?.team?.a?.url} alt='' />
                  </div>
                  <p className='regular-para' style={{ fontWeight: "400" }}>{isMobile ? el?.team?.a?.code : el?.team?.a?.name}</p>
                </div>
                <div className='featured-match-container'>
                  {
                    el.status === 'completed' ?
                      <div className="">
                        {
                          isMobile ? <div>
                            <>{
                              el?.play?.result?.msg ? <>
                                {
                                  el.play?.result?.winner === 'a' ?
                                    <p className='result-msg'>{el.team?.a?.code} win_by {el?.play?.result?.win_by} {el?.play?.result?.result_type} </p> :
                                    <p className='result-msg'>{el?.team?.b?.code} win_by {el?.play?.result?.win_by} {el?.play?.result?.result_type
                                    } </p>
                                }
                              </> : null
                            }
                            </>
                          </div> : <p className='result-msg'>{el?.play?.result?.msg} </p>
                        }
                      </div> :
                      <div>
                        <p className='regular-para'>
                          {(new Date(el.start_at * 1000).toLocaleString()).split(",")[0]}
                        </p>
                        <p style={{ textAlign: "center", color: "#F44464" }}>{(new Date(el?.start_at * 1000).toLocaleString()).split(",")[1]}</p>
                      </div>
                  }
                </div>
                <div className='featured-match-container-1'>
                  <div className=''>
                    <p className='regular-para' style={{ fontWeight: "400" }}>{isMobile ? el?.team?.b?.code : el?.team?.b?.name}</p>
                  </div>
                  <div className='team-logo'>
                    <img src={el?.team?.b?.url} alt='' />
                  </div>
                </div>
              </div>
            </Link>
          )) : null
        }
      </div>
      {
        matchDataByTou?.teamsDetails?.tournamentPoints === "" || matchDataByTou?.teamsDetails?.tournamentPoints?.length === 0 ? null : <SeriesPointsTable matchDataByTou={matchDataByTou} />
      }

      <MatchUpdates matchDataByTou={matchDataByTou} />
      <div className="head-wrapper flex">
        <p className='batting-career-name'>{translations['TeamSquads']}</p> <Link to="#" onClick={() => setActiveTab(2)}>{translations['View']}</Link>
      </div>
      <div className="team-squads-container">
        <div className='Team-squad-section'>
          {
            getSquads?.length > 0 ? getSquads?.map((el, index) => (
              <div className="section-squad-team" key={index}>
                <div className='squads-flag' >
                  <div className='team-logo'>
                    <img src={el?.url} alt='' />
                  </div>
                  <p>{el?.name}</p>
                </div>
              </div>

            )) : null
          }
        </div>
      </div>
      <MoreSeasonsSeries matchDataByTou={matchDataByTou} />
    </div>
  )
}

export default SeriesOverView
