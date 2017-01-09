// Create a "close" button and append it to each list item
var nodeList = document.getElementsByTagName("LI");
var lengthNode = nodeList.length;
for (var i = 0; i < lengthNode; i++){
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	nodeList[i].appendChild(span);
}


// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var lengthClose = close.length;
for (var i = 0; i < lengthClose; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}


// feature "checked"
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// feature Add 
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("newInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please ReEnter");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("newInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < lengthClose; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}