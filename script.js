var accordions = document.getElementsByClassName('content-container');

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function(event) {
        event.currentTarget.classList.toggle('active');
    });
}
