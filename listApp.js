const addButton = document.getElementById('addButton');
const taskBar = document.getElementById('task-bar');
const listedTask = document.getElementById('listedTask');

addButton.addEventListener('click', function() {
    const taskText = taskBar.value;
    if(taskText === ""){
        alert("Please Add Task First! ");
    }else {
        const newTask = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'check-task';
        checkBox.classList.add("checkTask");
        // newTask.appendChild(checkBox);




        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        // newTask.appendChild(taskContent);


        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.classList.add("listButton");
        // newTask.appendChild(deleteBtn);
        

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
        editBtn.className = 'editBtn';
        editBtn.classList.add("listButton");
        // newTask.appendChild(editBtn);


        // some spcial
        const div1= document.createElement("div");
        div1.classList.add("divClass1");
        div1.appendChild(checkBox);
        div1.appendChild(taskContent);

        const div2=document.createElement("div");
        div2.classList.add("divClass2");
        div2.appendChild(deleteBtn);
        div2.appendChild(editBtn);

        newTask.appendChild(div1);
        newTask.appendChild(div2);



        // --------

        newTask.classList.add("newTask");

        listedTask.appendChild(newTask);

        taskBar.value = '';
        taskBar.focus();

        checkBox.addEventListener('change', function() {
            if (checkBox.checked) {
                taskContent.style.textDecoration = 'line-through';
            } else {
                taskContent.style.textDecoration = 'none';
            }
        });

        deleteBtn.addEventListener('click', function() {
            listedTask.removeChild(newTask);
        });

        editBtn.addEventListener('click', function() {
            const newText = prompt('Edit your task:', taskContent.textContent);
            if (newText) {
                taskContent.textContent = newText;
            }
        });
    }
});