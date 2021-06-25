import React from "react";
import { connect } from "react-redux";
import { addThing as addThingAction } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      link: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const title = target.name;
    this.setState({
      [title]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length > 0 && this.state.description.length > 0) {
      this.props.setShow(!this.props.show);
       this.props.addThing(
        this.props.category,
        {
        category: this.props.category,
        title: this.state.title,
        description: this.state.description,
        link: this.state.link
        }
      ) 
    } else {
      console.log("pass values");
    }
  };

  render() {
    return (
      <>
        <div className="addForm">
        <div className="addform-container"></div>
        <div className="addForm__form">

          <button
            className="addForm__form--close"
            onClick={() => this.props.setShow(!this.props.show)}
          >
            <FontAwesomeIcon icon={faWindowClose} />
          </button>
          <form
            onSubmit={(e) => this.handleSubmit(e)}
            className="addForm__form--form"
          >
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) => this.handleChange(e)}
              name="title"
              value={this.state.title}
              id="title"
              type="text"
            />
            <label htmlFor="description">Description</label>
            <input
              onChange={(e) => this.handleChange(e)}
              name="description"
              value={this.state.description}
              id="description"
              type="text"
            />
            <label htmlFor="link">Link</label>
            <input
              onChange={(e) => this.handleChange(e)}
              name="link"
              value={this.state.link}
              id="link"
              type="text"
            />
            <button type="submit">
              Add
            </button>
          </form>

          </div>  
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addThing: (category, thingContent) =>
    dispatch(addThingAction(category, thingContent)),
});

export default connect(null, mapDispatchToProps)(AddForm);
