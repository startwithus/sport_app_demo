export const apiPath = {
    // GET METHOD 
    getMatches:"user/v1/get/all/matches", 
    getMatchInfo:`user/v1/match/key?match_key=a-rz--cricket--oM1743645425182887937`, 
    getCommentary:`user/v1/get/commentory/?match_key=a-rz--cricket--oM1743645425182887937`,
    getScorecard:`user/v1/scorecard/?match_key=a-rz--cricket--oM1743645425182887937`,
    getNews:`user/v1/get/all/news`,
    getReels:"user/v1/auth/reels",
    getComments:"user/v1/get/comment?reel_id=109",
    getFantasyPoints:"user/v1/fantasy/point/?match_key=a-rz--cricket--oM1743645425182887937&offset=0&limit=2",
    getPlayerOverViewStats:"user/v1/player/overview?ass_key=item&player_key=playerId",
    getPlayerStatsByTournaments:"user/v1/player/info?player_key=playerId",
    getTournaments:`user/v1/get/all/tournament`,
    getTournamentDetails:`user/v1/get/tournament/icc_world_cup_2023`,
    getTournamentsStats:"user/v1/tournamentwise/player/stats?tou_key=icc_world_cup_2023",
    getFixturesMatches:"user/v1/get/match/fixtures",
    getFixtureTournamentsByMonth:"user/v1/get/tournament/month",
    getUser:"user/v1/get/user",
    getNotifiedMatchList:"user/v1/notification/list?data=match",

    // POST METHOD 
    postComments:"/user/v1/add/comment?reel_id=109&phone=7007083150&comment=hello",
    PostLogin:"user/v1/login",
    PostRegister:"user/v1/register",
    PostSendOtp:"user/v1/send/otp?phone=7007083150",
    PostVerifyOtp:"user/v1/verify/otp?phone=7007083150",
    postLike:"user/v1/add/like",
    PostSubscribeNotification:"user/v1/subscribe/notification",

    //Update Method 
    updateLike:"/user/v1/update/like?like_id=200",
    updateUserProfileImage:"/user/v1/user/profile/image",
    updateUserProfile:"user/v1/user/profile",
   
  
}