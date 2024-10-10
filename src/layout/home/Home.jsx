import React, { useEffect } from 'react'
import Layout from '../Layout'
import Reels from './reels/Reels';
import LiveMatchCard from './livematch/LiveMatchCard';
import HomeNews from './homeNews/HomeNews';
import BottomTab from '../header/BottomTab';
import { motion } from 'framer-motion'

const Home = () => {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.8,
      },
    },
  };
  return (
  
    <Layout>
      <LiveMatchCard />
      <HomeNews />
      <Reels />
    </Layout>
    // </motion.div>
  )
}

export default Home