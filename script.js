// document.getElementById('ok').addEventListener('click', function(e) {
//     alert('This button is ok')
// }
// )
// document.getElementById('cancel').addEventListener('mousemove', function(c) {
//     var x = c.clientX;
//     var y = c.clientY;
// 	console.log('x: ' +x+ ' ,'+ ' y: ' +y);
// }
// )
// document.getElementById('cancel').addEventListener('click', function(e) {
//     alert('This button is cancel')
// }
// )
// document.getElementById('no').addEventListener('click', function(e) {
//     alert('This button is no')
// }
// )
// document.getElementById('ok').addEventListener('click' , function(e) {
//     document.getElementById('no').classList.add('toggleOn')
//     console.log(document.getElementById('no'))
// }
// )
// document.getElementById('ok').addEventListener('click' , function(e) {
    
//     let noElemement = document.getElementById('no')
//     if (noElemement.classList.contains('toggleOn')) {
//         noElemement.classList.replace('toggleOn' , 'toggleOff')
//     }else if (noElemement.classList.contains('toggleOff')) {
//         noElemement.classList.replace('toggleOff' , 'toggleOn')
//     }else {
//         noElemement.classList.add('toggleOn')
//     }
// }
// )
// var borderTick = 2
// document.getElementById('cancel').style.border = `${borderTick}px solid white`

// var cancelElement = document.getElementById('cancel')
// cancelElement.addEventListener('mouseover' , function(e) {
//     cancelElement.innerHTML = `
//     <div class= "container-col">
//     <div class="flex-item">
//     no 1
//     </div>
//     <div class="flex-item">
//     no2
//     </div>
//     `
// }
// )
// cancelElement.addEventListener('mouseleave' , function(e) {
//     cancelElement.innerHTML = `
//     cancel
//     `
// }
// )

// var marginBox = 10
// document.getElementById('ok').addEventListener('click' , function(e) {
//     marginBox = marginBox + 30
//     document.getElementById('cancel').style.marginLeft = `${marginBox}px`
//     document.getElementById('cancel').style.marginRight = `${marginBox}px`
//     document.getElementById('no').style.marginLeft = `${marginBox}px`
//     document.getElementById('no').style.marginRight = `${marginBox}px`
// }
// )

// document.getElementById('no').addEventListener('dblclick' , function(e) {
//     let okElement = document.getElementById('ok')
//     if (okElement.classList.contains('text1')) {
//         okElement.innerHTML = "?????????????????????"
//         okElement.classList.replace('text1' , 'text2')
//     }else if (okElement.classList.contains('text2')) {
//         okElement.innerHTML = "????????????"
//         okElement.classList.replace('text2' , 'text3')
//     }else if (okElement.classList.contains('text3')) {
//         okElement.innerHTML = "?????????????????????"
//         okElement.classList.replace('text3' , 'text4')
//     }else if (okElement.classList.contains('text4')) {
//         okElement.innerHTML = "ok"
//         okElement.classList.replace('text4' , 'text1')
//     }else {
//         okElement.classList.add('text1')
//     }
// }
// )

function onOKClicked(e) {
    // e.stopPropagation();
    // concatText('OK')
    addNode()
}

function onCancelClicked(e) {
    e.stopPropagation();
	concatText('Cancel')
}

function onNoClicked(e) {
    e.stopPropagation();
	concatText('NO')
}

var outputItem = document.getElementById('output')
//concatenate ????????????????????????
function concatText(inputText) {
    outputItem.innerText = outputItem.innerText + ' ' + inputText
}

function clearText(){
    outputItem.innerText = ''
}

document.getElementById('cancel').addEventListener('click' , onCancelClicked)
document.getElementById('no').onclick = onNoClicked

// document.getElementById('container').onclick = function(e) {
// 	alert('container clicked')
// }

document.getElementById('container').onclick = function(e) {
    clearText()
}

var outputContainer = document.getElementById('output-container')
var counter = 0;
function addNode() {
	newNode = document.createElement('div')
	newNode.classList.add('flex-item')
	newNode.setAttribute('id' , counter)
	newNode.innerText = counter
	counter = counter + 1
	newNode.innerText = counter
	outputContainer.appendChild(newNode)
}
