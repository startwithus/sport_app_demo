import React, { useState } from 'react'
import '../header/bottom.css'
import { Link } from 'react-router-dom';
import {
    IoCameraOutline,
    IoChatbubbleOutline,
    IoHomeOutline,
    IoPersonOutline,
    IoSettingsOutline
  } from "react-icons/io5";
function ListItem({ icon, text, onClick, isSelected,path }) {
    return (
      <li
        className={`list ${isSelected && "active"}`}
        data-list-item={text}
        onClick={onClick}
      >
        <Link to={path} >
          <span className="icon">{icon}</span>
          <span className="text">{text}</span>
        </Link>
      </li>
    );
  }
const BottomTab = () => {
    const [selected, setSelected] = useState("");
    const handleClick = (e) => {
      const item = e.currentTarget.getAttribute("data-list-item");
      if (item) setSelected(item);
    };
  return (

      <ul className='nav-links-mobile'>
        <ListItem
          icon={<IoHomeOutline />}
          path="/"
          text="Home"
          onClick={handleClick}
          isSelected={selected === "Home"}
        />
        <ListItem
          icon={<IoPersonOutline />}
          text="Profile"
          path="/editProfile"
          onClick={handleClick}
          isSelected={selected === "Profile"}
        />
        <ListItem
          icon={<IoChatbubbleOutline />}
          text="Message"
          onClick={handleClick}
          isSelected={selected === "Message"}
        />
        <ListItem
          icon={<IoCameraOutline />}
          text="Photos"
          onClick={handleClick}
          isSelected={selected === "Photos"}
        />
        <ListItem
          icon={<IoSettingsOutline />}
          text="Settings"
          onClick={handleClick}
          path="/series"
          isSelected={selected === "Settings"}
        />
        <div className="indicator"></div>
      </ul>
   
  )
}

export default BottomTab