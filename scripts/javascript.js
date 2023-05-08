const todoList = [
    {
        name: 'make dinner', 
        dueDate:'2022-04/27',
        time: '16:25'
    },
    {
        name: 'wash dishes',
        dueDate: '2022-04-27',
        time: '14:25'
    }
];

    renderTodoList();
    

function saveTodos(){
    const store = localStorage.setItem('todoList',JSON.stringify(todoList));
    console.log(store);
}


const savedTodos = JSON.parse(localStorage.getItem('todoList'));
console.log(savedTodos);

function renderTodoList(){
        let todoListHTML = '';
        for(let i = 0; i < todoList.length; i++){
            const todoObject = todoList[i];
            // const name = todoObject.name;
            // const dueDate = todoObject.dueDate;
            const { name, dueDate, time } = todoObject;
            const html = `
                <div>${name}</div>
                 <div>${dueDate}</div> 
                 <div>${time}</div>
                 <button onclick='
                todoList.splice(${i}, 1);
                renderTodoList();
                ' class="delete-todo-button">Delete</button>
                `;
            todoListHTML += html;
}
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
                
        }

        
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    const timeInputElement = document.querySelector('.js-time-input');
    const time = timeInputElement.value;
    todoList.push({
        // name: name, 
        // dueDate: dueDate
        name, dueDate, time
    });
    inputElement.value = '';
    dateInputElement.value = '';
    timeInputElement.value = '';
    renderTodoList(); 
    saveTodos();
}