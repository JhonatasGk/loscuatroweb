window.addEventListener('mouseup', function(event){
	var box = document.getElementById('aba');
	// eslint-disable-next-line eqeqeq
	if (event.target != box && event.target.parentNode != box){
        box.style.display = 'none';
    }
});
