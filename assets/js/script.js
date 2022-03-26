// NOTES
// be able to show current date
// time of day is constant, so when task is past time turns red
// able to select and add
// save button save to local storage

var taskFormEl = $('#task-form');
var taskListEl = $('#task-list');

// CURRENT DATE FUNCTION


// ADD TASK FUNCTION
// function addTask(event) {
//     event.preventDefault();
  
//     var shoppingItem = $('input[name="shopping-input"]').val();
  
//     if (!shoppingItem) {
//       console.log('No shopping item filled out in form!');
//       return;
//     }
  
//     var shoppingListItemEl = $(
//       '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//     );
//     shoppingListItemEl.text(shoppingItem);
  
//     // add delete button to remove shopping list item
//     shoppingListItemEl.append(
//       '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//     );
  
//     // print to the page
//     shoppingListEl.append(shoppingListItemEl);
  
//     // clear the form input element
//     $('input[name="shopping-input"]').val('');
// }

// TIMEBLOCK TIME FUNCTION (CHECK)


// SAVE BUTTON FUNCTION
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// save button in modal was clicked
// $("#task-form-modal .btn-save").click(function() {
//     // get form values
//     var taskText = $("#modalTaskDescription").val();
//     var taskDate = $("#modalDueDate").val();
  
//     if (taskText && taskDate) {
//       createTask(taskText, taskDate, "toDo");
  
//       // close modal
//       $("#task-form-modal").modal("hide");
  
//       // save in tasks array
//       tasks.toDo.push({
//         text: taskText,
//         date: taskDate
//       });
  
//       saveTasks();
//     }
//   });

  // task text was clicked
// $(".list-group").on("click", "p", function() {
//     // get current text of p element
//     var text = $(this)
//       .text()
//       .trim();
  
//     // replace p element with a new textarea
//     var textInput = $("<textarea>").addClass("form-control").val(text);
//     $(this).replaceWith(textInput);
  
//     // auto focus new element
//     textInput.trigger("focus");
//   });

shoppingFormEl.on('submit', handleFormSubmit);