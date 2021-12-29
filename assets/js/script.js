var currentDay = moment().format("dddd, MMMM D YYYY");

$("#currentDay").replaceWith(currentDay);

var times = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

var formEl = document.getElementById("form");

// create rows for time slots
for (var i=0; i < times.length; i++) {
  const rowEl = document.createElement("div");
  rowEl.setAttribute("class", "row form-row")
  const timeCol = document.createElement("div");
  timeCol.setAttribute("class", "col-2 time");
  timeCol.textContent = times[i];
  const inputCol = document.createElement("textarea");
  inputCol.setAttribute("class", "col input-text")
  const formBtn = document.createElement("button");
  formBtn.setAttribute("class", "btn saveBtn");
  formBtn.innerHTML = "<span class='oi oi-hard-drive'></span>";
  formEl.appendChild(rowEl);
  rowEl.append(timeCol, inputCol, formBtn);
}

//CHECK THIS
var tasks = {};
// something wrong with save tasks - check tasks var
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".input-text").on("click", "textarea", function() {
  var text = $(this)
    .text()
    .trim();
  //replace textarea with new input
  var textInput = $("<textarea>").addClass("col input-text").val(text);
  $(this).replaceWith(textInput);

  saveTasks();
});

$(".saveBtn").click(function() {
  var taskInput = $(".input-text").val();

  if (taskInput) {
    tasks.push(taskInput)
  };

  saveTasks();
});

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

loadTasks();

// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist