import React, { useState, useEffect } from 'react';
import tournament from '../../../assets/t.webp';
import { getCaller } from '../../../services/api';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../fixture.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { fixtureSeriesData } from '../daysfixtures/tabData';

const FixturesSeries = () => {
  const [tabActive, setTabActive] = useState('all');
  const [fixtureSeries, setFixtureSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  let [offset, setOffset] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  const getFixtureSeries = async () => {
    setLoading(true);
    let query = `user/v1/get/tournament/month?limit=30&offset=${offset}`;
    if (tabActive !== 'all') {
      query += `&format=${tabActive}`;
    }
    const res = await getCaller(query);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    // Separate current month and back months
    const currentMonthTournaments = [];
    const backMonthsTournaments = [];

    res?.data?.forEach(entry => {
      const entryMonth = new Date(entry.month).getMonth() + 1;
      const entryYear = new Date(entry.month).getFullYear();

      if (entryYear === currentYear && entryMonth === currentMonth) {
        currentMonthTournaments.push(entry);
      } else if (entryYear < currentYear || (entryYear === currentYear && entryMonth < currentMonth)) {
        backMonthsTournaments.push(entry);
      }
    });

    // Combine current month tournaments followed by back months tournaments
    const sortedData = [
      ...currentMonthTournaments,
      ...backMonthsTournaments
    ];

    setFixtureSeries(sortedData);
    setHasMoreData(sortedData?.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    getFixtureSeries();
    setLoader(false);
  }, [offset, tabActive]);

  const handleNext = () => {
    if (hasMoreData) {
      setOffset(prevOffset => prevOffset + 30);
      setPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setOffset(prevOffset => prevOffset - 30);
      setPage(prevPage => prevPage - 1);
    }
  };

  if (!fixtureSeries) {
    return (
      <div className='not-started-container' style={{ height: "50vh" }}>
        <h1>Data Not Found</h1>
      </div>
    );
  }

  return (
    <>
      {
        loading ? <div className="loader-wrapper">
          <div className='loader'></div>
        </div> : <div>
          <div className="next-prev-container">
            <div className="prev-next-btn">
              <button type='button' onClick={handlePrevious} disabled={page === 1}>
                <FaChevronLeft style={{ color: "white" }} />
              </button>
              <button type='button' onClick={handleNext} disabled={!hasMoreData}>
                <FaChevronRight style={{ color: "white" }} />
              </button>
            </div>
          </div>
          <div className='Group-series'>
            {
              fixtureSeriesData.map((item, index) => (
                <div key={index} className={`group-tab ${tabActive === item.title ? "active-group-tab" : ""}`} onClick={() => setTabActive(item.title)}>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          {
            fixtureSeries?.length > 0 ? fixtureSeries.map((el, i) => (
              <div className="" key={i}>
                <div className="head-wrapper flex">
                  <p>{el?.month}</p>
                </div>
                <div className="flexserise-1">
                  {
                    el?.data?.map((item, index) => (
                      <div className="fixtures-width" key={index}>
                        <Link to={`/series/${item.tou_key}`}>
                          <div className='fixtures-flex'>
                            <div className='fixtures-col'>
                              <img src={!item?.imgURl ? tournament : item?.imgURl} alt="" />
                            </div>
                            <div className='fixtures-hundred'>
                              <div className='date-container'>
                                <h5>{item.name}</h5>
                                <p>{(new Date(item?.start_date * 1000).toLocaleString()).split(",")[0]} - {(new Date(item?.last_scheduled_match_date * 1000).toLocaleString()).split(",")[0]}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            )) : (
              <div className='not-started-container' style={{ height: "50vh" }}>
                <h1>No tournaments found</h1>
              </div>
            )
          }
          {!hasMoreData && <div className='not-started-container' style={{ height: "50vh" }}>
            <h1>No More Data</h1>
          </div>}
          <div className="page-btn">
            <button type='button' onClick={handlePrevious} disabled={page === 1}> <BsChevronLeft style={{ fontWeight: "700" }} />Previous</button>
            <button type='button' onClick={handleNext} disabled={!hasMoreData}> Next <BsChevronRight style={{ fontWeight: "700" }} /></button>
          </div>
        </div>
      }
    </>
  );
}

export default FixturesSeries;
