/* Puppy specific stuff */

$().ready(function() {
	// Style tables - from strapdown.js
	$('table').addClass('table table-striped table-bordered');
	
	// update date
	var d = new Date(document.lastModified);
	$("#last-updated").html(d.toDateString());
	
	// contributors list
	var f = location.pathname;
	var i = f.lastIndexOf("/");
	f = f.substring(i+1);
	if (f == "") f += "index.html";
	f = f.replace(".html",".md");
	//console.log(f);
	
	// This makes use of Github API. If hosted else where, this needs to change
	var user = "puppylinux-woof-CE";
	var repo = "puppylinux-woof-CE.github.io";
	user = "jamesbond3142"; // TEST
	repo = "jamesbond3142.github.io"; // TEST
	$().get('https://api.github.com/repos/'+user+'/'+repo+'/commits?path='+f,
	function(data) {
		var o = JSON.parse(data);
		var s = {};
		// collect all the unique names.
		for (var i in o) {
			var n = o[i].commit.author.name;
			s[n] = n;
		}
		//console.log(s);		
		o = "";
		for (var n in s) {
			o += ", " + n;
		}
		if (o.length>2) o = o.substring(2);
		//console.log(o);
		$("#contributors").html(o);
		
	}, false, true);
});

