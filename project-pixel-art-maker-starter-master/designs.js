// Select color input
// Select size input
var colorPick = document.getElementById('colorPicker')
var sendBtn = document.getElementById('send');
var table = document.getElementById('pixelCanvas');


sendBtn.addEventListener('click', function(evt){

evt.preventDefault();

var hight = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;
makeGrid(hight,width)

});



// event delegation 
function colorGrid(evt){
evt.target.style.backgroundColor = colorPick.value
}

table.addEventListener('click',colorGrid)


function makeGrid(hight, width) {


    for (var i = 0; i < hight; i++) {

        var row = table.insertRow(i)

        for (var j = 0; j < width; j++) {

            var cell = row.insertCell(j)
 

        }


    }

}



























