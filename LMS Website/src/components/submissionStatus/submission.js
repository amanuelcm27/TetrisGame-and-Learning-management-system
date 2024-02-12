let submitAssignment = document.getElementById("submitAssignment");
var submissionDateElement = document.querySelector('.dateOfSubmission');
var deadlineISO = submissionDateElement.getAttribute('datetime');
var deadline = new Date(deadlineISO).getTime();


function checkDeadline() {
    var currentTime = new Date().getTime();
    if (currentTime > deadline) {
        document.getElementById('fileSubmissionForm').querySelectorAll('input, select, textarea, button').forEach(function (elem) {
            elem.disabled = true;
        });
        alert('Submission period has ended.');
    }
}

submitAssignment.addEventListener("mouseenter", checkDeadline);

var timerInterval = setInterval(function () {
    var currentTime = new Date().getTime();
    var remainingTime = deadline - currentTime;

    if (remainingTime < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = 'Submission period has ended.';
    } else {
        var hours = Math.floor(remainingTime / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = hours + 'h  ' + minutes + 'm  ' + seconds + 's';
    }
}, 1000);

let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    changeLastModified();
    updateSubmissionStatus();
});

function changeLastModified() {
    var currentTime = new Date();

    var year = currentTime.getFullYear();
    var month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
    var day = currentTime.getDate().toString().padStart(2, '0');

    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');

    var formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById("lastModified").innerText = formattedDateTime;
}

function updateSubmissionStatus() {
    document.getElementById("submissionStatus").innerText = "Submission Received";
}
