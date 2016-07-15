var BookmarkConstants = require('../constants/bookmark_constants.js');
var Dispatcher = require('../dispatcher.js');

var BookmarkActions = {

  receiveAllBookmarks: function (bookmarks) {
    Dispatcher.dispatch({
      actionType: BookmarkConstants.ALL_BOOKMARKS_RECEIVED,
      bookmarks: bookmarks
    });
  },

  receiveSingleBookmark: function (bookmark) {
    Dispatcher.dispatch({
      actionType: BookmarkConstants.SINGLE_BOOKMARK_RECEIVED,
      bookmark: bookmark
    });
  },

  deleteBookmark: function (bookmark) {
    Dispatcher.dispatch({
      actionType: BookmarkConstants.BOOKMARK_DELETED,
      bookmark: bookmark
    });
  }
};

module.exports = BookmarkActions;
