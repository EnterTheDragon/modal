var clickto = document.querySelectorAll('button');
var bg = document.querySelector('.modal');
var modal1 = document.querySelector('.pt1');
var modal2 = document.querySelector('.pt2');


//to select the first modal
clickto[0].addEventListener('click', function () {
	modal1.style.display = 'block';
	bg.style.display = 'block';
});

//to select the second modal
clickto[1].addEventListener('click', function () {
	modal2.style.display = 'block';
	bg.style.display = 'block';
});

//function to close
function closemodals() {
	modal1.style.display = 'none';
	modal2.style.display = 'none';
	bg.style.display = 'none';
}


clickto[2].addEventListener('click', closemodals);
clickto[3].addEventListener('click', closemodals);
clickto[4].addEventListener('click', closemodals);
bg.addEventListener('click', closemodals);
