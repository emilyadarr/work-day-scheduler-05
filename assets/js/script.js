var currentDay = moment().format("dddd, MMMM D YYYY");

$("#currentDay").replaceWith(currentDay);

var tasks = {};

var createTask = function(taskText, taskList) {
  var taskNew = $("<textarea>")
    .addClass("col input-text")
    .text(taskText);

  $("#row-" + taskList).append(taskNew);
};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new array
  if (!tasks) {
    tasks = {
      nineAM: "",
      tenAM: "",
      elevenAM: "",
      twelvePM: "",
      onePM: "",
      twoPM: "",
      threePM: "",
      fourPM: "",
      fivePM: ""
    };
  }

  $.each(tasks, function(list, currentValue) {
    console.log(list, currentValue);
      $("#row-" + list).append(currentValue);
  });
};


var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// textarea was clicked
// $(".input-text").on("click", "textarea", function() {
//   var text = $(this)
//     .text()
//     .trim();
//   //replace textarea with new input
//   var textInput = $("<textarea>").addClass("col input-text").val(text);
//   $(this).replaceWith(textInput);

//   textInput.trigger("focus");
//   //saveTasks();
// });

// $(".input-text").on("blur", "textarea", function() {
//   var text = $(this).val();

//   var status = $(this)
//     .closest(".time-block")
//     .attr("id")
//     .replace("row-", "");
//   var index = $(this)
//     .closest(".input-text")
//     .index();

//   tasks[status][index].text = text;
//   saveTasks();

//   var taskUpdate = $("<textarea>")
//     .addClass("col input-text")
//     .text(text);

//   $(this).replaceWith(taskUpdate);

// });

$(".saveBtn").click(function() {
  var taskInput9 = document.getElementById("row-nineAM").value;
  tasks.nineAM = taskInput9;

  var taskInput10 = document.getElementById("row-tenAM").value;
  tasks.tenAM = taskInput10;
  
  var taskInput11 = document.getElementById("row-elevenAM").value;
  tasks.elevenAM = taskInput11;
  
  var taskInput12 = document.getElementById("row-twelvePM").value;
  tasks.twelvePM = taskInput12;

  var taskInput1 = document.getElementById("row-onePM").value;
  tasks.onePM = taskInput1;

  var taskInput2 = document.getElementById("row-twoPM").value;
  tasks.twoPM = taskInput2;

  var taskInput3 = document.getElementById("row-threePM").value;
  tasks.threePM = taskInput3;

  var taskInput4 = document.getElementById("row-fourPM").value;
  tasks.fourPM = taskInput4;

  var taskInput5 = document.getElementById("row-fivePM").value;
  tasks.fivePM = taskInput5;


 saveTasks();
});

// LEFT OFF HERE - need to figure out how to alter time slots
var auditTime = function() {
  var textArea = $(".input-text");
  var scheduleTime = $(".time-block").find("p").text().trim();
  console.log(scheduleTime);

  var currentHour = moment().format("h:00 A");

  if (currentHour == scheduleTime) {
    textArea.addClass(".present");
  }

  // $(".time-block").each(function() {
  //   var scheduleTime = $(this).attr("id");
  //   console.log(scheduleTime);
  // })
  
  //get current time
  // var time = moment().format("h:00 A");
  // console.log(time);

  // if (time === scheduleTime) {
  //   textArea.addClass(".present");
  // }
  // else if (time.isAfter(scheduleTime)) {
  //   textArea.addClass(".past");
  // }
  // else {
  //   textArea.addClass(".future");
  // }

}
//auditTime();


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