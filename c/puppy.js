/* Puppy specific stuff */

// header and footer
// create header first - important so strapdown.js won't attempt to create its own
var header = document.createElement('div');
$(header).addClass("navbar"); // this is what strapdown.js is looking for
document.body.insertBefore(header, document.body.firstChild);
$().get("c/header.html", function(data) { 
	$(header).html(data);
});

// load header and footer
$().get("c/footer.html", function(data) { 
	var e = document.createElement('div');
	$(e).html(data);
	document.body.appendChild(e);
});

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

