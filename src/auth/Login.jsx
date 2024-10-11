import React, { useEffect, useState } from "react";

import logoIcon from "../assets/Icon.svg";
import "./login.css";
import { postCaller } from "../services/api";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import pass from "../assets/lock.svg";

import google from "../assets/google.svg";
import fb from "../assets/fb.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { FiEyeOff, FiEye } from "react-icons/fi";
import * as Yup from "yup";
const Login = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(
    <FiEyeOff
      style={{ color: "#8B8B8B", fontSize: "1.2rem", cursor: "pointer" }}
    />
  );
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationLogin = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Mobile Number is Required"),
    password: Yup.string()
      .required('Password is Required')
      .min(6, 'Password must be exactly 6 digits')
      .max(6, 'Password must be exactly 6 digits')
      .matches(/^\S*$/, 'Password cannot contain spaces'), // Disallow spaces

  });
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: validationLogin,
    onSubmit: async (values) => {
      const res = await postCaller("user/v1/login", values);
      if (res.status === true) {
        alert(res.message);
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", res?.userData?.phone);
        localStorage.setItem(
          "userName",
          res?.userData?.name === null ? "" : res?.userData?.name
        );
        localStorage.setItem(
          "userImage",
          res?.userData?.image === null ? "" : res?.userData?.image
        );
        // localStorage.setItem('user_name', res?.user_name)
        navigate("/");
        window.location.reload();
      } else {
        alert(res.errMsg);
      }
    },
  });

  const handleToggle = () => {
    if (type === "password") {
      setIcon(
        <FiEye
          style={{ color: "white", fontSize: "1.2rem", cursor: "pointer" }}
        />
      );
      setType("text");
    } else {
      setIcon(
        <FiEyeOff
          style={{ color: "white", fontSize: "1.2rem", cursor: "pointer" }}
        />
      );
      setType("password");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/editProfile");
    }
  }, []);
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="main-input-container">
          <div className="login-logo">
            <img src={logoIcon} alt="" className="icon-img" />{" "}
            <h2 style={{ color: "white" }}>CRICFAST</h2>
          </div>
          <div className="sign-in-content">
            <h2>Login Here</h2>
            <p className="regular-para-2">Please Enter Your Details</p>
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
                    name="phone"
                    id="phone"
                    maxLength="10"
                    autoComplete="off"
                    placeholder="Enter Mobile Number"
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 10);
                      formik.setFieldValue("phone", value);
                    }}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onKeyDown={(e) => {
                      if (
                        e.key === "e" ||
                        e.key === "E" ||
                        e.key === "+" ||
                        e.key === "-"
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
              </div>
              {formik.errors.phone && formik.touched.phone && (
                <span
                  className="error"
                  style={{ color: "red", fontSize: "16px", marginTop: "5px" }}
                >
                  {formik.errors.phone}
                </span>
              )}
            </div>
            <div className="" style={{ marginTop: "1rem" }}>
              <label style={{ color: "white" }}>
                Password<span className="mandatory">*</span>
              </label>
              <div className="input-container">
                <div className="input-field-container">
                  <MdLockOutline
                    style={{ color: "white", fontSize: "18px" }}
                  />
                  <input
                    type={type}
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Enter Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
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
              {formik.errors.password && formik.touched.password && (
                <span
                  className="error"
                  style={{ color: "red", fontSize: "16px", marginTop: "5px" }}
                >
                  {formik.errors.password}
                </span>
              )}
              <div className="login-para-container">
                <div className="flex" style={{ gap: "0.3rem" }}>
                  <input type="checkbox" name="" id="check" />{" "}
                  <p className="remember small-regular-font">Remember Me</p>
                </div>
                <p
                  className="forgot small-regular-font"
                  onClick={() => navigate("/forget_password")}
                >
                  Forgot Password
                </p>
              </div>
              <div className="sign-in-btn">
                <div className="">
                  <button type="submit">Log In</button>
                  {/* <p className="small-regular-font or">Or Sign In with</p> */}
                  {/* <div className="round-box-container">
                    <div className="round-box">
                      <img src={google} alt="" />
                    </div>
                    <div className="round-box">
                      <img src={fb} alt="" />
                    </div>
                  </div> */}
                  <div className="flex-3 create-acc-container" style={{ gap: "0.3rem" }}>
                    <p className="small-regular-font">Don’t have an account?</p>
                    <Link to="/register"> Register</Link>
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

export default Login;
