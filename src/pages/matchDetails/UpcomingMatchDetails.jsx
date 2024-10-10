import React,{useState,useEffect} from 'react'

const UpcomingMatchDetails = ({matchInfoData}) => {
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
    <div className="match-details-content">
    <div className="upcomig-match-details">
    <div className="match-socrecard">
        <div className='match-score-body'>
            <div className='team-logo' >
                <img src={matchInfoData?.team?.a?.url} alt="" />
            </div>
            <p className='para-name'>{isMobile?matchInfoData?.team?.a?.code ?? "":matchInfoData?.team?.a?.name ?? ""}</p>
        </div>
        <div className="vs-img-container-1">
        </div>
        <div className='match-score-body second-team-flex'>
            <div className='team-logo' >
                <img src={matchInfoData?.team?.b?.url} alt="" />
            </div>
            <p className='para-name'>{isMobile?matchInfoData?.team?.b?.code ?? "":matchInfoData?.team?.b?.name ?? ""}</p>

        </div>
    </div>
    <div className={`timing-match-para`}>
<h2 className='date'>{(new Date(matchInfoData?.start_at * 1000).toLocaleString()).split(",")[0]}</h2>
<p className='time'>{(new Date(matchInfoData?.start_at * 1000).toLocaleString()).split(",")[1]}</p>
</div>
</div>
</div>
   
  )
}

export default UpcomingMatchDetails