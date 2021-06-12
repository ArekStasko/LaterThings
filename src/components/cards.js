import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import { removeThing as removeThingAction } from '../actions/index'

const Cards = ({ info, removeThing }) => {


  return (
    <>
      {info.map((item, index) => (
        <div key={index} className="category-thing__card">
            <button onClick={()=>removeThing(item.category, item.id)} className='category-thing__card--delete'>
            <FontAwesomeIcon icon={faWindowClose} />
            </button>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <a className='category-thing__card--link' target='blank' href={item.link}>
          Link
          </a> 
        </div>
      ))
      }
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  removeThing: (category, id) => dispatch(removeThingAction(category, id)),
})


export default connect(
  null, 
  mapDispatchToProps
  )(Cards);
