// src/Calendar.js

import React, { useState } from 'react';
import { fixtureTab } from '../../pages/fixtures/daysfixtures/tabData';
import './calender.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [tabActive, setTabActive] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handleMatch = (item) => {
        setTabActive(item.title);
    };

    const generateCalendar = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();

        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        const today = new Date();

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = 
                day === today.getDate() && 
                month === today.getMonth() && 
                year === today.getFullYear();

            days.push(
                <div 
                    key={day} 
                    className={`calendar-day ${isToday ? 'today' : ''}`}
                    onClick={() => openModal(`Details for ${monthNames[month]} ${day}, ${year}`)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const handleYearChange = (event) => {
        setCurrentDate(new Date(currentDate.setFullYear(event.target.value)));
    };

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear - 100; i <= currentYear + 100; i++) {
            years.push(i);
        }
        return years;
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={goToPreviousMonth}>&lt;</button>
                <select value={currentDate.getFullYear()} onChange={handleYearChange}>
                    {generateYearOptions().map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                <div className=''>
                    <p style={{color:"white"}}>Cricket this Year</p>
                </div>
                <button onClick={goToNextMonth}>&gt;</button>
            </div>

            <div className='Group-series-calender'>
                {fixtureTab.map((item, index) => (
                    <div
                        key={index}
                        className={`group-tab-1 ${tabActive === item.title ? "active-group-tab" : ""}`}
                        onClick={() => handleMatch(item)}
                    >
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="calendar-container">
                <div className="calendar-grid">
                    <div className="month-name">{monthNames[currentDate.getMonth()]}</div>
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                        <div key={day} className="calendar-header-day">{day}</div>
                    ))}
                    {generateCalendar(currentDate)}
                </div>
            </div>

            {isModalOpen && (
                <div className="calendar-modal-overlay" onClick={closeModal}>
                    <div className="calendar-modal" onClick={e => e.stopPropagation()}>
                        <h2>Event Details</h2>
                        <p>{modalContent}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
