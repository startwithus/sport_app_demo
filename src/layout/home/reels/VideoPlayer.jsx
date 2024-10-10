import React, { useState, useRef } from 'react';
import { getCaller, postCaller } from '../../../services/api';
import comment1 from '../../../assets/Frame 2268.png'
import { FaRegComment, FaHeart, FaShare } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const VideoPlayer = ({ videoUrl, getReelsData }) => {
    const userId = localStorage.getItem('user')
    const videoRef = useRef(null);
    const userImage = localStorage.getItem('userImage')
    const name = localStorage.getItem('userName')
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)
    const [commentsData, setCommentsData] = useState([])
    const [comments, setComments] = useState()
    const handlePlayPause = () => {
        const video = videoRef.current;
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleMuteUnmute = () => {
        const video = videoRef.current;
        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };
    const handleLike = async (item) => {
        let data = {
            reel_id: item.reel_id,
            phone: userId,
            status: "like"
        }
        let data1 = {
            reel_id: item.reel_id,
            phone: userId,
            status: "dislike",
            is_deleted: 0
        }

        if (item.likeStatus) {
            const res = await postCaller(`user/v1/update/like?like_id=${item?.like_id}`, data1)
            if (res.status === "success") {
                getReelsData()
            }
        }
        else {
            const res = await postCaller(`user/v1/add/like`, data)
            if (res.status === "success") {
                getReelsData()
            }
        }

    }
    const handleComment = async (item) => {
        setModalOpen(true)
        const res = await getCaller(`user/v1/get/comment?reel_id=${item?.reel_id}`)
        setCommentsData(res?.comments)
    
    }

    const handleInputChange = (e) => {
        setComments(e.target.value);
    };
    const handleSubmit = async (item) => {
        try {

            const response = await postCaller(`user/v1/add/comment?reel_id=${item.reel_id}&phone=${userId}&comment=${comments}`)
            if (response.status === "success") {
                setComments('');
                try {
                    const response = await getCaller(`user/v1/get/comment?reel_id=${item.reel_id}`)
                    setCommentsData(response.comments)
                } catch (err) {
               
                }
            }
        } catch (err) {
           
        }

    };
    return (
        <div className="continer">
            <div className="video-box">
                <video ref={videoRef} controls={false} width="100%" height="100%"  >
                    <source src={videoUrl.url} type="video/mp4" />
                </video>
                <div className={`controls ${isPlaying ? 'playing' : ''}`}>
                    <button onClick={handlePlayPause} className='videoIcon play-btn'>
                        {isPlaying ? (
                            <i className="fa fa-pause"></i>
                        ) : (
                            <i className="fa fa-play"></i>
                        )}
                    </button>
                    <button onClick={handleMuteUnmute} className='videoIcon audio'>
                        {isMuted ? (
                            <i className="fa fa-volume-off"></i>
                        ) : (
                            <i className="fa fa-volume-up"></i>
                        )}
                    </button>
                </div>

                <div className="content">
                    <div className="reel-img">
                        <img src={userImage} alt="" />
                    </div>
                    <div className="reel-text">
                        <h4>{name}</h4>
                        <h5>Indian cricket reels</h5>
                    </div>
                </div>
            </div>
            <div className="iconBox">
                <ul>
                    <li>
                        <Link onClick={() => handleLike(videoUrl)}>
                            <FaHeart style={{ color: videoUrl?.likeStatus === "like" ? "red" : "white", fontSize: "1.5rem" }} />
                            <p style={{ textAlign: "center", color: "white" }}>  {videoUrl.likeCount} </p>

                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => handleComment(videoUrl)}>
                            <FaRegComment style={{ color: videoUrl?.commentount === 0 ? "white" : "red", fontSize: "1.5rem" }} />
                            <p style={{ textAlign: "center", color: "white" }}>  {videoUrl.commentCount} </p>
                        </Link>
                    </li>
                </ul>

            </div>
            {
                modalOpen && (

                    <div className='comments-container'>
                        <div className='close-icon' onClick={() => setModalOpen(false)}>
                            <h2><IoCloseOutline /></h2>
                        </div>
                        {
                            commentsData?.length > 0 ? commentsData?.map((el, i) => (
                                <div className='comments-card' key={i}>
                                    <div className='comments-img'>
                                        {userImage ? <img src={userImage} alt='' /> : <img src={comment1} alt='' />}
                                    </div>
                                    <div className="">
                                        <span>Deepak</span>
                                        <p>{el.comment}</p>
                                    </div>
                                </div>
                            )) : null
                        }
                        <div className='input-comment'>
                            <input type="text" name="" value={comments} id="" placeholder='comment' onChange={(e) => handleInputChange(e)} />
                            <button onClick={() => handleSubmit(videoUrl)}>Send</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default VideoPlayer;
