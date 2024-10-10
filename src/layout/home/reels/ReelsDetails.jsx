import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../reels/reels.css'
import backArrow from '../../../assets/back-arrow.png'
import Layout from '../../Layout'
import { getCaller } from '../../../services/api'
import VideoPlayer from './VideoPlayer'
import Loader from '../../../components/loader/Loader'
const ReelsDetails = () => {

  // const newData = state?.videoData ?? {}
  const [reelsData, setReelsData] = useState([])
  const [page, setPage] = useState(1)
  const [loader, setLoader] = useState(true)
  let [offset, setOffset] = useState(0)

  const getReelsData = async () => {
    const res = await getCaller(`user/v1/auth/reels?limit=5&offset=${offset}`)
    setReelsData((prev) => [...prev, ...res?.data])
  }
  useEffect(() => {
    getReelsData()
    setLoader(false)
  }, [offset]);

  const handleScroll = () => {
    if
      (window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight) {
      setLoader(true)
      setPage((prev) => prev + 1);
      setOffset(offset += 5)
    }
    else {
      return ("No Data Found")
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <Layout>
      <div className="reels-container">
        <div className='layout-container'>
          <div className="flex-2 new">
            <Link to="/">  <img src={backArrow} alt="" /></Link>
            <p className='shorts-para'>Shorts</p>
          </div>
          {/* <div className="main-reel-container">
            {
              reelsData?.length > 0 ? reelsData?.map((el, i) => (
               <VideoPlayer key={i} videoUrl={el} getReelsData={getReelsData}/>
              )) : null
            }
          </div> */}
          <div className="main-reels-container">
            <div className="" style={{ flexDirection: "column", display: "flex", gap: "1rem" }}>

              {
                reelsData?.length > 0 ? reelsData?.map((el, i) => (
                  <VideoPlayer key={i} videoUrl={el} getReelsData={getReelsData} />
                )) : null
              }

            </div>
            {loader && <Loader />}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default ReelsDetails