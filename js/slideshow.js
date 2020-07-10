window.onload = function() {
    let tid = -1;
    let currentIMG = 0;
    const thumbImgs = document.querySelectorAll('.slideshow .gallery img');
    const slideImgs = document.querySelectorAll('.slideshow .frame img');

    function startSlideShow() {
        tid = setInterval(function() {
            showNextSlide(function() {
                currentIMG++;
                if(currentIMG === slideImgs.length) {
                    currentIMG = 0;
                }
            });
        }, 3000);
    }

    function stopSlideShow() {
        clearInterval(tid);
    }

    function showNextSlide(setSlide) {
        slideImgs[currentIMG].classList.remove('active');
        thumbImgs[currentIMG].classList.remove('selected');
        setSlide();
        slideImgs[currentIMG].classList.add('active');
        thumbImgs[currentIMG].classList.add('selected');
    }

    slideImgs.forEach(function(el) {
        
        el.addEventListener('mouseover', function() {
            stopSlideShow();
        });

        el.addEventListener('mouseout', function() {
            startSlideShow();
        });
    });

    thumbImgs.forEach(function(el, index) {
        el.addEventListener('click', function() {
            stopSlideShow();
            showNextSlide(function() {
                currentIMG = index;
            });
            startSlideShow();
        });
    });

    startSlideShow();
}