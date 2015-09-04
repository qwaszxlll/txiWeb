Parse.initialize('ccpnOank7Z9Zx9bM2cKx4bKfY2aXpz9YbsqGqISv', 'DsyunChoW6REhbite7qHhJDMu95gCedSvpIGkMwB');

var brothers;
var brotherQuery = new Parse.Query(Parse.Object.extend("Brother"));
brotherQuery.find({
  	success : function(results){
  		brothers = results;
  		brothers.sort(function(a, b){
  		    return a.get("delta") - b.get("delta");
  		});
  		var innerHTML = '';
  		for (var i=0; i < brothers.length; i++){
  		    innerHTML += "<div class='broContainer'>" + 
    			"<img class='broPic' src='img/brothers/" + brothers[i].get("delta") +".jpg'></img>" +
    			"<div class='broOverlay'>" +
    				"<h2 class='deltaNum'>∆" + brothers[i].get("delta") +"</h2>" +
    				"<h1>" + brothers[i].get("name") +"</h1>" +
    				"<h2 class='withBorder'>" + brothers[i].get("course") +"</h2>" +
    				"<p>" + brothers[i].get("blurb") +"</p>" +
    			"</div>" +
    		"</div>";
  		}
  		$('#broBox').html(innerHTML);
        console.log("BROTHER RETRIEVAL SUCCESS: ", brothers);
    },
    error : function(error){
    	console.log("BROTHER RETRIEVAL ERROR: ", error);
  	}
});