import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const MatchSeries = ({ matchDataByTou }) => {
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
    return (
        <div className=''>
            <div className="head-wrapper flex">
                <p>{matchDataByTou?.tournamentName} Matches</p>
            </div>
            <div className='feature-section-match'>
                {
                    matchDataByTou?.teamsDetails?.matches?.length > 0 ? matchDataByTou?.teamsDetails?.matches?.map((el, i) => (
                        <Link to={`/getMatchList/${el.match_key}`}>
                            <div className="fetured-main-container" key={i} >
                                <div className='featured-match-container'>
                                    <div className='team-logo' >
                                        <img src={el?.team?.a?.url} alt='' />
                                    </div>
                                    <p className='regular-para' style={{ fontWeight: "400" }}>{isMobile ? el?.team?.b?.code : el?.team?.b?.name}</p>
                                </div>

                                <div className='featured-match-container'>
                                    {
                                        el.status === 'completed' ?
                                           <div className="">
                                            {
                                                isMobile? <div>
                                                <>{
                                                    el?.play?.result?.msg ? <>
                                                        {
                                                            el.play?.result?.winner === 'a' ?
                                                                <p className='result-msg'>{el.team?.a?.code} win_by {el?.play?.result?.win_by} {el?.play?.result?.result_type} </p> :
                                                                <p className='result-msg'>{el?.team?.b?.code} win_by {el?.play?.result?.win_by} {el?.play?.result?.result_type
                                                                } </p>
                                                        }
                                                    </>: null
                                                }
                                                </>
                                            </div>: <p className='result-msg'>{el?.play?.result?.msg} </p>
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

                                <div className='featured-match-container'>
                                    <div className='team-logo'>
                                        <img src={el?.team?.b?.url} alt='' />
                                    </div>
                                    <p className='regular-para' style={{ fontWeight: "400" }}>{isMobile ? el?.team?.b?.code : el?.team?.b?.name}</p>
                                </div>
                            </div>
                        </Link>
                    )) : null
                }
            </div>

        </div>
    )
}
export default MatchSeries