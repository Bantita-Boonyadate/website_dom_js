document.getElementById('ok').addEventListener('click', function(e) {
    alert('This button is ok')
}
)
document.getElementById('cancel').addEventListener('mousemove', function(c) {
    var x = c.clientX;
    var y = c.clientY;
	console.log('x: ' +x+ ' ,'+ ' y: ' +y);
}
)
document.getElementById('cancel').addEventListener('click', function(e) {
    alert('This button is cancel')
}
)
document.getElementById('no').addEventListener('click', function(e) {
    alert('This button is no')
}
)