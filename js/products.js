function openOverlay(imageIndex) {
    let overlay = document.getElementById("overlay");
    let overlayTitle = document.getElementById("overlayTitle");
    let overlayDescription = document.getElementById("overlayDescription");

    // Set the content based on the clicked image
    switch (imageIndex) {
        case 1:
            overlayTitle.innerText = "1 Whole Beef";
            overlayDescription.innerText = "For this package, you can customize just what ";
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
    overlay.style.display = "block";
}

function closeOverlay() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll(".details-button");
    const overlay = document.getElementById("overlay");
    const overlayContent = document.getElementById("overlay-content");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            overlay.style.display = "block";
            overlayContent.innerHTML = "<p>More details about the product...</p>"; // Replace this with your details
        });
    });

    overlay.addEventListener("click", function () {
        this.style.display = "none";
    });
});
