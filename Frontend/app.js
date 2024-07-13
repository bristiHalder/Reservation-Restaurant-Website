document.addEventListener('DOMContentLoaded', function() {

    // Nav Toggler
    let navToggler = document.querySelector('.nav-toggler');
    let linksContainer = document.querySelector('.links-container');

    if (navToggler && linksContainer) {
        navToggler.addEventListener('click', () => {
            navToggler.classList.toggle('active');
            linksContainer.classList.toggle('active');
        });
    }

    // About Us Review Slider
    let reviews = document.querySelectorAll('.review-wrapper');
    let currentReviews = [0, 2];

    if (reviews) {
        let updateReviewSlider = (cards) => {
            cards.forEach((card_index) => {
                reviews[card_index].classList.add('active');
            });
        };

        setInterval(() => {
            currentReviews.forEach((card_index, i) => {
                reviews[card_index].classList.remove('active');
                currentReviews[i] = card_index >= reviews.length - 1 ? 0 : card_index + 1;
            });

            setTimeout(() => {
                updateReviewSlider(currentReviews);
            }, 250);

        }, 5000);

        updateReviewSlider(currentReviews);
    }

    // FAQ
    let faqs = document.querySelectorAll('.faq');

    if (faqs) {
        faqs.forEach(faq => {
            let ques = faq.querySelector('.question-box');
            if (ques) {
                ques.addEventListener('click', () => {
                    faq.classList.toggle('active');
                });
            }
        });
    }

    // Dish Slider
    let dishSlider = document.querySelector('.dish-slide');
    let rotationVal = 0;

    if (dishSlider) {
        setInterval(() => {
            rotationVal += 120;
            dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
        }, 3000);
    }

    // Scroll Function
    function scrollToRestaurantsSection() {
        let t = document.querySelector("#restaurants-section");
        if (t) {
            t.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Call the scroll function if needed
    // scrollToRestaurantsSection();


    function scrollToSection(sectionId) {
        event.preventDefault();
        var section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Add event listeners to navbar links
    let navbarLinks = document.querySelectorAll('.links');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            let sectionId = this.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });
    

    // AOS Initialization
    AOS.init();

    // Function to handle reservation button click
    function reserveFunc() {
        console.log("Make a reservation");
        // You can add your reservation logic here
        // Example: window.location.href = "http://your-reservation-url.com";
    }

    
    

});
