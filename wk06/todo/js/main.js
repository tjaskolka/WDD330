'use strict';

const addItems = document.querySelector('.addTodo');
const itemsList = document.querySelector('.list');
const items = JSON.parse(localStorage.getItem('items')) || [];
const undone = document.querySelector('#undone');
let left = items.filter(item => (item.done));

document.getElementById('total').innerHTML = items.length - left.length;

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(list = [], todoList) {
  todoList.innerHTML = list.map((list, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${list.done ? 'checked' : ''} />
        <label for="item${i}">${list.text}</label>
      </li>
    `;
  }).join('');
}

function undoneList(items) {
    items = items.filter(item => (!item.done));
    let undoneList = document.querySelector('.list');
    undoneList.innerHTML = items.map((list, i) => {
        return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${list.done ? 'checked' : ''} />
          <label for="item${i}">${list.text}</label>
        </li>
      `;     
    }).join('');
    populateList(items, undoneList);
    console.log(undoneList.innerHTML);
}

function doneList(items) {
    items = items.filter(item => (item.done));

}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
undone.addEventListener('click', undoneList(items, itemsList));

populateList(items, itemsList);
