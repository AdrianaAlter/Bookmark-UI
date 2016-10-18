var React = require('react');
var ReactDOM = require('react-dom');
var BookmarkStore = require('../store/bookmark_store.js');
var BookmarkActions = require('../actions/bookmark_actions.js');
var Util = require('../util/util.js');
var BookmarkItem = require('./bookmark_item.jsx');

var List = React.createClass({

  getInitialState: function () {
      return {bookmarks: BookmarkStore.all(), message: ""};
  },

  componentDidMount() {
    this.listener = BookmarkStore.addListener(this._onChange);
    Util.fetchAllBookmarks();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({ bookmarks: BookmarkStore.all() });
  },

  successMessage: function () {
    this.setState({ message: "Your bookmark was successfully deleted!" });
    var self = this;
    setTimeout(function() { self.setState({ message: "" }) }, 2000);
  },

  render: function () {

    var self = this;
    var bookmarkList = this.state.bookmarks;
    var bookmarks = bookmarkList.map(function(item){
      return (
        <BookmarkItem key={bookmarkList.indexOf(item)} successMessage={self.successMessage} title={item[0]} url={item[1]} />
      )
    });

    return <div className="list">
              <h1>BOOKMARKS</h1>
              <section className="message success">{this.state.message}</section>
              <ul>{bookmarks}</ul>
           </div>
  }
});

module.exports = List;
