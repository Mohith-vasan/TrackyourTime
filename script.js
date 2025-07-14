
var secondelapsed=0;
var interval=null;
var time=document.getElementById("second");

function padstart(value) {
    return String(value).padStart(2,"0")
    
}

function settime() {
    const minute=Math.floor(secondelapsed/60);
    const seconds=secondelapsed%60
    time.innerHTML=`${padstart(minute)}:${padstart(seconds)}`;
    
}

function timer() {
    secondelapsed++;  
    settime();  
}

function startClock() {
    if (interval) stopClock();
    interval=setInterval(timer,1000);}

function stopClock() {
    clearInterval(interval);   }

function resetClock() {
    stopClock();
    secondelapsed=0;
    settime();
    
}


//todo list

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert("Please enter a task.");
    return;
  }
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText; 
  span.onclick = function () {
    toggleComplete(this); 
  };
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete X'; 
  deleteBtn.className = 'delete-btn'; 
  deleteBtn.onclick = function () {
    deleteTask(this);
  };
  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
function toggleComplete(span) {
  span.parentElement.classList.toggle('completed');
}
function deleteTask(button) {
  button.parentElement.remove();
}