import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import '../player.css'
const PlayerOverview = ({ playerDetailsData }) => {
    const playerDetailsData1 = ['1', '2', '3', '4']
    const [statsIndex, setStatsIndex] = useState(0)
    const activeStats = playerDetailsData?.stats?.[statsIndex]

    const mathesStats = [
        {
            title: "Matches",
            content: activeStats?.batting?.matches,
            color: "white"
        },
        {
            title: "Innings",
            content: activeStats?.batting?.innings,
            color: "white"
        }, {
            title: "Runs",
            content: activeStats?.batting?.runs,
            color: "white"
        },
        {
            title: "HS",
            content: activeStats?.batting?.high_score,
            color: "#F44464"
        },
    ]
    const inningsStats = [
        {
            title: "100s",
            content: activeStats?.batting?.hundreds
        },
        {
            title: "50s",
            content: activeStats?.batting?.fifties
        }, {
            title: "SR",
            content: activeStats?.batting?.strike_rate
        },
        {
            title: "Avg",
            content: activeStats?.batting?.average,

        },
        {
            title: "4s",
            content: activeStats?.batting?.fours,

        },
        {
            title: "6s",
            content: activeStats?.batting?.sixes,

        },
        {
            title: "DUCK",
            content: activeStats?.batting?.ducks,

        },
        {
            title: "NO*",
            content: activeStats?.batting?.not_outs,

        },
    ]
    const bowlingStats = [
        {
            title: "Matches",
            content: activeStats?.bowling?.matches,
            color: "white"
        },
        {
            title: "Innings",
            content: activeStats?.bowling?.innings,
            color: "white"
        }, {
            title: "Wickets",
            content: activeStats?.bowling?.wickets,
            color: "white"
        },
        {
            title: "BBM",
            content: activeStats?.bowling?.best_str,
            color: "#F44464"
        },
    ]
    const bowlingInningStats = [
        {
            title: "Over",
            content: activeStats?.formet === 't20' ? activeStats?.bowling?.overs : activeStats?.bowling?.overs[0]
        },
        {
            title: "Runs",
            content: activeStats?.bowling?.runs
        },

        {
            title: "Economy",
            content: activeStats?.bowling?.economy,

        },
        {
            title: "Avg",
            content: activeStats?.bowling?.average,

        },
        {
            title: "SR",
            content: activeStats?.bowling?.strike_rate

        },
        {
            title: "3W",
            content: activeStats?.bowling?.three_wickets,

        },
        {
            title: "5W",
            content: activeStats?.bowling?.five_wickets,

        },
        {
            title: "10W",
            content: activeStats?.bowling?.ten_wickets,

        },
    ]
    return (
        <div className='scroll-padding'>
            <div className="head-wrapper flex">
                <p>Recent Form</p>
                {/* <Link to="#">View All</Link> */}
            </div>
            <div className="recent-card-container">
                {
                    playerDetailsData1.map((el, i) => (
                        <div className="recent-card-body" key={i}>
                            <p> <span className='score-name'>67</span>(90) | <span>vs WI, T20I, On 3rd July</span> </p>
                        </div>
                    ))
                }
            </div>

            <div className="head-wrapper flex">
                <div className='batting-career-name'> <p>Batting Career</p><div className="fill-player"></div> <span className='batting-style'>Right Handed</span> </div>
                {/* <Link to="#">View All</Link> */}
            </div>
            <div className="new-tab flex-2">
                {
                    playerDetailsData?.stats?.length > 0 ? playerDetailsData?.stats?.map((item, index) => (
                        <div key={index} className={`batting-stats-tab-card ${statsIndex === index ? "active-stats" : ""}`} onClick={() => setStatsIndex(index)}>
                            <p style={{ textTransform: "capitalize" }}>{item.formet}</p>
                        </div>
                    )) : null
                }

            </div>

            <div className="batting-stats-main-card">
                {
                    mathesStats?.map((info, i) => (
                        <div className="batting-stats-body" key={i}>
                            <p style={{ color: info.color }}>{info.content}</p>
                            <span style={{ color: info.color }}>{info.title}</span>
                        </div>
                    ))
                }


            </div>
            <div className="batting-stats-main-card">
                {
                    inningsStats?.map((item, i) => (
                        <div className="batting-stats-body" key={i}>
                            <p>{item.content}</p>
                            <span>{item.title}</span>
                        </div>
                    ))
                }

            </div>

            <div className="head-wrapper flex">
                <div className='batting-career-name'> <p>Bowling Career</p><div className="fill-player"></div> <span className='batting-style'>Right Handed</span> </div>
                {/* <Link to="#">View All</Link> */}
            </div>
            <div className="batting-stats-main-card">
                {
                    bowlingStats?.map((info, i) => (
                        <div className="batting-stats-body" key={i}>
                            <p style={{ color: info.color }}>{info.content}</p>
                            <span style={{ color: info.color }}>{info.title}</span>
                        </div>
                    ))
                }


            </div>
            <div className="batting-stats-main-card">
                {
                    bowlingInningStats?.map((item, i) => (
                        <div className="batting-stats-body" key={i}>
                            <p>{item.content}</p>
                            <span>{item.title}</span>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default PlayerOverview