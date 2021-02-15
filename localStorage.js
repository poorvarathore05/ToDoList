
const form = document.getElementById('Add-NewList');
const TodoList = document.getElementById('checklist');
const input = document.getElementById('inputText');

let list = document.querySelector('ul');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')):[];

// localStorage.setItem('items',JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'))


for(let item in itemsArray){

    let todoItem = document.createElement('li');
    todoItem.innerText = itemsArray[e];
    list.append(todoItem);
}




