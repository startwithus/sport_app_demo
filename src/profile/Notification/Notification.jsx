import React from 'react'
import './notification.css'
import rightArrow from '../../assets/chevron_right_FIL.svg'
import ToggleButton from '../../components/toggleButton/ToggleButton'
import { selectTranslations } from '../../reduxx/languageSlice.js';
import { useSelector } from 'react-redux';

const Notification = () => {
  const translations = useSelector(selectTranslations)

  const notification = [
    {
      heading: `${translations['Matches']}`,
      subheading: `${translations['CustomizeYourNotificationForMatches']}`
    },
    {
      heading: `${translations['Series']}`,
      subheading: `${translations['CustomizeYourNotificationForMatches']}`
    },
    {
      heading: `${translations['Theme']}`,
      subheading: `${translations['CustomizeYourNotificationForMatches']}`
    },
    {
      heading: `${translations['Player']}`,
      subheading: `${translations['CustomizeYourNotificationForMatches']}`
    },
    {
      heading: `${translations['Admin']}`,
      subheading: `${translations['CustomizeYourNotificationForMatches']}`
    }
  ]

  return (
    <>

      <div className='profile-match-container'>
        <div>
          <div className='all_noti'>
            <h3 className='all-notification'>{translations['AllNotifications']}</h3>
            <div className='allow'>
              <div className='text'>
                <h3>{translations['AllowNotification']}</h3>
                <p>{translations['EasilyEnableOrDisableNotification']}</p>
              </div>
              <div className='button'>
                <ToggleButton />
              </div>
            </div>
          </div>
          <hr className='heading-line' />
          <div className='mid-noti'>
            <h3>{translations['YourNotification']}</h3>
            <div className='y-noti'>
              {
                notification.map(e => (
                  <div className='data'>
                    <div className='prob-section-1'>
                      <div className=''>
                        <div className='tropy-section'>
                          <div className='project-view'>
                            <h4>{e.heading}</h4>
                            <div className='rightArrow-view'>
                              <p>{e.subheading}</p>
                              <img src={rightArrow} alt='' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              <hr className='heading-line' />
              <div className='default-section'>
                <h3>{translations['DefaultNotification']}</h3>
              </div>
              <div className='allow'>
                <div className='text'>
                  <h3>{translations['SeriesUpdates']}</h3>
                  <p>{translations['ControlWhetherYouReceiveUpdatesForSeries']}</p>
                </div>
                <div className='button'>
                  <ToggleButton />
                </div>
              </div>
              <div className='allow'>
                <div className='text'>
                  <h3>{translations['BreakingNews']}</h3>
                  <p>{translations['ControlWhetherYouReceiveUpdatesForSeries']}</p>
                </div>
                <div className='button'>
                  <ToggleButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notification
