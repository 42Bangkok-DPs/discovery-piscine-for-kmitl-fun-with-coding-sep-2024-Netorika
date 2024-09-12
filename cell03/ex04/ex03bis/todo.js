$(document).ready(function() {
	const $ftList = $('#ft_list');
	let todos = JSON.parse(GetCookie('todos') || '[]');

	function CreateTodo(todo) {
		const $div = $('<div>').text(todo).addClass('todo-item');
		$div.click(function() {
			if (confirm('Do you want to remove this TO DO?')) {
				$(this).remove();
				todos.splice(todos.indexOf(todo), 1);
				SaveTodos();
			}
		});
		$ftList.prepend($div);
	}

	todos.forEach(CreateTodo);

	$('#newTodo').click(function() {
		const todo = prompt('Enter a new TO DO:');
		if (todo && todo.trim()) {
			todos.unshift(todo);
			CreateTodo(todo);
			SaveTodos();
		}
	});

	function SaveTodos() {
		SetCookie('todos', JSON.stringify(todos), 365);
	}

	function SetCookie(name, value, days) {
		const expires = new Date(Date.now() + days * 864e5).toUTCString();
		document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
	}

	function GetCookie(name) {
		return document.cookie.split('; ').reduce((r, v) => {
			const parts = v.split('=');
			return parts[0] === name ? decodeURIComponent(parts[1]) : r;
		}, '');
	}
});