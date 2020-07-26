var list = document.getElementById('list');

function addItem() {
    var list_Item = document.getElementById('to_do');


    // --- create li tag with text node 
    var li = document.createElement('li');
    var liText = document.createTextNode(to_do.value);
    li.appendChild(liText);


    // --- create delete button    
    var delBtn = document.createElement('button');
    var delText = document.createTextNode('DELETE');
    delBtn.setAttribute('class', 'btn')
    delBtn.setAttribute('onclick', 'deleteItem(this)')
    delBtn.appendChild(delText);


    // --- create edit button
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('EDIT');
    editBtn.setAttribute('class', 'btn1');
    editBtn.setAttribute('onclick', 'editItem(this)')
    editBtn.appendChild(editText)

    // --- create line break
    var hr = document.createElement('hr');


    li.appendChild(delBtn);
    li.appendChild(editBtn);
    li.appendChild(hr);


    list.appendChild(li);

    to_do.value = ""
    console.log(li);
}



function deleteItem(target) {
    target.parentNode.remove();
}


function editItem(target) {
    var val = target.parentNode.firstChild.nodeValue;
    var editValue = prompt('Update Task', val);

    target.parentNode.firstChild.nodeValue = editValue
}


function del_all() {
    list.innerHTML = '';
}
