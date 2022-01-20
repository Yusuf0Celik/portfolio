console.log("project1.js loaded");

// Variables
const theImages = document.querySelectorAll('.carrousel-image');
const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');


nextBtn.addEventListener('click', function() {
    let activeImageID =  -5;
    let nxtImg;
    for (let i = 0; i < theImages.length; i++) {
        const chkImg = theImages[i];
        if (chkImg.classList.contains('active')) {
            activeImageID = i;
            nxtImg = activeImageID + 1;
        }

        if (nxtImg >= theImages.length) {
            nxtImg = 0;
        }
    }

    theImages[activeImageID].classList.remove('.active');
    theImages[nxtImg].classList.add('.active');
});


prevBtn.addEventListener('click', function() {
    let activeImageID =  -5;
    let nxtImg;
    for (let i = 0; i < theImages.length; i++) {
        const chkImg = theImages[i];
        if (chkImg.classList.contains('.active')) {
            activeImageID = i;
            nxtImg = activeImageID - 1;
        }

        if (nxtImg < 0) {
            nxtImg = theImages.length - 1;
        }
    }

    console.log(nxtImg);
    console.log(activeImageID);
    theImages[activeImageID].classList.remove('.active');
    theImages[nxtImg].classList.add('.active');
});

