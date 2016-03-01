/* Puppy specific stuff */

// header and footer
// create header first - important so strapdown.js won't attempt to create its own
var header = document.createElement('div');
document.body.insertBefore(header, document.body.firstChild);
$(header).addClass("navbar"); // this is what strapdown.js is looking for
$().get("c/header.html", function(data) { 
	$(header).html(data);
});

// load header and footer
$().get("c/footer.html", function(data) { 
	var e = document.createElement('div');
	$(e).html(data);
	document.body.appendChild(e);
	var d = new Date(document.lastModified);
	$("#last-updated").html(d);
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

// display all when ready
$().loaded(function() {
	document.body.style.display = '';
});
