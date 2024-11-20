const axios = require('axios');

exports.ToDoList = async (content) => {
    try {
        const response = await axios.get('http://localhost:3000/api/todos');
        const todos = response.data;

        const todoItems = todos.map(todo => `
            <div class="mt-4 flex justify-between todo-item ${todo.completed ? 'line-through' : ''}">
                <p class="overflow-hidden line-clamp-1">${todo.task}</p>
                <div class="flex gap-2 items-center">
					<button onclick="openEditModal(${todo.id}, '${todo.task}')" class="underline text-amber-500">Edit</button>
					<form action="/api/todos/delete/${todo.id}" method="POST">
						<button type="submit" class="underline text-rose-500">Delete</button>
					</form>
				</div>
            </div>
        `).join('');

        const addTodoForm = `
            <div class="mt-4">
                <h3 class="text-xl">Add New Task</h3>
                <form action="/api/todos/created" method="POST" class="flex gap-2 items-center mt-2">
                    <input type="text" id="taskInput" name="task" class="w-full p-2 rounded bg-neutral-900 border border-neutral-600 focus:outline-none" placeholder="Enter new task" required />
                    <button type="submit" class="px-4 py-2 rounded bg-pink-700 hover:bg-pink-600">Add</button>
                </form>
            </div>
        `;

        const editModal = `
            <div id="editModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center hidden">
                <div class="bg-neutral-900 p-6 rounded-lg w-full max-w-xl">
                    <h3 class="text-xl">Edit Task</h3>
                    <form action="/api/todos/edit" method="POST" id="editTodoForm">
                        <input type="hidden" id="editTodoId" name="id" />
                        <input type="text" id="editTaskInput" name="task" class="w-full p-2 rounded bg-neutral-700 border border-neutral-600 focus:outline-none mt-2" required />
                        <div class="flex gap-2 items-center mt-6">
							<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Update Task</button>
							<button type="button" onclick="closeEditModal()" class="rounded bg-gray-500 text-white  px-4 py-2">Cancel</button>
						</div>
				   </form>
                </div>
            </div>

            <script>
                function openEditModal(id, task) {
                    document.getElementById('editTodoId').value = id;
                    document.getElementById('editTaskInput').value = task;
                    document.getElementById('editTodoForm').action = '/api/todos/edit/' + id;
                    document.getElementById('editModal').classList.remove('hidden');
                }
                function closeEditModal() {
                    document.getElementById('editModal').classList.add('hidden');
                }
            </script>
        `;

        content = content.replace(/~ToDo/, `${addTodoForm}${todoItems}${editModal}`);
        return content;

    } catch (error) {
        console.error('Error fetching to-do list:', error);
        throw error;
    }
};