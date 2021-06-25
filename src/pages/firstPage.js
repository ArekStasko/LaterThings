import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import hero from '../assets/images/hero.jpg'
import styled from 'styled-components'

const FirstPageContainer = styled.div`
background-image: url(${ hero });
`

const FirstPage = ({ userID }) => {
  return (
    <FirstPageContainer className="firstPage">
    <div className="firstPage__blur"></div>
    <div className="firstPage__header" >
      <h1>Finger</h1>
    </div>
      <div className="firstPage__btn">
        {userID ? (
          <>
            <Link to="/things/music" className="firstPage__btn--redirect">
              Go to my Finger
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="firstPage__btn--login">
              Login
            </Link>
            <Link to="/register" className="firstPage__btn--register">
              Register
            </Link>
          </>
        )}
      </div>
    </FirstPageContainer>
  );
};

const mapStateToProps = ({ userID = null }) => ({ userID });

export default connect(mapStateToProps)(FirstPage);
