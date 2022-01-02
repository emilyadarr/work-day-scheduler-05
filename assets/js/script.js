var currentDay = moment().format("dddd, MMMM D, YYYY");
var tasks = {};

// display current day
$("#currentDay").replaceWith(currentDay);

// load tasks from local storage
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

  // append tasks copy to the correct time slot
  $.each(tasks, function(list, currentValue) {
      $("#row-" + list).append(currentValue);
  });
  auditTime();
};

// save tasks function - setting tasks array
var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// when button is clicked, update tasks array with new values
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

// audit time to update hour styling
var auditTime = function() {
  var currentHour = moment().format("kk");
  $(".time-block").each(function (){
    var timeDiv = $(this).attr("id");
  
    if (currentHour === timeDiv) {
      $(this).children("textarea").removeClass("future past");
      $(this).children("textarea").addClass("present");
    }
    else if (currentHour > timeDiv) {
      $(this).children("textarea").removeClass("present future");
      $(this).children("textarea").addClass("past");
    }
    else if (currentHour < timeDiv) {
      $(this).children("textarea").removeClass("present past");
      $(this).children("textarea").addClass("future");
    }
  });
};

// audit time every 3 minutes
setInterval(function() {
  auditTime();
},(1000*6)*3);

// load tasks for the first time
loadTasks();