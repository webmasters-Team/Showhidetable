var grades_table = document.querySelector('#grades')
var class_chooser = document.querySelector('#class-chooser')

var grade_threshold = 0
var which_class = 'All'


class_chooser.addEventListener( 'change', function() {
	which_class = this.value
	updateRows()	
})


var rangeSlider = document.getElementById('slider-range');

noUiSlider.create(rangeSlider, {
    start: 0,
    range: {
        'min': 0,
        'max': 10
    },
    step: 1
});

rangeSlider.noUiSlider.on('update', function( values, handle ) {
	grade_threshold = Math.round(values[handle]);
	document.querySelector('#value').innerHTML = grade_threshold
	updateRows()
})

/* ============== */

function updateRows() {
	
	var shownRows = 0 // used for highlighting even numbered rows
	
	for ( var r = 1; r < grades_table.rows.length; r++ ) {
		
		grades_table.rows[r].classList.remove('even')
		
		if ( ( grades_table.rows[r].cells[2].innerHTML == which_class || which_class == 'All' ) && parseInt(grades_table.rows[r].cells[3].innerHTML) >= parseInt(grade_threshold) ) {
			
			grades_table.rows[r].style.display = 'table-row'
			shownRows++
			if ( shownRows%2==0) {
				grades_table.rows[r].classList.add('even') // highlight even numbered rows
			}
			
		} else {
			
			grades_table.rows[r].style.display = 'none'
			
		}
		
	}
	
}