const importNavbar = (window.onload = function () {
  fetch("./navbar/Navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.innerHTML = data + document.body.innerHTML;
      var importedCSS = document.createElement("link");
      importedCSS.rel = "stylesheet";
      importedCSS.href = "./navbar/Navbar.css";
      document.head.appendChild(importedCSS);
    });
});
