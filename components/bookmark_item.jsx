var React = require('react');
var ReactDOM = require('react-dom');
var BookmarkStore = require('../store/bookmark_store.js');
var BookmarkActions = require('../actions/bookmark_actions.js');
var Util = require('../util/util.js');

var BookmarkItem = React.createClass({

    delete: function () {
      var bookmark = [this.props.title, this.props.url]
      Util.deleteBookmark(bookmark);
      this.props.successMessage();
    },

    render: function () {
      return (
        <li className="bookmark group">
          <section className="info group">
            <h2>{this.props.title}</h2>
            <h2><a href={this.props.url}>{this.props.url}</a></h2>
          </section>
          <button onClick={this.delete}>Delete</button>
        </li>
      )
    }
});

module.exports = BookmarkItem;
