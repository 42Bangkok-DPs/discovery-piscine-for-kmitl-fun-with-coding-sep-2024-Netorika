document.addEventListener('DOMContentLoaded', function() {
	const ftList = document.getElementById('ft_list');
	const newTodoButton = document.getElementById('newTodo');

	const todos = JSON.parse(GetCookie('todos') || '[]');
	todos.forEach(CreatTodo);

	newTodoButton.addEventListener('click', function() {
		const todo = prompt('Enter a new TO DO:');
		if (todo && todo.trim()) {
			todos.unshift(todo);
			CreatTodo(todo);
			SaveTodos();
		}
	});

	function CreatTodo(todo) {
		const div = document.createElement('div');
		div.textContent = todo;
		div.className = 'todo-item';
		div.addEventListener('click', function() {
			if (confirm('Do you want to remove this TO DO?')) {
				ftList.removeChild(div);
				todos.splice(todos.indexOf(todo), 1);
				SaveTodos();
			}
		});
		ftList.insertBefore(div, ftList.firstChild);
	}

	function SaveTodos() {
		SetCookie('todos', JSON.stringify(todos));
	}

	function SetCookie(name, value) {
		document.cookie = name + '=' + encodeURIComponent(value);
	}

	function GetCookie(name) {
		return document.cookie.split('; ').reduce((i, v) => {
			const parts = v.split('=');
			return parts[0] === name ? decodeURIComponent(parts[1]) : i;
		}, '');
	}
});