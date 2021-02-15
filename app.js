
const form = document.querySelector('#Add-NewList');
const input = document.querySelector('#inputText');
const check = document.querySelector('#checklist');
let list = document.querySelector('ul');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')):[];

//localStorage.setItem('items', JSON.stringify(itemsArray));
// var data = JSON.parse(localStorage.getItem('items'));
// localStorage(data) = JSON.stringify(data);

check.addEventListener('click',function(e){

    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    //console.log(input.value);
    
  const newCheckList = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.innerText ='Remove';
  newCheckList.innerText = input.value;
  newCheckList.appendChild(removeButton);
  check.appendChild(newCheckList);
  itemsArray.push(input.value);
  localStorage.setItem('items' , JSON.stringify(itemsArray));
  input.value ='';
});
