//globals
let colorPick = document.getElementById('colorPicker')
let sendBtn = document.getElementById('send');
let table = document.getElementById('pixelCanvas');
let row_input = document.getElementById('inputHeight');
let cell_input = document.getElementById('inputWidth');


sendBtn.addEventListener('click', function(evt) {

    evt.preventDefault();

    let row_count = row_input.value;
    let cell_count = cell_input.value;

    makeGrid(row_count, cell_count)

});



// event delegation 
function colorGrid(evt) {
    evt.target.style.backgroundColor = colorPick.value
}

table.addEventListener('click', colorGrid)

function makeGrid(hight, width) {


    for (let i = 0; i < hight; i++) {

        let row = table.insertRow(i)

        for (let j = 0; j < width; j++) {

            let cell = row.insertCell(j)


        }


    }

}