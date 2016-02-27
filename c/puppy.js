/* Puppy specific stuff */

// load header and footer
$().get("c/header.html", function(data) { $("#header").html(data) });
$().get("c/footer.html", function(data) { $("#footer").html(data) });

// stylesheets
var e = document.createElement('link');
e.href = 'c/puppy.css';
e.rel = 'stylesheet';
document.head.appendChild(e);
