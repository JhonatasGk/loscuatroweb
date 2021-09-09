window.addEventListener('mouseup', function(event){
	var box = document.getElementById('aba');

	if (event.target != box && event.target.parentNode != box){
        box.style.display = 'none';
    }
});
