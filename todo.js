let todoInput = document.getElementById("input");
let addButton = document.getElementById("addContent");
let todoList = document.getElementById("todoItem");

let removeAll = document.getElementById("remove");
let editNewTodo = document.getElementById("editNew");

let noTodo = document.getElementById("norecords")
let todoContent = [];
displayTodos();
let timeId=null;
let lenTodo = null;
let newTodo =null;

addButton.onclick = function() {
    let todoText = todoInput.value;
    if (todoText !== "") {
        timeId = new Date().getTime();
        newTodo ={
            id:timeId,
            value:todoText
        }
        todoContent=[...todoContent,newTodo];
        lenTodo=todoContent.length;
        displayTodos();
    }else{
        alert("Enter Valid Text")
    }
}

function displayTodos(){
    if(todoContent.length == 0){
        removeAll.style.display = 'none'
    }
    else{
        removeAll.style.display = 'block'
        todoList.textContent="";
        for (let i=0;todoContent.length;i++){
            let todo = todoContent[i]
            let newTodo = document.createElement("li");
            newTodo.classList.add("todo-item");
            newTodo.textContent= todo.value;
            const divContainer = document.createElement("div");
            divContainer.classList.add("container");
            const deleteButton = document.createElement("button");
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("delete-button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.onclick = function() {
                deleteTodo(i);
                console.log("jsdf",todoContent.length)
                if (todoContent.length==0){
                    noTodo.textContent="No Records Found"
                    divContainer.style.display="none";
                    newTodo.style.display="none";
                    addButton.classList.remove("edit");
                    editNewTodo.classList.add("edit");
                    displayTodos()
                }
                
            };
            editButton.onclick=function(){
                editTodo(i);
            }
            divContainer.appendChild(editButton);
            divContainer.appendChild(deleteButton);
            newTodo.appendChild(divContainer);
            todoList.appendChild(newTodo);
            todoInput.value = "";
            
            let norecord = document.getElementById("norecords");
            norecord.textContent="";

            addButton.textContent="Add";
            addButton.classList.remove("delete-button");
        }
    }
   
}

function deleteTodo(index){
    todoContent.splice(index,1);
    console.log("del",todoContent);
    addButton.classList.remove("edit");
    editNewTodo.classList.add("edit");
    displayTodos();
}

function editTodo(index){
    let edit = todoContent[index]
    todoInput.value = edit.value;
    editNewTodo.classList.remove("edit");
    addButton.classList.add("edit");
    editNewTodo.onclick=function(){
        let newInput = todoInput.value;
        if (newInput!==""){
            todoContent[index].value=newInput
            addButton.classList.remove("edit");
            editNewTodo.classList.add("edit");
            displayTodos();
        }else{
            alert("Enter Valid Text")
        }
    }
    
} 

removeAll.onclick=function(){
    todoContent=null;
    noTodo.textContent="No Records Found";
    noTodo.classList.add("remove-all")
    removeAll.style.display="none";
    todoList.classList.add("edit");
    addButton.classList.remove("edit");
    editNewTodo.classList.add("edit");
    todoInput.value="";
    displayTodos();
}

console.log("con",todoContent);

