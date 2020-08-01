window.addEventListener("load", myMain, false);
var COMMENT_DISABLED_STR = 'Comments are turned off';
var COMMENT_ENABLED_STR = 'Add a public comment...';


function myMain(evt) {

	if (window.location.host == "www.youtube.com") {
		console.log("Tubecomments injected.");

		var interval_1 = setInterval(isCommentsElementloaded, 1000);


		function isCommentsElementloaded() {
			if (document.body.innerText.includes(COMMENT_DISABLED_STR)){
				clearInterval(interval_1);
				loadcomments();
			}
			if(document.body.innerText.includes(COMMENT_ENABLED_STR)) {
				clearInterval(interval_1); 
			}
		}

		function loadcomments() {
				console.log("Tubecomments loaded");			 
				console.log("Hurry!!! youtube comments unlocked welcome to Tubecomments community.");
				document.getElementById('comments').innerHTML = '<div id="disqus_thread"></div>';
				(function () { // DON'T EDIT BELOW THIS LINE
					var d = document,
						s = d.createElement('script');
					s.src = 'https://tubecomments.disqus.com/embed.js';
					s.setAttribute('data-timestamp', +new Date());
					(d.head || d.body).appendChild(s);
				})();
		}
	}


}