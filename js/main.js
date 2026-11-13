////to do list


var result = document.querySelector("#todo-list");

//adding the task to the list
document.addEventListener("submit", function (event) {
  var task = document.querySelector("#todo-input").value;
  if (task == "") {
    alert("Please enter a task");
    event.preventDefault();
    saveData();
  } else {
    var li = document.createElement("li");
    li.innerHTML = task;
    li.setAttribute("class",  "btn-outline theme-success form-control text-start w-75 d-flex justify-content-between align-items-center m-auto mb-2");
    result.appendChild(li);

    var span = document.createElement("span");
    span.innerHTML = '<i style="font-size: 20px; " class="fa-regular fa-trash-can"></i>';
    span.setAttribute("style", "cursor:pointer; color:red;");
    li.appendChild(span);
    document.querySelector("#todo-input").value = "";
    event.preventDefault();
    saveData();
  }
});


//deleting the task and marking it as completed
result.addEventListener("click", function (event) {
  if (event.target.closest("span")) {
    event.target.closest("li").remove();
    saveData();
  } 
  else if (event.target.tagName === "LI") {
   event.target.classList.toggle("text-decoration-line-through");
   saveData();
  }
});


//saving the data to local storage
function saveData() {
  localStorage.setItem("data", result.innerHTML);
} 
//retrieving the data from local storage
function showTask() {
  result.innerHTML = localStorage.getItem("data");
}
showTask();
