let submitAssignment = document.getElementById("submitAssignment");
let submissionDate = document.querySelector(".dateOfSubmission");
let deadlineISO = submissionDate.getAttribute("datetime");
let deadline = new Date(deadlineISO).getTime();
let submit = document.getElementById("submit");

function checkDeadline() {
  var currentTime = new Date().getTime();
  if (currentTime > deadline) {
    document
      .getElementById("fileSubmissionForm")
      .querySelectorAll("input, select, textarea, button")
      .forEach(function (elem) {
        elem.disabled = true;
      });
    alert("Submission period has ended.");
  }
}

submit.addEventListener("mouseenter", checkDeadline);

let timerInterval = setInterval(function () {
  var currentTime = new Date().getTime();
  var remainingTime = deadline - currentTime;

  if (remainingTime < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Submission period has ended.";
  } else {
    var hours = Math.floor(remainingTime / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      hours + "h  " + minutes + "m  " + seconds + "s";
  }
}, 1000);

submit.addEventListener("click", function () {
  changeLastModified();
  updateSubmissionStatus();
});

function changeLastModified() {
  var currentTime = new Date();

  var year = currentTime.getFullYear();
  var month = (currentTime.getMonth() + 1).toString().padStart(2, "0");
  var day = currentTime.getDate().toString().padStart(2, "0");

  var hours = currentTime.getHours().toString().padStart(2, "0");
  var minutes = currentTime.getMinutes().toString().padStart(2, "0");
  var seconds = currentTime.getSeconds().toString().padStart(2, "0");

  var formattedDateTime =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  document.getElementById("lastModified").innerText = formattedDateTime;
}

function updateSubmissionStatus() {
  document.getElementById("submissionStatus").innerText = "Submission Received";
}

//-------------FILE DISPLAY--------------------------
const folderSection = document.getElementById("folder-section");
const assignmentHeader = document.getElementById("assignment-header");
const displayedFile = document.getElementById("displayed-file");
const AssignmentOne = document.getElementById("AssignmentOne");
const AssignmentTwo = document.getElementById("AssignmentTwo");
const Lab1 = document.getElementById("Lab1");
const Lab2 = document.getElementById("Lab2");

const paths = {
  AssignmentOne: "../files/CAAL_Chapter_1.pdf",
  AssignmentTwo: "../files/Chapter 7- GUI.pdf",
  Lab1: "../files/Chapter 4-Inheritance.pdf",
  Lab2: "../files/CAAL_Chapter_2_Lecture_1.pdf",
};

function myfile(assignment) {
  displayedFile.setAttribute("href", paths[assignment]);
  assignmentHeader.innerText = assignment;
  folderSection.style.visibility = "visible";
}

AssignmentOne.addEventListener("click", function () {
  myfile("AssignmentOne");
});

AssignmentTwo.addEventListener("click", function () {
  myfile("AssignmentTwo");
});
Lab1.addEventListener("click", function () {
  myfile("Lab1");
});

Lab2.addEventListener("click", function () {
  myfile("Lab2");
});
