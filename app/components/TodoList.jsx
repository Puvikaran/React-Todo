var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function(){
		var {todos} = this.props;
		var renderTodos = () =>{
			return todos.map((todos)=>{
				return(
					<Todo key={todos.id} {...todos}/>
					);
			});

		};
		return(
			<div>
				{renderTodos()}
			</div>
			);
	}
});

module.exports= TodoList;