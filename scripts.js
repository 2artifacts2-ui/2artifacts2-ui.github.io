document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.innerText = new Date().toLocaleDateString('en-US', options);
    }

    const title = document.getElementById('sidebar-title');
    const list = document.getElementById('sidebar-list');
    
    if (title && list) {
        const path = window.location.pathname;
        if (path.includes('tech.html')) title.innerText = "Tech Trends";
        else if (path.includes('politics.html')) title.innerText = "Political Agenda";
        else if (path.includes('business.html')) title.innerText = "Market Insights";
        else if (path.includes('sports.html')) title.innerText = "Sports Highlights";
        else title.innerText = "Latest News";

        const articles = document.querySelectorAll("article h2");
        list.innerHTML = "";
        
        articles.forEach(h2 => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = h2.innerText;
            a.href = "#";
            li.appendChild(a);
            list.appendChild(li);
        });
    }
});
