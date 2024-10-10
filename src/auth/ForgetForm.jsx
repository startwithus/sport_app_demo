import React from 'react'
import '../auth/login.css'
import '../auth/register.css'
import logo from '../assets/logo.png'
import logoIcon from '../assets/Icon.svg'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
const ForgetForm = ({formik,showOtpInput,handleVerifyOpt,handleResendOtp,handleToggle,otpSent,timer,icon,handleGetOtp}) => {
  return (
    <div className='login-container'>
    <div className="login-form-container">
        <div className="main-input-container">
            <div className="login-logo">
                <img src={logoIcon} alt="" className='' />  <img src={logo} alt="" className='logo-next' />
            </div>
            <div className="sign-in-content">
                <h2>Change Password</h2>
                <p className='regular-para-2'>Please enter register mobile number</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="">
                    <div className="input-container">
                  <div className="input-field-container">
                  <FaPhoneAlt style={{ color: "#8B8B8B",fontSize:"18px" }} />
                        <input placeholder='Phone'
                            autoComplete='off' 
                            type="text"
                            id="phone"
                            
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone} />
                  </div>
                    </div>
                   <div className="otp-container">
                   {!otpSent && (
                        <button
                            type="button"
                            disabled={!formik.values.phone}
                            className="otp-send"
                            onClick={handleGetOtp}
                        >
                            Get OTP
                        </button>
                    )}
                    {showOtpInput && (
                        <div className="otp-input flex"> 
                            <input
                                type="text"
                                id="otp"
                                name="otp"
                                autoComplete='off'
                                placeholder='Enter OTP'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.otp}
                            />
                            {formik.touched.otp && formik.errors.otp && (
                                <div className="error">{formik.errors.otp}</div>
                            )}
                            
                    {showOtpInput ? (
                        <button type="button" disabled={!formik.values.otp} style={{backgroundColor:"#1B9B46"}} className="otp-send" onClick={handleVerifyOpt}>
                            Verify OTP
                        </button>
                    ) : null}
                        </div>
                    )}
                   </div>
                    <div className="flex resend-otp">
                    {otpSent && (
                        <button
                            type="button"
                            className="resend-button"
                            onClick={handleResendOtp}
                            disabled={timer > 0}
                            
                        >
                            Resend OTP
                        </button>
                    )}

                    {otpSent && (
                        <div className="timer"><p className='small-para'>Resend OTP in {timer} seconds</p></div>
                    )}
                    </div>

                    {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                        <div className="error">{formik.errors.mobileNumber}</div>
                    )}

                    <div className="input-container">
                <div className="input-field-container">
                <MdLockOutline style={{ color: "#8B8B8B",fontSize:"18px"}} />
                        <input type="password"
                            disabled={!formik.values.otp} name="password"
                             placeholder='New Password' 
                             id="password"
                             onChange={formik.handleChange}
                             autoComplete='off'
                            onBlur={formik.handleBlur}
                            value={formik.values.password} />
                </div>
                        <span onClick={handleToggle}>
                            {icon}
                        </span>
                        {formik.errors.password && formik.touched.password && <span className="error" style={{ color: "red" }}>
                            {formik.errors.password}
                        </span>}
                    </div>


                    <div className="sign-in-btn">
                        <div className="">
                            <button type='submit'>Continue</button>

                            <div className="flex-3 create-acc-container">
                                <p className='small-regular-font'>Already have an accoun?</p>
                                <Link to="/login">Sign In</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default ForgetForm