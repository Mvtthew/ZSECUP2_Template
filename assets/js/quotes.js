var quotes_i = Math.floor(Math.random()*4);
var quotes = [
  ["Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend", "f0rest", "forest.png"],
  ["Friendship ... is born at the moment when one man says to another. What! You too? I thought that no one but myself...", "REZ", "rez.png"],
  ["I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "EKKZ", "ekkz.png"],
  ["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "GeT_RiGhT", "getright.png"]
];

function first_show(){
	$("#quote1-body").html("\""+quotes[window.quotes_i][0]+"\"");
	$("#quote1-author").html(quotes[window.quotes_i][1]);
	$("#quote1-image").css("background-image","url('assets/img/quotes/"+quotes[window.quotes_i][2]+"')");
	window.quotes_i++;

	if(window.quotes_i == quotes.length){
		window.quotes_i = 0;
	}
	setTimeout("change_quote()", 8000);
}
function change_text(){
	$("#quote1-body").html("\""+quotes[window.quotes_i][0]+"\"");
	$("#quote1-author").html(quotes[window.quotes_i][1]);
	$("#quote1-image").css("background-image","url('assets/img/quotes/"+quotes[window.quotes_i][2]+"')");
	window.quotes_i++;

	if(window.quotes_i == quotes.length){
		window.quotes_i = 0;
	}
}
function change_quote(){

	$("#quote1-box").css("opacity", 0);

	setTimeout('change_text()', 1000);
	setTimeout('$("#quote1-box").css("opacity", 1);', 1000);

	setTimeout("change_quote()", 8000);

}

first_show();
