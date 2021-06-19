import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { resetFlash } from '../actions/index'

const FlashMessage = ({ duration, type, resetFlash }) => {

  useEffect(() => {
    setTimeout(() => {
      resetFlash()
    }, duration);
  }, []);
  
 
  return (
    <div className="flash">
      <p>error</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  resetFlash: () =>
    dispatch(resetFlash()),
})

export default connect(null, mapDispatchToProps)(FlashMessage);
