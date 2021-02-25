function hiDisplayer(hiPage) {
  document.getElementById("hi").innerHTML = hiPage;
}

function getFile(hiCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "hi.html");
  req.onload = function() {
    if (req.status == 200) {
      hiCallback(this.responseText);
    } else {
      hiCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(hiDisplayer);