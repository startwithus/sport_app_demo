import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProgressBar from '../../../../components/Progress/ProgressBar';
import { selectTranslations } from '../../../../reduxx/languageSlice';
import LastTenMatches from './LastTenMatches';
import { getCaller } from '../../../../services/api';
import teamImage from '../../../../assets/t.webp';
import '../headtohead/headtohead.css';

const HeadToHead = ({ matchInfoData }) => {
    const translations = useSelector(selectTranslations);
    const [lastHeadMatch, setLastHeadMatch] = useState(null);
    const [isOpenToggle, setIsOpenToggle] = useState(false);

    const getHeadMatches = async () => {
        try {
            const res = await getCaller(`user/v1/get/headtohead?short_name=${matchInfoData.short_name}`);
            setLastHeadMatch(res.data);
        } catch (error) {
            console.error("Error fetching head-to-head matches:", error);
        }
    };

    useEffect(() => {
        if (matchInfoData?.match_key) {
          getHeadMatches(); 
        }
      }, [matchInfoData?.match_key]);

    return (
        <div>
            <div className="Head-section-info">
                <div className="head-wrapper flex">
                    <p className="batting-career-name">{translations['HeadToHead']}</p>
                </div>

                <div className="head-back">
                    <div className="head-team-container">
                        <div className="team-logo">
                            <img
                                src={matchInfoData?.team?.a?.url || teamImage}
                                alt={matchInfoData?.team?.a?.code || "Team A"}
                            />
                            <p style={{ color: "white", marginLeft: "1rem" }}>
                                {matchInfoData?.team?.a?.code || ""}
                            </p>
                        </div>

                        <div className="aus-num">
                            {lastHeadMatch && Object.entries(lastHeadMatch).length ? (
                                <>
                                    <div>{lastHeadMatch[matchInfoData.team.a.code] || 0}</div>
                                    <span style={{ margin: "0 1rem", color: "white" }}>-</span>
                                    <div>{lastHeadMatch[matchInfoData.team.b.code] || 0}</div>
                                </>
                            ) : null}
                        </div>

                        <div className="team-logo">
                            <p style={{ color: "white", marginRight: "1rem" }}>
                                {matchInfoData?.team?.b?.code || ""}
                            </p>
                            <img
                                src={matchInfoData?.team?.b?.url || teamImage}
                                alt={matchInfoData?.team?.b?.code || "Team B"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="lastmatches">
                <p>{translations['ShowLastMatches']}</p>
                <div onClick={() => setIsOpenToggle(!isOpenToggle)} style={{ cursor: "pointer" }}>
                    <p style={{ fontSize: "16px", marginTop: "4px" }}>
                        {isOpenToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </p>
                </div>
            </div>

            {isOpenToggle && <LastTenMatches matchInfoData={matchInfoData} />}
        </div>
    );
};

export default HeadToHead;
