// Script for automatic add friends on Linkedin mynetwork page
;(function(){
	var i = 0;
	function join() {
		function getRandomInt(min, max) {
		    return Math.floor((Math.random() * (max - min)) + min) * 100;
		}
	    var foo = getRandomInt(10, 30);
		setTimeout(function() {
			var card = $('.mn-discovery-entity-card');
		    if (i < card.length) {
		    	var t = card[i];
		        console.log($(t).find('.mn-discovery-person-card__name').text());
		        $(t).find('[data-control-name="invite"]').click();
		    	i++;
		    }
		    join();
		}, foo);
	};
	join();
})();
