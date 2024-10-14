import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./reduxx/store";
import { Provider } from 'react-redux'
import Stats from "./pages/statscorner/Stats";

import NewsDescription from "./pages/news/NewsDescription";
import About from "./pages/aboutUs/About";
import MatchDetails from "./pages/matchDetails/MatchDetails";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import ProtectedRoute from "./services/ProtectedRoute";
import PlayerDetails from "./pages/playerDetails/PlayerDetails";
import MatchTopFantasy from "./pages/matchDetails/matchFantasy/MatchTopFantasy";
import AccordianFantasy from "./pages/matchDetails/matchFantasy/AccordianFantasy";
import ReelsDetails from "./layout/home/reels/ReelsDetails";
import AllNews from "./pages/news/AllNews";
import ScrollToTop from "./components/scroll/ScrollToTop";
import EditProfile from "./profile/editprofile/EditProfile";
import ThemeProfile from "./profile/themeprofile/ThemeProfile";
import ProfileMatchSetting from "./profile/profileSetting/ProfileMatchSetting";
import SpeechSetting from "./profile/speechSettings/SpeechSetting";
import Notification from "./profile/Notification/Notification";
import FixturesDays from "./pages/fixtures/daysfixtures/FixturesDays";
import HomeProfile from "./profile/HomeProfile";
import SeriesLeagues from './pages/tournament/SeriesLeagues';
import Home from './layout/home/Home'
import Fixtures from './pages/fixtures/Fixtures'
import Mail from "./profile/mail/Mail";
import StatsWeb from "./pages/statscorner/StatsWeb";
function App() {
  let isAuthenticated = false;
  useEffect(() => {
    localStorage.getItem('token')
  }, [isAuthenticated])
  return (
    // <AnimatePresence>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/series" element={<SeriesLeagues />} />
            <Route exact path="/series/:id" element={
              <SeriesLeagues />
            }
            />
            <Route exact path="/stats" element={<Stats />} />
            <Route exact path="/stats/:id" element={<Stats />} />
            <Route exact path="/fixtures" element={<Fixtures />} />
            <Route exact path="/fixtures/days" element={<FixturesDays />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/getMatchList" element={<MatchDetails />} />
            <Route exact path="/getMatchList/:match_key" element={<MatchDetails />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/forget_password" element={<ForgotPassword />} />
            <Route exact path="/getMatchList/playerInformation" element={<PlayerDetails />} />
            <Route exact path="/getMatchList/playerInformation/:match_id" element={<PlayerDetails />} />
            <Route exact path="/news/description" element={<NewsDescription />} />
            <Route exact path="/news/allNews" element={<AllNews />} />
            <Route path="/matchTopFantasy" element={<MatchTopFantasy />} />
            <Route path="/accordianFantasy" element={<AccordianFantasy />} />
            <Route path="/reelsDetails" element={<ReelsDetails />} />
            <Route exact path='/login' element={isAuthenticated ? <Navigate to='/editProfile' /> : <Login />} />
            <Route path="/profile" element={<ProtectedRoute Children={<HomeProfile />} />} />
            <Route path="/editProfile" element={<ProtectedRoute Children={<EditProfile />} />} />
            <Route path="/themeProfile" element={<ProtectedRoute Children={<ThemeProfile />} />} />
            <Route path="/profileMatchSetting" element={<ProtectedRoute Children={<ProfileMatchSetting />} />} />
            <Route path="/speechSetting" element={<ProtectedRoute Children={<SpeechSetting />} />} />
            <Route path="/mail" element={<ProtectedRoute Children={<Mail />} />} />
            <Route path="/statsweb" element={<ProtectedRoute Children={<StatsWeb />} />} />
            <Route path="/notification" element={<ProtectedRoute Children={<Notification />} />} />




          </Routes>

        </ScrollToTop>
      </BrowserRouter>
    </Provider>
    // </AnimatePresence>
  );
}

export default App;
