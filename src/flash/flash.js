import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { resetFlash } from '../actions/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const FlashMessage = ({ duration, resetFlash, flash }) => {
  
  const flashTimer = setTimeout(() => {
    resetFlash()
    console.log('LOL')
  }, duration);

  useEffect(() => {
    return flashTimer
   }, []);

  const clearFlash = () => {
    resetFlash()
    clearTimeout(flashTimer)
  }
  
  const pick = () => {
    switch (flash) {
      case 'ERROR':
        return(
          <div className='flash-error'>
            <FontAwesomeIcon className="flash-error__icon" icon={faExclamationCircle} />
            <p>Please pass correct values</p>
          </div>
        )
      case 'SUCCESS':
        return(
          <div className='flash-success'>
            <FontAwesomeIcon className="flash-success__icon" icon={faCheckCircle} />
            <p>Success</p>
          </div>
        )  
      default:
        return(
          <div className='flash-unknown'>
             <h1>Unknown error</h1>
          </div>
        )  
    }
  }
  return (
    <div className="flash" onClick={()=> clearFlash()}>
      {
        pick()
      }
    </div>
  );
};

const mapStateToProps = ({flash}) => ({flash}) 

const mapDispatchToProps = dispatch => ({
  resetFlash: () =>
    dispatch(resetFlash()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);
