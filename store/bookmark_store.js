var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');
var BookmarkConstants = require('../constants/bookmark_constants.js');

var BookmarkStore = new Store(Dispatcher);
var _bookmarks = [];

BookmarkStore.all = function () {
  return _bookmarks.slice();
};

BookmarkStore.resetBookmarks = function () {
  _bookmarks = [];
};

BookmarkStore.addBookmark = function (bookmark) {
  _bookmarks.push(bookmark);
};

BookmarkStore.deleteBookmark = function (bookmark) {
  for (var i = 0; i < _bookmarks.length; i++) {
    if (_bookmarks[i][0] == bookmark[0] && _bookmarks[i][1] == bookmark[1]) {
      _bookmarks = _bookmarks.slice(0, i).concat(_bookmarks.slice(i + 1));
    }
  }
};

BookmarkStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BookmarkConstants.ALL_BOOKMARKS_RECEIVED:
      BookmarkStore.resetBookmarks(payload.bookmarks);
      BookmarkStore.__emitChange();
      break;
    case BookmarkConstants.SINGLE_BOOKMARK_RECEIVED:
      BookmarkStore.addBookmark(payload.bookmark);
      BookmarkStore.__emitChange();
      break;
    case BookmarkConstants.BOOKMARK_DELETED:
      BookmarkStore.deleteBookmark(payload.bookmark);
      BookmarkStore.__emitChange();
      break;
  }
};

module.exports = BookmarkStore;
