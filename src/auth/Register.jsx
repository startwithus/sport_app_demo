import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import logoIcon from "../assets/Icon.svg";
import "./login.css";
import "../auth/register.css";
import { postCaller } from "../services/api";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
const Register = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otpValue, setOptValue] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
    <FiEyeOff
      style={{ color: "#8B8B8B", fontSize: "1.2rem", cursor: "pointer" }}
    />
  );
  const [otpId, setOtpId] = useState("");

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

  const initialValues = {
    phone: "",
    password: "",
    otp: "",
  };

  // const validationSchema = Yup.object().shape({
  //     mobileNumber: Yup.string()
  //         .required('Mobile number is required')
  //         .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
  //     otp: Yup.string().when('mobileNumber', {
  //         is: (mobileNumber) => mobileNumber && otpSent && showOtpInput,
  //         then: Yup.string()
  //             .required('OTP is required')
  //             .matches(/^\d{6}$/, 'OTP must be 6 digits'),
  //         otherwise: Yup.string(),
  //     }),
  // });

  const onSubmit = async (values) => {
    values.otp = otpValue;
    values.otp_id = otpId;
    const res = await postCaller("user/v1/register", values);
    if (res?.status === "success") {
      alert("Registration Successful");
      navigate("/login");
    } else {
      alert(res.errMsg);
    }
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(
        <FiEye
          style={{ color: "#8B8B8B", fontSize: "1.2rem", cursor: "pointer" }}
        />
      );
      setType("text");
    } else {
      setIcon(
        <FiEyeOff
          style={{ color: "#8B8B8B", fontSize: "1.2rem", cursor: "pointer" }}
        />
      );
      setType("password");
    }
  };
  const handleGetOtp = async () => {
    const res = await postCaller(
      `user/v1/send/otp?phone=${formik.values.phone}`
    );
    if (res.status === "success") {
      setOtpSent(true);
      setShowOtpInput(true);
      setTimer(60);
      setOptValue(res.OTP);
      setOtpId(res.otp_id);
      alert("OTP sent successfully!");
    }
  };

  const handleResendOtp = async () => {
    const res = await postCaller(
      `user/v1/send/otp?phone=${formik.values.phone}`
    );
    if (res.status === "success") {
      setOtpSent(true);
      setTimer(60);
      alert("OTP resent successfully!");
      setOptValue(res.OTP);
      setOtpId(res.otp_id);
    }
  };
  const handleVerifyOpt = async () => {
    const res = await postCaller(
      `user/v1/verify_otp?otp=${otpValue}&otp_id=${otpId}`
    );

    if (res.status === "success") {
      alert("OTP verification successful!");
    } else {
      alert("OTP verification failed. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues,
    //   validationSchema,
    onSubmit,
  });
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="main-input-container">
          <div className="login-logo">
            <img src={logoIcon} alt="" className="" />{" "}
            <img src={logo} alt="" className="logo-next" />
          </div>
          <div className="sign-in-content">
            <h2>Sign Up</h2>
            <p className="regular-para-2">Please enter your details</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <div className="input-container">
                <div className="input-field-container">
                  <FaPhoneAlt style={{ color: "#8B8B8B", fontSize: "18px" }} />
                  <input
                    placeholder="Phone"
                    autoComplete="off"
                    type="text" 
                    id="phone"
                    name="phone"
                    maxLength="10"
                    onChange={(e) => {
                      
                      const value = e.target.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 10);
                      formik.setFieldValue("phone", value); 
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
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
                      autoComplete="off"
                      name="otp"
                      placeholder="Enter OTP"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.otp}
                    />
                    {formik.touched.otp && formik.errors.otp && (
                      <div className="error">{formik.errors.otp}</div>
                    )}

                    {showOtpInput ? (
                      <button
                        type="button"
                        disabled={!formik.values.otp}
                        style={{ backgroundColor: "#1B9B46" }}
                        className="otp-send"
                        onClick={handleVerifyOpt}
                      >
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
                  <div className="timer">
                    <p className="small-para">Resend OTP in {timer} seconds</p>
                  </div>
                )}
              </div>

              {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                <div className="error">{formik.errors.mobileNumber}</div>
              )}

              <div className="input-container">
                <div className="input-field-container">
                  <MdLockOutline
                    style={{ color: "#8B8B8B", fontSize: "18px" }}
                  />
                  <input
                    type="password"
                    disabled={!formik.values.otp}
                    name="password"
                    placeholder="Password"
                    id="password"
                    onChange={formik.handleChange}
                    autoComplete="off"
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </div>
                <span onClick={handleToggle}>{icon}</span>
                {formik.errors.password && formik.touched.password && (
                  <span className="error" style={{ color: "red" }}>
                    {formik.errors.password}
                  </span>
                )}
              </div>

              <div className="sign-in-btn">
                <div className="">
                  <button type="submit">Sign Up</button>

                  <div className="flex-3 create-acc-container">
                    <p className="small-regular-font">
                      Already have an accoun?
                    </p>
                    <Link to="/login">Sign In</Link>
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
