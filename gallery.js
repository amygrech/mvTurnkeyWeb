let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})

// Show or hide the scroll to top button based on scrolling
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a'); // Select all nav links

// Toggle dropdown menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        // If menu is open, close it
        navLinks.style.height = '0';
    } else {
        // If menu is closed, calculate total height and open it
        const totalHeight = [...navLinks.children].reduce(
            (total, child) => total + child.offsetHeight,
            0
        );
        navLinks.style.height = `${totalHeight}px`;
    }
    navLinks.classList.toggle('active'); // Toggle active class
    hamburger.classList.toggle('open'); // Toggle hamburger animation
});

// Close the menu when a nav link is clicked
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Remove active class
        hamburger.classList.remove('open'); // Reset hamburger animation
        navLinks.style.height = '0'; // Collapse the menu with animation
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent immediate submission to show the modal first

    // Disable the submit button to prevent multiple submissions
    const submitButton = event.target.querySelector("button[type='submit']");
    submitButton.disabled = true;

    // Display the loading modal
    const loadingModal = document.getElementById("loadingModal");
    const countdownElement = document.getElementById("countdown");
    loadingModal.style.display = "flex";

    // Start countdown from 10 seconds
    let countdown = 10;
    countdownElement.innerText = countdown;

    const countdownInterval = setInterval(() => {
        countdown -= 1;
        countdownElement.innerText = countdown;

        // If countdown reaches zero, submit the form
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            loadingModal.style.display = "none";
            document.getElementById("contactForm").submit();
        }
    }, 1000);
});