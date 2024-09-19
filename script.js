document.addEventListener('DOMContentLoaded', function () {
    // Smoothly scrolls to the "About the Island" section when the "About Taniti" link is clicked 
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

    if (isIndexPage) {
        const aboutLink = document.querySelector('.about-link');

        if (aboutLink && aboutLink.getAttribute('href').includes('#about-island')) {
            aboutLink.addEventListener('click', function (event) {
                event.preventDefault();
                document.getElementById('about-island').scrollIntoView({ behavior: 'smooth' });
            });
        }

        if (window.location.hash === '#about-island') {
            document.getElementById('about-island').scrollIntoView({ behavior: 'smooth' });
        }
    }
});

function filterAttractions() {
    // Filters the attractions list based on the input text
    const input = document.getElementById('filter-input').value.toLowerCase();
    const attractions = document.querySelectorAll('.attraction-item');
    
    attractions.forEach(attraction => {
        const title = attraction.querySelector('h3').textContent.toLowerCase();
        attraction.style.display = title.includes(input) ? 'block' : 'none';
    });
}

function filterAccommodations() {
    // Filters the accommodations list based on the input text
    const filterValue = document.getElementById('filter-input').value.toLowerCase();
    const accommodationsItems = document.querySelectorAll('.accommodations-list .accommodation-item');

    accommodationsItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(filterValue) ? 'block' : 'none';
    });
}

function scrollContainer(direction, containerClass) {
    // Scrolls the container left or right by set amount
    const container = document.querySelector(containerClass);
    const scrollAmount = direction === 'left' ? -320 : 320;
    
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

function showMoreInfo() {
    // Displays an alert with a message indicating more information will be available soon when "Learn More" button is clicked
    alert('More information on this activity, accommodation, or means of transport coming soon');
}

function showConfirmationMessage() {
    alert('Thank you for your message! We will get back to you shortly.');
    return false; // Prevents the form from submitting to a server
}


function toggleMap() {
    // Toggles the visibility of the island map on the page
    const mapContainer = document.getElementById('island-map');
    mapContainer.style.display = mapContainer.style.display === 'none' ? 'block' : 'none';
}
