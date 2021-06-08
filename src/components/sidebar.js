import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faLightbulb,
  faFilm,
  faPlus,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Btn = styled(Link)`
  background-color: ${({ active }) => (active ? "#ffffff" : "#161b22")};
  color: ${({ active }) => (active ? "#161b22" : "#ffffff")};
`;

const Sidebar = ({ category, show, setCategory, setShow }) => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__logo">
          <FontAwesomeIcon
            className="sidebar__finger-icon"
            icon={faFingerprint}
          />
          <p className="sidebar__title">LaterThings</p>
        </div>
        <div className="sidebar__icons">
          <Btn
            to='/things/Music'
            className='sidebar__icons--icon'
            active={category === "Music"}
            onClick={() => setCategory("Music")}
          >
            <FontAwesomeIcon className="sidebar-icon" icon={faMusic} />
          </Btn>
          <Btn
            to='/things/Ideas'
            className='sidebar__icons--icon'
            active={category === "Ideas"}
            onClick={() => setCategory("Ideas")}
          >
            <FontAwesomeIcon className="sidebar-icon" icon={faLightbulb} />
          </Btn>
          <Btn
            to='/things/Film'
            className='sidebar__icons--icon'
            active={category === "Film"} 
            onClick={() => setCategory("Film")}
          >
            <FontAwesomeIcon className="sidebar-icon" icon={faFilm} />
          </Btn>
        </div>
        <button className="sidebar__log">Logout</button>
      </div>
      <button className="add" onClick={() => setShow(!show)}>
        <FontAwesomeIcon className="add-icon" icon={faPlus} />
      </button>
    </>
  );
};

export default Sidebar;
