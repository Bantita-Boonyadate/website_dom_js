document.getElementById('ok').addEventListener('click', function(e) {
    alert('ok is clicked')
    console.log(e)
}
)
document.getElementById('cancel').addEventListener('mousemove', function(c) {
    var x = c.clientX;
    var y = c.clientY;
	console.log('x: ' +x+ ' ,'+ ' y: ' +y);
}
)