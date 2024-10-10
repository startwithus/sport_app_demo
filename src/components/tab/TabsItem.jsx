import React, { useState } from 'react';
import Tab from './Tab';
import '../tab/tab.css'

const TabsItem = ({tabData}) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
   <>
    <div className="tabs-container">
    <div className="tab-list">
      {tabData.map((tab, index) => (
        <Tab
          key={index}
          label={tab?.label}
          isActive={index === activeTab}
          onClick={() => handleTabClick(index)}
        />
      ))}
    </div>
 
  </div>
     <div className="tab-content">
     {tabData[activeTab].content}
   </div>
   </>
  );
};

export default TabsItem;