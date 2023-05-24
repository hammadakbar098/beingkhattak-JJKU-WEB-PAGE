window.addEventListener('scroll', function() {
    var mainContentElements = document.querySelectorAll('.main-content');
    var characterElements = document.querySelectorAll('.character');
    var mapElements = document.querySelectorAll('.map');
    var windowHeight = window.innerHeight;
    
    for (var i = 0; i < mainContentElements.length; i++) {
        var elementPosition = mainContentElements[i].getBoundingClientRect().top;
        if (elementPosition - windowHeight <= 0) {
            mainContentElements[i].classList.add('visible');
        }
    }
    
    for (var i = 0; i < characterElements.length; i++) {
        var elementPosition = characterElements[i].getBoundingClientRect().top;
        if (elementPosition - windowHeight <= 0) {
            characterElements[i].classList.add('visible');
        }
    }
    
    for (var i = 0; i < mapElements.length; i++) {
        var elementPosition = mapElements[i].getBoundingClientRect().top;
        if (elementPosition - windowHeight <= 0) {
            mapElements[i].classList.add('visible');
        }
    }
});