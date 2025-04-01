const addButton = document.querySelector('#add_button');
addButton.addEventListener('click', async () => {
    const input = document.querySelector('#todo_input');
    const newTitle = input.value;
    console.log('add this item', newTitle);

    await addTodo(newTitle);

    const todoList = await getTodos();
    updateList(todoList);
})

const todoListItems = document.querySelectorAll('#todo_list li');
todoListItems.forEach(todoListItem => {
    const itemElement = todoListItem.querySelector('.item');
    const id = todoListItem.getAttribute('data-id');
    itemElement.addEventListener('click', async () => {

        const completed = todoListItem.getAttribute('data-completed') === 'false' ? 'true' : 'false';
        console.log('updating', id, completed);
        await updateTodo(id, completed);

        const todoList = await getTodos();
        updateList(todoList);
    })

    const deleteButtonElement = todoListItem.querySelector('.delete_button');
    deleteButtonElement.addEventListener('click', async () => {
        await deleteTodo(id);

        const todoList = await getTodos();
        updateList(todoList);
    })

})

function updateList(todoList) {
    const todoListElement = document.querySelector('#todo_list');
    todoListElement.innerHTML = '';

    todoList.forEach(item => {
        const liElement = document.createElement('li');
        liElement.setAttribute('data-id', item.id);
        liElement.setAttribute('data-completed', item.completed);

        const spanElement = document.createElement('span');
        spanElement.innerText = item.title;
        spanElement.classList.add('item')

        spanElement.addEventListener('click', async () => {
            const completed = liElement.getAttribute('data-completed') === 'false' ? 'true' : 'false';
            console.log('updating', item.id, completed);
            await updateTodo(item.id, completed);

            const todoList = await getTodos();
            updateList(todoList);
        })

        liElement.appendChild(spanElement);

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete_button');
        deleteButtonElement.innerText = 'X';
        deleteButtonElement.addEventListener('click', async () => {
            await deleteTodo(item.id);

            const todoList = await getTodos();
            updateList(todoList);
        })
        liElement.appendChild(deleteButtonElement);

        todoListElement.appendChild(liElement);

    })
}

async function getTodos() {
    const response = await fetch('/todos');
    const data = await response.json();
    return data;
}

async function getTodosById(id) {
    const response = await fetch('/todos/' + id);
    const data = await response.json();
    console.log(data);
}

async function addTodo(title) {
    const response = await fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });
    return response;
}

async function updateTodo(id, completed) {
    const response = await fetch('/todos/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: completed
        })
    });
}

async function deleteTodo(id) {
    const response = await fetch('/todos/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
}