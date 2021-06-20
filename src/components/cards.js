import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { removeThing as removeThingAction, getItems } from "../actions/index";
import FlashMessage from "../flash/flash";

class Cards extends React.Component {
  
  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.getItems(this.props.category);
    }
  }

  render() {
    return (
      <>
      {
        this.props.flash ? (
          <>
          <FlashMessage duration={5000} />
          </>
        ) : null
      }
        {this.props.info ? (
          this.props.info.length > 0 ? (
            this.props.info.map((item, index) => (
              <div key={index} className="category-thing__card">
                <button
                  onClick={() => this.props.removeThing(item.category, item._id)}
                  className="category-thing__card--delete"
                >
                  <FontAwesomeIcon icon={faWindowClose} />
                </button>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  className="category-thing__card--link"
                  target="blank"
                  href={item.link}
                >
                  Link
                </a>
              </div>
            ))
          ) : (
            <>
              <h1>No things</h1>
            </>
          )
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ category, flash }) => ({ category, flash });

const mapDispatchToProps = (dispatch) => ({
  getItems: (category) => dispatch(getItems(category)),
  removeThing: (category, id) => dispatch(removeThingAction(category, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
