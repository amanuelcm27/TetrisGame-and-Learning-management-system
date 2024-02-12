document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.getElementsByTagName("input");
  document.getElementById("submitBtn").style = "display: none";

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
});
function editProfile() {
  let inputs = document.getElementsByTagName("input");
  document.getElementById("submitBtn").style = "display: block";

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
    inputs[i].style = "border: solid 1px #d06d0fc1";
  }
}
