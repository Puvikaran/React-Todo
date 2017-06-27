var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState:function(){
		return{
				todos : [
				{
					id : 1,
					text : 'Walk the Dog'
				},
				{
					id : 2,
					text : 'Clean the Yard'
				},
				{
					id : 3,
					text : 'Send the mail'
				},
				{
					id : 4,
					text : 'Play video Game'
				},
				{
					id : 5,
					text : 'Read the Bible'
				}
			]
		};
	},
	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoList todos={todos}/>
			</div>
			);
	}
});

module.exports = TodoApp;