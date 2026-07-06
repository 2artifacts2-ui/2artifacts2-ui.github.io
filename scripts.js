// scripts.js

function updateSidebar() {
    const title = document.getElementById('sidebar-title');
    const list = document.getElementById('sidebar-list');
    if (!title || !list) return;

    const path = window.location.pathname;

    if (path.includes('tech.html')) {
        title.innerText = "Tech Trends";
        list.innerHTML = '<li><a href="#">AI Innovations</a></li><li><a href="#">New Gadgets</a></li><li><a href="#">Robotics</a></li>';
    } 
    else if (path.includes('politics.html')) {
        title.innerText = "Political Agenda";
        list.innerHTML = '<li><a href="#">Election Updates</a></li><li><a href="#">New Laws</a></li><li><a href="#">Diplomacy</a></li>';
    } 
    else if (path.includes('sports.html')) {
        title.innerText = "Sports Highlights";
        list.innerHTML = '<li><a href="#">Tournament Results</a></li><li><a href="#">Team Rankings</a></li><li><a href="#">Upcoming Matches</a></li>';
    }
    else if (path.includes('business.html')) {
        title.innerText = "Market Insights";
        list.innerHTML = '<li><a href="#">Stock Updates</a></li><li><a href="#">Finance Tips</a></li><li><a href="#">Global Trade</a></li>';
    }
    else {
        title.innerText = "Latest News";
        list.innerHTML = '<li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li>';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    updateSidebar();
    
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.innerText = new Date().toLocaleDateString('en-US', options);
    }
});
