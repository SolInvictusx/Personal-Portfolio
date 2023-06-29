function openOverlay(imageIndex) {
    let overlay = document.getElementById("overlay");
    let overlayTitle = document.getElementById("overlayTitle");
    let overlayDescription = document.getElementById("overlayDescription");

    // Set the content based on the clicked image
    switch (imageIndex) {
        case 1:
            overlayTitle.innerText = "Image 1";
            overlayDescription.innerText = "This is the description for Image 1.";
            break;
        case 2:
            overlayTitle.innerText = "Image 2";
            overlayDescription.innerText = "This is the description for Image 2.";
            break;
        case 3:
            overlayTitle.innerText = "Image 3";
            overlayDescription.innerText = "This is the description for Image 3.";
            break;
        case 4:
            overlayTitle.innerText = "Image 4";
            overlayDescription.innerText = "This is the description for Image 4.";
            break;
        case 5:
            overlayTitle.innerText = "Image 5";
            overlayDescription.innerText = "This is the description for Image 5.";
            break;
        default:
            overlayTitle.innerText = "";
            overlayDescription.innerText = "";
    }

    // Show the overlay
    overlay.style.display = "block";
}

function closeOverlay() {
    let overlay = document.getElementById("overlay");

    // Hide the overlay
    overlay.style.display = "none";
}
