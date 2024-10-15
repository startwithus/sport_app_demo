import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logoIcon from "../assets/Icon.svg";
import "./login.css";
import "../auth/register.css";
import { postCaller } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import * as Yup from "yup";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Add these imports for eye icon

const Register = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otpValue, setOptValue] = useState("");
  const [otpId, setOtpId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState('password'); // Initialize input type


  const [icon, setIcon] = useState(
    <FiEyeOff
      style={{ color: "#8B8B8B", fontSize: "1.2rem", cursor: "pointer" }}
    />
  );

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Mobile Number is Required"),
    password: Yup.string()
      .required('Password is Required')
      .min(6, 'Password must be exactly 6 digits')
      .max(6, 'Password must be exactly 6 digits')
      .matches(/^\S*$/, 'Password cannot contain spaces'), // Disallow spaces

  });

  // const validationSchema = yup.object({
  //   phone: yup
  //     .string()
  //     .required('Mobile number is required')
  //     .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
  //   password: yup
  //     .string()
  //     .required('Password is required')
  //     .min(6, 'Password must be at least 6 characters long'),
  // });

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      delete values.otp;
      values.otp_id = otpId;
      const res = await postCaller('user/v1/register', values);

      if (res.status === true) {
        alert(res?.message);
        navigate('/login'); // navigate back to login page
      } else {
        alert(res.errMsg);
      }
    },
  });

  useEffect(() => {
    let interval;

    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleGetOtp = async () => {
    const res = await postCaller(`user/v1/send/otp?phone=${formik.values.phone}`);
    setOtpSent(true);
    setShowOtpInput(true);
    setTimer(60);
    setOptValue(res.OTP);
    setOtpId(res.otp_id);
    alert(`OTP sent successfully! This is OTP: ${res.OTP}`);
  };

  const handleVerifyOtp = async () => {
    const res = await postCaller(`user/v1/verify/otp?otp=${otpValue}&otp_id=${otpId}&phone=${formik.values.phone}`);

    if (res.status === true) {
      alert('OTP verification successful!');
    } else {
      alert('OTP verification failed. Please try again.');
    }
  };

  const handleResendOtp = async () => {
    const res = await postCaller(`user/v1/send/otp?phone=${formik.values.phone}`);
    if (res.status === 'success') {
      setOtpSent(true);
      setTimer(60);
      alert('OTP resent successfully!');
      setOptValue(res.OTP);
      setOtpId(res.otp_id);
    }
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<FiEye style={{ color: "white", fontSize: "1.2rem", cursor: "pointer" }} />);
      setType("text");
    } else {
      setIcon(<FiEyeOff style={{ color: "white", fontSize: "1.2rem", cursor: "pointer" }} />);
      setType("password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="main-input-container">
          <div className="back-arrow-icon" onClick={() => navigate('/login')}>
            <p><FaCircleArrowLeft /></p>
          </div>
          <div className="login-logo">
            <img src={logoIcon} alt="" className="" />{" "}
            <img src={logo} alt="" className="logo-next" />
          </div>

          <div className="sign-in-content">
            <h2>Sign Up</h2>
            <p className="regular-para-2"> Please Enter your Details</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <label style={{ color: "white" }}>
                Mobile Number<span className="mandatory">*</span>
              </label>
              <div className="input-container">
                <div className="input-field-container">
                  <FaPhoneAlt style={{ color: "white", fontSize: "18px" }} />
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={formik.values.phone}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 10);
                      formik.setFieldValue("phone", value);
                    }}
                    onBlur={formik.handleBlur('phone')}

                  />
                </div>
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <div className="error">{formik.errors.phone}</div>
              )}
              
              <div className="otp-container">
                {!otpSent && (
                  <button
                    type="button"
                    disabled={formik.values.phone.length !== 10}
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
                      placeholder="Enter OTP"
                      value={otpValue}
                      onChange={(e) => setOptValue(e.target.value)}
                    />
                    {otpSent && (
                      <div className="resend">
                        <p style={{ color: "white" }}>Resend OTP in: {timer}</p>
                        <button type="button" onClick={handleResendOtp} disabled={timer > 0} >Resend OTP</button>
                      </div>
                    )}
                    {showOtpInput ? (
                      <button
                        type="button"
                        disabled={!otpValue}
                        style={{ backgroundColor: "#1B9B46" }}
                        className="otp-send"
                        onClick={handleVerifyOtp}
                      >
                        Verify OTP
                      </button>
                    ) : null}
                  </div>
                )}
              </div>
            

              <div className="" style={{ marginTop: "0.3rem" }}>
                <label style={{ color: "white" }}>
                  Password<span className="mandatory">*</span>
                </label>
                <div className="input-container">
                  <div className="input-field-container">
                    <MdLockOutline
                      style={{ color: "white", fontSize: "18px" }}
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange('password')}
                      onBlur={formik.handleBlur('password')}
                      maxLength={6}
                      onKeyDown={(e) => {
                        if (e.key === ' ') {
                          e.preventDefault();
                        }
                      }}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\s/g, '');
                      }}
                    />
                  </div>
                  <span onClick={handleToggle}>{icon}</span>
                </div>
              </div>
              {formik.errors.password && formik.touched.password && (
                <span className="error" style={{ color: "red" }}>
                  {formik.errors.password}
                </span>
              )}
              <div className="sign-in-btn">
                <div className="">
                  <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
                    Register
                  </button>
                  <div className="flex-3 create-acc-container" style={{ gap: "0.3rem" }}>
                    <p className="small-regular-font">
                      Already have an account?
                    </p>
                    <Link to="/login">Log In</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
