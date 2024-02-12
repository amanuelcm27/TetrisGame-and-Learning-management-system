window.onload = function () {
  fetch("../../components/navbar/Navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.innerHTML = data + document.body.innerHTML;
      var importedCSS = document.createElement("link");

      importedCSS.rel = "stylesheet";
      importedCSS.href = "../../components/navbar/Navbar.css";
      document.head.appendChild(importedCSS);
      var importedScript = document.createElement("script");
      importedScript.src = "../../components/navbar/navbar.js";
      document.head.appendChild(importedScript);
    });
};

function showDetail(className) {
  var courseoutlineDetail = document.getElementById("courseoutline_detail");
  var outline = document.getElementById("outline1");

  if (courseoutlineDetail.classList.contains("hid_detail")) {
    courseoutlineDetail.classList.remove("hid_detail");
    outline.removeChild(outline.firstElementChild);
    outline.insertAdjacentHTML(
      "afterbegin",
      '<i class="fa fa-solid fa-caret-down" style="font-size: 32px; margin-right: 10px; color: rgb(114, 6, 216)"></i> '
    );
  } else {
    courseoutlineDetail.classList.add("hid_detail");
    outline.removeChild(outline.firstElementChild);
    outline.insertAdjacentHTML(
      "afterbegin",
      '<i class="fa fa-solid fa-caret-right" style="font-size: 32px; margin-right: 10px; color: rgb(114, 6, 216)"></i> '
    );
  }
}

function fetchGrade(htmlPath, cssPath, jsPath) {
  fetch(htmlPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sub_body").innerHTML = data;
      var importedCSS = document.createElement("link");

      importedCSS.rel = "stylesheet";
      importedCSS.href = cssPath;
      document.head.appendChild(importedCSS);
      var importedScript = document.createElement("script");
      importedScript.src = jsPath;
      document.head.appendChild(importedScript);
    });
}

function fetchMessage(htmlPath, cssPath, jsPath) {
  fetch(htmlPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sub_body").innerHTML = data;
      var importedCSS = document.createElement("link");

      importedCSS.rel = "stylesheet";
      importedCSS.href = cssPath;
      document.head.appendChild(importedCSS);
      var importedScript = document.createElement("script");
      importedScript.src = jsPath;
      document.head.appendChild(importedScript);
    });
}

function fetchActivities(htmlPath, cssPath, jsPath) {
  fetch(htmlPath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sub_body").innerHTML = data;
      var importedCSS = document.createElement("link");

      importedCSS.rel = "stylesheet";
      importedCSS.href = cssPath;
      document.head.appendChild(importedCSS);
      var importedScript = document.createElement("script");
      importedScript.src = jsPath;
      document.head.appendChild(importedScript);
    });
}
