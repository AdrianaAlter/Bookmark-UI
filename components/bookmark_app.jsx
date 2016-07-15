var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.jsx');
var Form = require('./form.jsx');

var App = React.createClass({

  render: function(){
    return <div>
            <List />
            <Form />
          </div>
    }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById("main"));
});
