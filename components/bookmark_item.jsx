var React = require('react');
var ReactDOM = require('react-dom');
var BookmarkStore = require('../store/bookmark_store.js');
var BookmarkActions = require('../actions/bookmark_actions.js');
var Util = require('../util/util.js');

var BookmarkItem = React.createClass({

    getInitialState: function () {
      return { starred: false };
    },

    delete: function () {
      var bookmark = [this.props.title, this.props.url]
      Util.deleteBookmark(bookmark);
      this.props.successMessage();
    },

    toggleStar: function () {
      this.state.starred ? this.setState({ starred: false }) : this.setState({ starred: true });
    },

    render: function () {
      var sectionName = this.state.starred ? "info group starred" : "info group";
      var buttonText = this.state.starred ? "Unstar" : "Star";
      return (
        <li className="bookmark group">
          <section className={sectionName}>
            <h2>{this.props.title}</h2>
            <h2><a href={this.props.url}>{this.props.url}</a></h2>
          </section>
          <button onClick={this.delete}>Delete</button>
          <button onClick={this.toggleStar}>{buttonText}</button>
        </li>
      )
    }
});

module.exports = BookmarkItem;
