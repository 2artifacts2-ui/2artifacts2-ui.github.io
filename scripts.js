// scripts.js

function updateSidebar() {
    const title = document.getElementById('sidebar-title');
    const list = document.getElementById('sidebar-list');
    if (!title || !list) return;

    const path = window.location.pathname;

    if (path.includes('tech.html')) {
        title.innerText = "Tech Trends";
        list.innerHTML = '<li><a href="#">AI Innovations</a></li><li><a href="#">New Gadgets</a></li><li><a href="#">Robotics</a></li>';
    } else if (path.includes('politics.html')) {
        title.innerText = "Political Agenda";
        list.innerHTML = '<li><a href="#">Election Updates</a></li><li><a href="#">New Laws</a></li><li><a href="#">Diplomacy</a></li>';
    } else {
        title.innerText = "Latest News";
        list.innerHTML = '<li><a href="world.html">World Events</a></li><li><a href="business.html">Business Growth</a></li>';
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
