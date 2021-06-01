'use strict';

let id = Date.now();

const form = document.forms['addTodo'];
form.addEventListener('submit', createTodo, false);

function createTodo(input) {
    event.preventDefault();
    console.log(input.value);

}
