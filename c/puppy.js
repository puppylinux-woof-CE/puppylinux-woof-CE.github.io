/* Puppy specific stuff */

// load header and footer
$().get("c/header.html", function(data) { $("#header").html(data) });
$().get("c/footer.html", function(data) { $("#footer").html(data) });

// stylesheets
var e = document.createElement('link');
e.href = 'c/puppy.css';
e.rel = 'stylesheet';
document.head.appendChild(e);

// favicon
e = document.createElement('link');
e.href = 'c/puppylogo96.png';
e.rel = 'icon';
e.type = 'image/png';
document.head.appendChild(e);

