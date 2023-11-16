let image1 = 'img1.jpg';
let image2 = 'img2.jpg';
let image3 = 'img3.jpg';

let images = [image1, image2, image3];

function updateImageWidth(imgWidth) {
    let selectedImageIndex = getSelectedImageIndex();
    if (selectedImageIndex !== null) {
        let imgElement = imgElements[selectedImageIndex];
        imgElement.style.width = imgWidth + 'px';
    }
}

function updateImageHeight(imgHeight) {
    let selectedImageIndex = getSelectedImageIndex();
    if (selectedImageIndex !== null) {
        let imgElement = imgElements[selectedImageIndex];
        imgElement.style.height = imgHeight + 'px';
    }
}

function updateBorderThickness(imgThickness) {
    let selectedImageIndex = getSelectedImageIndex();
    if (selectedImageIndex !== null) {
        let imgElement = imgElements[selectedImageIndex];
        imgElement.style.border = imgThickness + 'px solid black';
    }
}

function updateAltText(imgAlt) {
    let selectedImageIndex = getSelectedImageIndex();
    if (selectedImageIndex !== null) {
        let imgElement = imgElements[selectedImageIndex];
        imgElement.alt = imgAlt;
    }
}


function getSelectedImageIndex() {
    for (let i = 0; i < images.length; i++) {
        let radioButton = document.getElementById('radioImage' + (i + 1));
        if (radioButton.checked) {
            return i;
        }
    }
    return null;
}

function moveSelectedImage(direction) {
    console.log(direction);
    let selectedImageIndex = getSelectedImageIndex();
    if (selectedImageIndex !== null) {
        if (direction === 'up') {
            if (selectedImageIndex === 0) {
                images.push(images.shift());
            } else {
                [images[selectedImageIndex], images[selectedImageIndex - 1]] = [images[selectedImageIndex - 1], images[selectedImageIndex]];
            }
        } 
        if (direction === 'down') {
            if (selectedImageIndex === images.length - 1) {
                images.unshift(images.pop());
            } else {
                [images[selectedImageIndex], images[selectedImageIndex + 1]] = [images[selectedImageIndex + 1], images[selectedImageIndex]];
            }
        }
        updateImagesOnPage();
    }
}

let imgElements = [];

function updateImagesOnPage() {
    for (let i = 0; i < images.length; i++) {
        let imgElement = document.getElementById('imgElement' + (i + 1));
        imgElement.src = images[i];
    }

    imgElements[0] = document.getElementById('imgElement1');
    imgElements[1] = document.getElementById('imgElement2');
    imgElements[2] = document.getElementById('imgElement3');
}

window.onload = updateImagesOnPage;
