import React from 'react';
import '../tab/tab.css'
const Tab = ({ label, isActive, onClick }) => {
  const tabClassName = isActive ? 'active-tab' : 'inactive-tab';

  return (
    <div className={`tab ${tabClassName}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;