import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import './mail.css'
const ContactModal = ({ isModalVisible, handleModal }) => {
    const [token, setToken] = useState(null);

    // Retrieve token from localStorage (React.js equivalent to AsyncStorage in React Native)
    const getToken = async () => {
        try {
            const storedToken = localStorage.getItem('token');
            setToken(storedToken);
            return storedToken;
        } catch (error) {
            console.error('Error retrieving token:', error);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    const mandatoryField = (field) => {
        const mandatoryFields = ['name', 'email', 'phone'];
        if (mandatoryFields.includes(field)) {
            return <span style={{ color: 'red' }}> *</span>;
        }
        return null;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },
        onSubmit: async (values, { resetForm }) => {
            const myToken = token || (await getToken());
            try {
                const response = await fetch(`/user/v1/post/query`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${myToken}`
                    },
                    body: JSON.stringify(values)
                });
                const result = await response.json();
                console.log(result);
                resetForm();
            } catch (err) {
                console.log(err);
            }
        }
    });

    return (
        <>
            <div className='profile-match-container'>
                <div className='edit-section'>
                    <h3>Get In Touch</h3>
                </div>
                <div className="hr">
                    <hr />
                </div>

                <form onSubmit={formik.handleSubmit} style={{ marginTop: '20px' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label className='label-mail'>
                            Name {mandatoryField('name')}
                            <input
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={inputStyle}
                            />
                        </label>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label className='label-mail'>
                            Email {mandatoryField('email')}
                            <input
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={inputStyle}
                            />
                        </label>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label className='label-mail'>
                            Mobile {mandatoryField('phone')}
                            <input
                                type="tel"
                                placeholder="Enter Mobile Number"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                style={inputStyle}
                            />
                        </label>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        {/* <button type="submit" className="button is-primary">Send</button> */}
                        <button className='mail-button'>Send</button>

                    </div>
                </form>
            </div>
        </>

    );
};

// CSS for the input fields
const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#3F3F3F',
    color: 'white'
};

export default ContactModal;
