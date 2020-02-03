

//Calculate Tip
function calculateTip() {
  var billCost = document.getElementById("billcost").value;
  var quality = document.getElementById("quality").value;
  var peopleAmount = document.getElementById("peopleamt").value;


  //validate input
  if (billCost === "" || quality == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (peopleAmount === "" || peopleAmount <= 1) {
    peopleAmount = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billCost * quality) / peopleAmount;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculatet").onclick = function() {
  calculateTip();

};
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem );
function addToDoItem() {
  alert("Add button clicked!");
}
var clearButton = document.getElementById("clear-completed-button")
clearButton.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems() {
  alert("Items cleared")
}
var emptyButton = document.getElementById("empty-button")
emptyButton.addEventListener("click", emptylist );
function emptylist() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
  alert("list emptied");
}
var saveButton = document.getElementById("save-button")
saveButton.addEventListener("click", save );
function save() {
   var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));

  alert("list saved");
}
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}
function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}
    function emptyList() {
        var toDoItems = toDoList.children;
        while (toDoItems.length > 0) {
            toDoItems.item(0).remove();
        }
    }
    var myArray = [];{
  myArray.push("something to store");
  myArray.push("something else to store");
  alert(myArray[0]);
}
