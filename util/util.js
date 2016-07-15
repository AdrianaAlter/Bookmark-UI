var BookmarkActions = require('../actions/bookmark_actions.js');

Util = {

  fetchAllBookmarks: function (bookmarks) {
    BookmarkActions.receiveAllBookmarks(bookmarks);
  },

  createNewBookmark: function (bookmark) {
    BookmarkActions.receiveSingleBookmark(bookmark);
  },

  deleteBookmark: function (bookmark) {
    BookmarkActions.deleteBookmark(bookmark);
  }

};

module.exports = Util;
