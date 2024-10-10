import React from 'react'
import './language.css'
import radioicon from '../../assets/radio.svg'
const LanguageSettings = () => {
    const language = [
        {
            name: "धनुर्विद्या",
            name2: "Hindi"
        },
        {
            name: "ଫେରିବ",
            name2: "Odia"
        },
        {
            name: "ਅਦਭੁਤ",
            name2: "Punjabi"
        },
    ]
    return (
        <>
          
                <div className='lang-section'>
                        <div>
                            {
                                language.map(e => (
                                    <div className='noti-hindi'>
                                        <div className='lang-sec'>
                                            <p>{e.name}</p>
                                            <p>{e.name2}</p>
                                        </div>
                                        <div className=''>
                                            <img src={radioicon} alt='' />
                                        </div>
                                    </div>
                                ))


                            }

                        </div>
                  
                </div>
        
        </>
    )
}

export default LanguageSettings
