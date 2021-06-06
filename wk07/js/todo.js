const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = new FormData();
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(form.action, {
        method: form.method,
        header: headers,
        body: data
    })

    fetch(request)
    .then(response => response.json())
    .then(task => console.log(`Task save with an id of ${task.id}`))
    .catch(error => console.log('There was an error:', error))
}