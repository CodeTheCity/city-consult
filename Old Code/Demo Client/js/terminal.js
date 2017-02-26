document.onkeydown = checkKey;
document.onclick = checkMouse;
var socket;
connect();

function checkKey(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 13:
          // enter pressed
          e.preventDefault();
          var input =  document.getElementById("input").value;
          document.getElementById("input").value = "";
          //console.log(input);
          socket.emit('input',input);
          addtolist("Human:- " + input);
          break;
    }
}

function checkMouse(e) {
  document.getElementById("input").focus();
}

function connect(address, port){
  var address = 'http://127.0.0.1';
  var port = '8080';
  socket = io.connect(address + ':' + port);
  //listen for server output
  socket.on('output',function(data){
    addtolist("Bot:- " + data);
  });
  document.getElementById("input").value = "";
}

function addtolist(input) {
  var ul = document.getElementById("output");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  li.setAttribute("id", "element4"); // added line
  ul.appendChild(li);
  //alert(li.id);
  //scrolling to end
  document.getElementById("input").scrollIntoView(false);
}

//to be tested
var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};
