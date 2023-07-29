window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var tapToTopBtn = document.getElementById("tapToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        tapToTopBtn.style.display = "block";
    } else {
        tapToTopBtn.style.display = "none";
    }
}

// Function to scroll back to the top when the button is clicked
document.getElementById("tapToTopBtn").onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
