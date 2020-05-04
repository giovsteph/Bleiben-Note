import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../store/actions/noteActions.js";
import { Redirect } from "react-router-dom";

class CreateNote extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNote(this.state);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    //if a user is not logged in, redirects to the signin page
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Note</h5>
          <div className="input-field">
            <label htmlFor="title ">Title:</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content ">Content:</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Create Note
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note)),
  };
};
//lleva null, porque el primer parametro es la otra función mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);
