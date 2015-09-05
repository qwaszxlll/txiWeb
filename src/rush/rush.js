Parse.initialize('ccpnOank7Z9Zx9bM2cKx4bKfY2aXpz9YbsqGqISv', 'DsyunChoW6REhbite7qHhJDMu95gCedSvpIGkMwB');

var events;
var eventQuery = new Parse.Query(Parse.Object.extend("Event"));
eventQuery.find({
  	success : function(results){
  		events = results;
  		events.sort(function(a, b){
  		    return a.get("order") - b.get("order");
  		});
  		var innerHTML = '';
  		for (var i=0; i < events.length; i++){
  		    innerHTML += "<div class='rushContainer'>" + 
    			"<div>" +
    				"<h2>" + events[i].get("name") +"</h2>" +
    				"<h1>" + events[i].get("day") +"</h1>" +
    				"<h2>" + events[i].get("startTime") +"</h2>" +
    				"<p>" + events[i].get("description") +"</p>" +
    			"</div>" +
    		"</div>";
  		}
  		$('#rushBox').html(innerHTML);
        console.log("EVENTS RETRIEVAL SUCCESS: ", events);
    },
    error : function(error){
    	console.log("EVENTS RETRIEVAL ERROR: ", error);
  	}
});