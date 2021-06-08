import React from "react";
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
      console.log(this.state.title, this.state.description, this.state.link);
    } else {
      console.log("pass values");
    }
  };

  render() {
    return (
      <div className="addform">
        <button
          className="addform__close"
          onClick={() => this.props.setShow(!this.props.show)}
        >
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
        <form onSubmit={(e) => this.handleSubmit(e)} className="addform__form">
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
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
