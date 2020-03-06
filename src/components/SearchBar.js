import React from "react";

class SearchBar extends React.Component {
  //  make the input field a controlled field by storing input into the value
  // instead of the DOM.
  // to control it needs a state value assigned to value = and a onchange handler
  // using an => function makes setaState a call back triggered on change
  // oncnage call back can be inline or a => function

  state = { term: "" };
  // arrow functions automatically bind this
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Video Search</label>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
