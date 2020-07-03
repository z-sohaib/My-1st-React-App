import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Add Todo ..."
            value={this.state.value}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  AddTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default AddTodo;
