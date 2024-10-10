import React, { useState } from 'react'
import Layout from '../../../layout/Layout'
import playerImg from '../../../assets/image 50.png'
import './matchtopfantasy.css'
import back from '../../../assets/back-arrow.png'
import AccordianFantasy from './AccordianFantasy'
import { Link } from 'react-router-dom'
import { selectTranslations } from '../../../reduxx/languageSlice';
import { useSelector } from 'react-redux';
const MatchTopFantasy = () => {
    const translations = useSelector(selectTranslations)

    const [toggleOpen, setToggleOpen] = useState(false)

    return (
        <Layout>
            <div className="main-wrapper-container">
                <section>

                    <div className="flex-2">
                        <Link to="/getMatchList">
                            <img src={back} alt="" />
                        </Link>
                        <p className='para-news'>{translations['Top Fantasy Points']}</p>
                    </div>
                    <div className='Group-series'>
                        <div className="group-tab active-group-tab" >
                            <p>{translations['All']}</p>
                        </div>
                        <div className="group-tab active-group-tab" >
                            <p>{translations['LastMatches']}</p>
                        </div>
                        <div className="group-tab active-group-tab" >
                            <p>{translations['At Venue']}</p>
                        </div>
                        <div className="group-tab active-group-tab" >
                            <p>vs</p>
                        </div>

                    </div>

                    <div className='toggleTop'>
                        <p>{translations['Recent Matches']}</p>
                    </div>

                    <div className='sec-fan-1' >
                        <div className='sec-fan-fantasy' onClick={() => setToggleOpen(!toggleOpen)} >
                            <div className='section-fantasy'>
                                <div className='fantasy'>
                                    <h3>01</h3>
                                    <img src={playerImg} alt='' />
                                    <p>Player Name</p>

                                </div>

                                <div className='container-fantasy'>
                                    <p>IND <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                        <circle cx="2" cy="2" r="2" fill="#0080DC" /></svg> Wicket Keeper</p>
                                </div>
                            </div>

                            <div className='fantasy-inn'>
                                <p>344</p>
                                <h3>3 Inn</h3>

                            </div>
                        </div>

                        <div className='sec-fan-fantasy' onClick={() => setToggleOpen(!toggleOpen)} >
                            <div className='section-fantasy'>
                                <div className='fantasy'>
                                    <h3>01</h3>
                                    <img src={playerImg} alt='' />
                                    <p>Player Name</p>

                                </div>

                                <div className='container-fantasy'>
                                    <p>IND <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                        <circle cx="2" cy="2" r="2" fill="#0080DC" /></svg> Wicket Keeper</p>
                                </div>
                            </div>

                            <div className='fantasy-inn'>
                                <p>344</p>
                                <h3>3 Inn</h3>

                            </div>
                        </div>

                    </div>
                    {
                        toggleOpen && (<AccordianFantasy />)
                    }


                </section>
            </div>
        </Layout>
    )
}

export default MatchTopFantasy
