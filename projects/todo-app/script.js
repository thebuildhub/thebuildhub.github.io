const listContainer = document.querySelector('[data-list]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteListBtn = document.querySelector('[data-delete-list-button]');
const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitle = document.querySelector('[data-list-title]');
const listCount = document.querySelector('[data-list-count]')
const taskContainer = document.querySelector('[data-task]');
const taskTemplate = document.querySelector('#task-template');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompletedTaskBtn = document.querySelector('[data-clear-completed-task-button]');


const LOCAL_STORAGE_LIST_KEY = 'task.list';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY))|| [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

    //RENDERING THE LIST HERE
// adding active state to item on click
listContainer.addEventListener('click',e =>{
    if(e.target.tagName.toLowerCase() === 'li'){
        selectedListId = e.target.dataset.ListId;
        saveAndRender();
    }
});

//updating checking and unchecking of task
taskContainer.addEventListener('click',e =>{
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedList = lists.find(list => list.id === selectedListId);
        const selectedTask = selectedList.tasks.find( task => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        save();
        renderTaskCount(selectedList);
    }
});

//clear completed task button
clearCompletedTaskBtn.addEventListener('click', e =>{
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    saveAndRender();
});

// delete list button action
deleteListBtn.addEventListener('click',e=>{
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null;
    saveAndRender();
});


newListForm.addEventListener('submit',e =>{
    e.preventDefault();
    const listName = newListInput.value;
    if(listName == null || listName === '') return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    saveAndRender();
})

//adding new task here
newTaskForm.addEventListener('submit',e =>{
    e.preventDefault();
    const taskName = newTaskInput.value;
    if(taskName == null || taskName === '') return;
    const task = createTask(taskName);
    newTaskInput.value = null;
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks.push(task);
    saveAndRender();
   });

function createList(name){
    return {
        id : Date.now().toString(),
        name : name,
        tasks : []
    }
}

function createTask(name){
    return {
        id :Date.now().toString(),
        name :name,
        complete :false
    };
}

// RENDERING THE TASK TAB FROM HERE 


function saveAndRender(){
    save();
    render();
}



function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY,selectedListId);
}



function render(){
    clearElement(listContainer);
    renderList();


    const selectedList = lists.find(list => list.id === selectedListId);
    if(selectedList == null){
        listDisplayContainer.style.display = 'none';
    }
    else{
        listDisplayContainer.style.display = '';
        listTitle.innerText = selectedList.name;
        renderTaskCount(selectedList);
        clearElement(taskContainer);
       
        renderTasks(selectedList);  
    } 
}

function renderTasks(selectedList){
    selectedList.tasks.forEach( task => {
        const taskElement = document.importNode(taskTemplate.content,true);
        const checkbox = taskElement.querySelector('input');
        checkbox.id = task.id;
        checkbox.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.name);
        taskContainer.appendChild(taskElement);
    });
}

function renderTaskCount(selectedList){
    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length;
    const taskString = incompleteTaskCount === 1 ? 'task' :'tasks';
    listCount.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}


function renderList(){
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.ListId = list.id;
        listElement.classList.add('list-item');
        listElement.innerText = list.name;
       
        if(list.id === selectedListId){
            listElement.classList.add('active-item');
        }
        listContainer.appendChild(listElement);
    });
}
function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

render();

//for info button
const infoBtn = document.querySelector('.info-btn');
const infoContent = document.querySelector('.info-content');
const infoHideBtn = document.querySelector('.info-hide-btn');

infoBtn.addEventListener('click',e =>{
    infoContent.style.display = 'block';
    infoHideBtn.style.display = 'block'; 
});
infoHideBtn.addEventListener('click',e =>{
    infoContent.style.display = 'none';
    infoHideBtn.style.display = 'none';
});