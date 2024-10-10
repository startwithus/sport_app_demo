import React,{useEffect, useState} from 'react';
import Layout from '../../layout/Layout';
import TabsItem from '../../components/tab/TabsItem';
import { useLocation } from 'react-router-dom'
import FixturesDays from './daysfixtures/FixturesDays';
import FixturesSeries from './seriesfixtures/FixturesSeries';
import FixturesMyMatches from './mymatchesfixtures/FixturesMyMatches';
import '../fixtures/fixture.css'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion'

const Fixtures = (props) => {
  const { state } = useLocation()
  const translations = useSelector(selectTranslations)
  const oneFixturesData = state?.FixturesData ?? {}
  const [activeTab, setActiveTab] = useState(0);
  const tabData = [
    { label: `${translations['Days']}`, content: <FixturesDays oneMatchData={oneFixturesData} /> },
    { label: `${translations['Series']}`, content: <FixturesSeries oneMatchData={oneFixturesData} /> },
    { label: `${translations['MyMatches']}`, content: <FixturesMyMatches oneMatchData={oneFixturesData} /> },
  ];
  const routeVariants = {
    initial: {
      x: "100vh",
    },
    final: {
      x: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };
  return (
  
    <Layout>
      <div className="main-wrapper-container">
       <div className="layout-container">
       <div className='fixture-tab-wrapper'>
          <TabsItem tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
       </div>
      </div>
    </Layout>
  
  )
}

export default Fixtures