$(function(){
	setInterval(function(){
        $("img.tweet-avatar").each(function(i){
            var imgURL = chrome.extension.getURL("icon128.png");
            $(this).attr('src', imgURL);
        });
	},1000);
});