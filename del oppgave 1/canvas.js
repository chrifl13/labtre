document.onmousemove = function(e) {
2
  e = e || window.event
3
  fixPageXY(e)
4
 
5
  document.getElementById('mouseX').value = e.pageX
6
  document.getElementById('mouseY').value = e.pageY
7
}
