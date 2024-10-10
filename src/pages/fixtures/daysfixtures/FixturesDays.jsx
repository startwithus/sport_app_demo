import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../matchDetails/matchLive/matchlive.css';
import { getCaller } from '../../../services/api';
import FilterFixtures from './FilterFixtures';
import '../../tournament/series.css';
import CalenderModal from '../../../components/modal/CalenderModal';
import { SlCalender } from 'react-icons/sl';
import { IoFilter } from 'react-icons/io5';
import { fixtureTab } from './tabData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';
import Calendar from '../../../components/calender/Calender';


const FixturesDays = (props) => {
  const [tabActive, setTabActive] = useState('all');
  const [toggleOpen, setToggleOpen] = useState(false);
  const [fixturesMatches, setFixturesMatches] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [calenderToggle, setCalenderToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let [offset, setOffset] = useState(0);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [calendarOpen, setCalendarOpen] = useState(false);

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

  useEffect(() => {
    getMatchFromSeries(currentDate, tabActive);
    setLoader(false);
  }, [offset, tabActive]);

  const getMatchFromSeries = async (date, filter) => {
    setLoading(true);
    let query = `user/v1/get/match/fixtures?limit=30&offset=${offset}&`;

    if (filter === 't20' || filter === 'oneday' || filter === 'test') {
      query += `format=${filter}`;
    } else if (filter === 'male' || filter === 'female') {
      query += `gender=${filter}`;
    }

    const res = await getCaller(query);
    setFixturesMatches(res?.data);
    setCurrentDate(date);
    setLoading(false);
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const closeModal = () => {
    setCalendarOpen(false);
  };

  const handleMatch = (item) => {
    setTabActive(item.title);
    setOffset(0);
    setPage(1);
  };

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + 30);
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setOffset((prevOffset) => prevOffset - 30);
      setPage((prevPage) => prevPage - 1);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options).replace(',', ' ');
  };

  if (!fixturesMatches) {
    return (
      <div className='not-started-container' style={{ height: '50vh' }}>
        <h1>Data Not Found</h1>
      </div>
    );
  }

  return (
    <div className='FixturesDays-container'>
      <div className='flex' style={{ overflowX: 'auto' }}>
        <div className='Group-series'>
          {fixtureTab.map((item, index) => (
            <div
              key={index}
              className={`group-tab ${tabActive === item.title ? 'active-group-tab' : ''}`}
              onClick={() => handleMatch(item)}
            >
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className='' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', cursor: 'pointer' }}>
          <CiCalendarDate style={{ color: 'white', fontSize: '24px' }} onClick={toggleCalendar} />
          <p style={{ color: 'pink' }}>calendar</p>
        </div>

        <div className='prev-next-btn'>
          <button type='button' onClick={handlePrevious} disabled={page === 1}>
            <FaChevronLeft style={{ color: 'white' }} />
          </button>
          <button type='button' onClick={handleNext}>
            <FaChevronRight style={{ color: 'white' }} />
          </button>
        </div>

        {/* <ReactModal
          isOpen={calendarOpen}
          onRequestClose={closeModal}
          contentLabel='Calendar Modal'
          className='calendar-modal'
          overlayClassName='calendar-modal-overlay'
        >
          <button
            onClick={closeModal}
            style={{ float: 'right', background: 'none', border: 'none', fontSize: '1.5rem' }}
          >
            ×
          </button>
          <Calendar />
        </ReactModal> */}
      </div>

      {calenderToggle && <CalenderModal setCalenderToggle={setCalenderToggle} calenderToggle={calenderToggle} />}
      {toggleOpen && <FilterFixtures setToggleOpen={setToggleOpen} toggleOpen={toggleOpen} />}
      {loading ? (
        <div className='loader-wrapper'>
          <div className='loader'></div>
        </div>
      ) : (
        <div className='max-height'>
          {fixturesMatches
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((el, i) => (
              <div className='allDateColor' key={i}>
                <div className='allDateColor-section'>
                  <p>{formatDate(el.date)}</p>
                </div>
                <div className='flexserise-1'>
                  {el?.matches?.map((match, index) => (
                    <div className='fixture-main-card' key={index}>
                      <Link to={`/getMatchList/${match.match_key}`}>
                        <p className='title'>
                          {match.tou_short_name} {match?.sub_title} {match.format}
                          {match.to}
                        </p>
                        <div className='fetured-main-container' style={{ marginTop: '.5rem' }}>
                          <div className='featured-match-container-2'>
                            <div className='team-logo'>
                              <img src={match?.team?.a?.url} alt='' />
                            </div>
                            <div className=''>
                              <p className='regular-para' style={{ fontWeight: '400' }}>
                                {isMobile ? match?.team?.a?.code : match?.team?.a?.name}
                              </p>
                              {match?.status === 'started' && (
                                <div className='flex-fixture'>
                                  <p className='' style={{ color: 'white', fontSize: '1rem' }}>
                                    {match?.play?.innings?.a_1?.score?.runs ?? ''}/
                                    {match?.play?.innings?.a_1?.wickets ?? ''}
                                  </p>
                                  <p className='over-name'>
                                    ({match?.play?.innings?.a_1?.overs[0] ?? ''}.
                                    {match?.play?.innings?.a_1?.overs[1] ?? ''})
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className='featured-match-container'>
                            {match?.status === 'completed' && (
                              <div className=''>
                                {isMobile ? (
                                  <>
                                    {match?.play?.result?.msg ? (
                                      <>
                                        {match.play?.result?.winner === 'a' ? (
                                          <p className='result-msg'>
                                            {match.team?.a?.code} win_by {match?.play?.result?.win_by}{' '}
                                            {match?.play?.result?.result_type}
                                          </p>
                                        ) : (
                                          <p className='result-msg'>
                                            {match?.team?.b?.code} win_by {match?.play?.result?.win_by}{' '}
                                            {match?.play?.result?.result_type}
                                          </p>
                                        )}
                                      </>
                                    ) : null}
                                  </>
                                ) : (
                                  <p className='result-msg'>{match?.play?.result?.msg} </p>
                                )}
                              </div>
                            )}
                            {match?.status === 'not_started' && (
                              <div>
                                <p className='regular-para'>
                                  {new Date(match.start_at * 1000).toLocaleString().split(',')[0]}
                                </p>
                                <p style={{ textAlign: 'center', color: '#F44464' }}>
                                  {new Date(match?.start_at * 1000).toLocaleString().split(',')[1]}
                                </p>
                              </div>
                            )}
                            {match?.status === 'started' && (
                              <div className=''>
                                <p>Live</p>
                              </div>
                            )}
                          </div>

                          <div className='featured-match-container-1'>
                            <div className=''>
                              <p className='regular-para' style={{ fontWeight: '400' }}>
                                {isMobile ? match?.team?.b?.code : match?.team?.b?.name}
                              </p>
                              {match?.status === 'started' && (
                                <div className='flex-fixture' style={{ marginLeft: 0, marginRight: '.5rem' }}>
                                  <p className='' style={{ color: 'white', fontSize: '1rem' }}>
                                    {match?.play?.innings?.b_1?.score?.runs ?? ''}/
                                    {match?.play?.innings?.b_1?.wickets ?? ''}
                                  </p>
                                  <p className='over-name'>
                                    ({match?.play?.innings?.b_1?.overs[0] ?? '.'}
                                    {match?.play?.innings?.b_1?.overs[1] ?? ''})
                                  </p>
                                </div>
                              )}
                            </div>
                            <div className='team-logo'>
                              <img src={match?.team?.b?.url} alt='' />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FixturesDays;
