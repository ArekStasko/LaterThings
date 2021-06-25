import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faLightbulb,
  faFilm,
  faPlus,
  faFingerprint,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { addCategory, logout } from "../actions/index";

const Btn = styled(Link)`
  background-color: ${({ active }) => (active ? "#ffffff" : "#161b22")};
  color: ${({ active }) => (active ? "#161b22" : "#ffffff")};
`;

const Navbar = styled.div`
  @media (max-width: 768px) {
    display: ${({ nav }) => (nav ? "flex" : "none")};
  }
`;

const Sidebar = ({ category, show, setShow, addCategory, logout }) => {
  const [nav, setNav] = useState(false);
  let history = useHistory();

  useEffect(() => {
    addCategory("music");
  }, [addCategory]);

  const runLogout = () => {
    history.push("/login");
    logout();
  };

  return (
    <>
      <FontAwesomeIcon
        className="nav-btn"
        onClick={() => setNav(!nav)}
        icon={nav ? faTimes : faBars}
      />
      <Navbar nav={nav} className="sidebar">
        <div className="sidebar__logo">
          <FontAwesomeIcon
            className="sidebar__finger-icon"
            icon={faFingerprint}
          />
          <p className="sidebar__title">LaterThings</p>
        </div>
        <div className="sidebar__icons">
          <Btn
            to="/things/music"
            className="sidebar__icons--icon"
            active={category === "music"}
            onClick={() => {
              addCategory("music");
              setNav(!nav);
            }}
          >
            <FontAwesomeIcon className="sidebar-icon" icon={faMusic} />
          </Btn>
          <Btn
            to="/things/ideas"
            className="sidebar__icons--icon"
            active={category === "ideas"}
            onClick={() => {
              addCategory("ideas");
              setNav(!nav);
            }}
          >
            <FontAwesomeIcon className="sidebar-icon" icon={faLightbulb} />
          </Btn>
          <Btn
            to="/things/film"
            className="sidebar__icons--icon"
            active={category === "film"}
            onClick={() => {
              addCategory("film");
              setNav(!nav);
            }}
          >
            <FontAwesomeIcon className="sidebar-icon" icon={faFilm} />
          </Btn>
        </div>
        <button onClick={() => runLogout()} className="sidebar__log">
          Logout
        </button>
      </Navbar>
      <button
        className="add"
        onClick={() => {
          setShow(!show);
        }}
      >
        <FontAwesomeIcon className="add-icon" icon={faPlus} />
      </button>
    </>
  );
};

const mapStateToProps = ({ category = "music" }) => ({ category });

const mapDispatchToProps = (dispatch) => ({
  addCategory: (category) => dispatch(addCategory(category)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
