import React, { useEffect, useState } from 'react'
import './login.css'
import '../auth/register.css'
import { postCaller, updateCaller } from '../services/api'
import { FiEyeOff, FiEye } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import ForgetForm from './ForgetForm'
const ForgotPassword = () => {
    const navigate = useNavigate()
    const [otpSent, setOtpSent] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [timer, setTimer] = useState(60);
    const [otpValue, setOptValue] = useState("")
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<FiEyeOff style={{ color: "#8B8B8B", fontSize: "1.2rem", cursor: "pointer" }} />);
    const [otpId, setOtpId] = useState("")
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
        values.otp = otpValue
        values.otp_id = otpId
        const res = await updateCaller('user/v1/change_password', values)
        if (res.status === 'success') {
            alert("Password Change Successful")
            navigate('/login')
        }
        else {
            alert(res.errMsg)
        }
    };
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(<FiEye style={{ color: "white", fontSize: "1.2rem", cursor: "pointer" }} />);
            setType('text')
        } else {
            setIcon(<FiEyeOff style={{ color: "white", fontSize: "1.2rem", cursor: "pointer" }} />)
            setType('password')
        }
    }
    const handleGetOtp = async () => {
        const res = await postCaller(`user/v1/send_otp?phone=${formik.values.phone}`)
        if (res.status === 'success') {
            setOtpSent(true);
            setShowOtpInput(true);
            setTimer(60);
            setOptValue(res.OTP)
            setOtpId(res.otp_id)
            alert('OTP sent successfully!');
        }
    };

    const handleResendOtp = async () => {
        const res = await postCaller(`user/v1/send_otp?phone=${formik.values.phone}`)
        if (res.status === 'success') {
            setOtpSent(true);
            setTimer(60);
            alert('OTP resent successfully!');
            setOptValue(res.OTP)
            setOtpId(res.otp_id)

        }

    };
    const handleVerifyOpt = async () => {
        const res = await postCaller(`user/v1/verify_otp?otp=${otpValue}&otp_id=${otpId}`)
        if (res.status === "success") {
            alert('OTP verification successful!');
        } else {
            alert('OTP verification failed. Please try again.');
        }
    }

    const formik = useFormik({
        initialValues,
        //   validationSchema,
        onSubmit,
    });

    return (

     <ForgetForm handleGetOtp={handleGetOtp}
     handleResendOtp={handleResendOtp}
     handleToggle={handleToggle}
     handleVerifyOpt={handleVerifyOpt}
     formik={formik}
     otpSent={otpId}
     timer={timer}
     icon={icon}
     showOtpInput={showOtpInput}
     />

    )
}

export default ForgotPassword