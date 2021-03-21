const inputField = document.querySelector('.input-task');
const form = document.querySelector('.form');
const searchInput = document.querySelector('.filter');
const tasks = document.querySelector('.tasks');
const removeAllBtn = document.querySelector('.clear-task');
const msgBox = document.querySelector('.msg');

//all evenlistener
form.addEventListener('submit', addTask);
tasks.addEventListener('click', removeItem);
removeAllBtn.addEventListener('click', removeAll);
searchInput.addEventListener('keyup', searchTask);


function addTask(e){
    if(inputField.value === ''){
        alert('empty task')
    }
    else{
        //create li
        const li = document.createElement('li');
        li.classList = 'task';
        //add text to new task
        li.appendChild(document.createTextNode(inputField.value));

        //create div
        const icons = document.createElement('div');
        icons.classList = 'remove';
        //createremove link
        const remove = document.createElement('a');
        remove.classList = 'remove';
        remove.innerText = '🛑';
        const done = document.createElement('a');
        done.classList = 'done';
        done.innerText = '✅';


        //append icons to the div
        icons.appendChild(remove);
        icons.appendChild(done);
        

        //append div  in TO li
        li.appendChild(icons)

         //append li  in TO ul
         tasks.appendChild(li)
         inputField.value = '';
         msgBox.style.display = 'none';

        
        
    }
    e.preventDefault();
}

//delete task
function removeItem(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
    else if (e.target.classList.contains('done')){
        e.target.parentElement.parentElement.style.backgroud = '#9DD9D2';
        e.target.parentElement.parentElement.style.color = 'red';
}}

//delete all tasks

function removeAll(e){
    if(confirm('Are you sure')){
        while(tasks.firstChild){
            tasks.removeChild(tasks.firstChild);
        }
    }
    
}

//search 
function searchTask(e){
    const textInput = e.target.value.tolowerCase();

    document.querySelectorAll('.task').forEach(
        function(items){
            const item = items.firstChild.textContent;
            if(item.tolowerCase().indexOf(textInput) != -1 ){
                items.style.display = 'block';
            }else{
                items.style.display = 'none';

            }
        }
    )
    
}
