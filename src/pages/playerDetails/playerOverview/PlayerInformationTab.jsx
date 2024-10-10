import React, { useState } from 'react';

const PlayerInformationTab = ({ playerDetailsData }) => {
  const [activeFormat, setActiveFormat] = useState(playerDetailsData[0]?.formet);

  const handleTabClick = (format) => {
    setActiveFormat(format);
  };

  const getActiveStats = () => {
    return playerDetailsData?.stats?.find((stat) => stat.formet === activeFormat);
  };

  const renderTabs = () => {
    return playerDetailsData?.stats?.map((stat) => (
        <div className={`batting-stats-tab-card ${activeFormat === stat.formet ? "active-stats" : ""}`}
        onClick={() => handleTabClick(stat.formet)}
        > 
        <p>
        {stat?.formet?.toUpperCase()}
        </p> 
        </div>
    ));
  };

  const renderStats = () => {
    const activeStats = getActiveStats();
   
    const mathesStats = [
        {
            title:"Matches",
            content:activeStats?.batting?.matches
        },
        {
            title:"Innings",
            content:activeStats?.batting?.innings
        },  {
            title:"Runs",
            content:activeStats?.batting?.runs
        },  
        {
            title:"High Score",
            content:activeStats?.batting?.high_score,
            color:"red"
        },
    ]
    const inningsStats = [
        {
            title:"100s",
            content:activeStats?.batting?.matches
        },
        {
            title:"50s",
            content:activeStats?.batting?.innings
        },  {
            title:"SR",
            content:activeStats?.batting?.runs
        },  
        {
            title:"Avg",
            content:activeStats?.batting?.high_score,
          
        },
        {
            title:"4s",
            content:activeStats?.batting?.high_score,
           
        },
        {
            title:"6s",
            content:activeStats?.batting?.high_score,
            
        },
        {
            title:"Duck Out",
            content:activeStats?.batting?.high_score,
            
        },
        {
            title:"ICC Rank",
            content:activeStats?.batting?.high_score,
            
        },
    ]
    if (!activeStats) {
      return <div>No data available for the selected format.</div>;
    }

    return (
     <div className="">
           <div className="batting-stats-card">
        {
            mathesStats?.map((info,i)=>(
                <div className="batting-stats-body" key={i}>
                <p style={{color:info.color}}>{info.content}</p>
                <span style={{color:info.color}}>{info.title}</span>
            </div>
            ))
        }
      
       
    </div>
    <div className="batting-stats-card">
        {
            inningsStats?.map((item,i)=>(
                <div className="batting-stats-body" key={i}>
                <p>{item}</p>
                <span>Matches</span>
            </div>
            ))
        }
      
    </div>
     </div>
    );
  };

  return (
    <div>
      <div className="tabs">{renderTabs()}</div>
      <div className="playerDetailsData">{renderStats()}</div>
    </div>
  );
};

export default PlayerInformationTab;
