import React, { useState, useEffect } from "react";
import "./edit.css";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getCaller, updateCaller } from "../../services/api";
import { selectTranslations } from "../../reduxx/languageSlice.js";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [profileImg, setProfileImg] = useState(null);
  const translations = useSelector(selectTranslations);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    if (token) {
      const resp = await getCaller("user/v1/get/user");
      setUserData(resp);
      formik.setValues((values) => ({
        ...values,
        name: resp?.data?.name ?? "",
        phone: resp?.data?.phone ?? "",
        email: resp?.data?.email ?? "",
      }));
    }
  }

  const handleProfileUpload = async (event) => {
    setProfileImg(event.target.files[0]);
    let formData = new FormData();
    formData.append("docs", event.target.files[0]);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/v1/user/profile/image`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );
    if (response) {
      alert("User Profile Updated");
      setTimeout(() => {
        // navigate("/login")
      }, 1000);
    } else {
      alert("User Profile Not Updated");
    }

    getUserData();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    // validationSchema: validationLogin,
    onSubmit: async (values) => {
      const res = await updateCaller("user/v1/user/profile", values);
      if (res.status === true) {
        alert(res.message);
        navigate("/EditProfile");
      } else {
        alert(res.errMsg);
      }
    },
  });
  return (
    <motion.div
      className="children-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="form-content">
        <div className="cam-icon">
          <div className="edit-img">
            <div className="">
              <label htmlFor="uploadImage">
                <img
                  className="image-circle"
                  src={
                    !userData?.data?.image
                      ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      : userData?.data?.image
                  }
                  alt=""
                />
              </label>
            </div>
            <input
              type="file"
              id="uploadImage"
              hidden
              onChange={(event) => {
                handleProfileUpload(event);
              }}
              accept="image/*"
            />
            <label
              style={{
                cursor: "pointer",
                color: "white",
              }}
              htmlFor="uploadImage"
            >
              {translations["ChangePhoto"]}
            </label>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-edit-section">
            <div className="form-edit-field">
              <label htmlFor="">{translations["FullName"]}</label> <br />
              <input
                name="name"
                autoComplete="off"
                id="name"
                type="name"
                value={formik.values.name}
                placeholder={translations["FullName"]}
          
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-edit-field">
              <label htmlFor="">{translations["Mobile"]}</label> <br />
              <input
                name="phone"
                autoComplete="off"
                id="phone"
                type="phone"
                value={userData?.data?.phone}
                placeholder={translations["Phone"]}
                
              />
            </div>
            <div className="form-edit-field">
              <label htmlFor="">{translations["Email"]}</label> <br />
              <input
                name="email"
                autoComplete="off"
                id="email"
                type="email"
                value={formik.values.email}
                placeholder={translations["Email"]}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="edit-btn">
            <button
              className="reset"
              type="reset"
              onClick={() => navigate("/")}
            >
              {translations["Cancel"]}
            </button>
            <button type="submit">{translations["Save"]}</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default EditProfile;
