var React = require('react');
var ReactDOM = require('react-dom');
var BookmarkStore = require('../store/bookmark_store.js');
var BookmarkActions = require('../actions/bookmark_actions.js');
var Util = require('../util/util.js');

var Form = React.createClass({
  getInitialState: function () {
    return { title: "", url: "", message: "", messageType: "" };
  },

  updateTitle: function (e) {
    var newTitle = e.currentTarget.value;
    this.setState({ title: newTitle });
  },

  updateURL: function (e) {
    var newURL = e.currentTarget.value;
    this.setState({ url: newURL });
  },

  messageFade: function () {
    var self = this;
    setTimeout(function() {
      self.setState({ message: "" }) }
      , 3000)
  },

  addBookmark: function (e) {
    e.preventDefault();
    if (this.state.title == "" && this.state.url == "") {
      this.setState({ message: "Error: both fields are blank!", messageType: "error" });
      this.messageFade();
    }
    else if (this.state.title == "") {
      this.setState({ message: "Error: title field is blank!", messageType: "error"});
      this.messageFade();
    }
    else if (this.state.url == "") {
      this.setState({ message: "Error: URL field is blank!", messageType: "error"});
      this.messageFade();
    }
    else {
      var newBookmark = [this.state.title, this.state.url];
      Util.createNewBookmark(newBookmark);
      this.setState({ message: "Your bookmark was successfully created!", messageType: "success", title: "", url: "" });
      this.messageFade();
    }
  },

  render: function () {
    return(
      <div className="form">
        <h1>ADD A BOOKMARK</h1>
        <section className="field">
          <h2>TITLE</h2>
          <input value={this.state.title} onChange={this.updateTitle}></input>
        </section>
        <section className="field">
          <h2>URL</h2>
          <input value={this.state.url} onChange={this.updateURL}></input>
        </section>
        <button onClick={this.addBookmark}>Submit</button>
        <section className={"message " + this.state.messageType}>
          {this.state.message}
        </section>
      </div>
    )
  }
});

module.exports = Form
