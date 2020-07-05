$(function(){
	setInterval(function(){
        $("img.tweet-avatar").each(function(i){
            var imgURL = chrome.extension.getURL("icon128.png");
            $(this).attr('src', imgURL);
        });
        $("div").each(function(i){
            if ($(this).attr('style') && $(this).attr('style').match(/https:\/\/pbs.twimg.com\/profile_images\/.+/)) {
                var imgURL = chrome.extension.getURL("icon128.png")
                $(this).attr('style', 'background-image: url("' + imgURL + '");')
            }
        })
        $("img").each(function(i){
            if ($(this).value && $(this).value.match(/https:\/\/pbs.twimg.com\/profile_images\/.+/)) {
                var imgURL = chrome.extension.getURL("icon128.png");
                $(this).attr('src', imgURL);
            }
        });
        $(".css-4rbku5.css-18t94o4.css-1dbjc4n.r-1loqt21.r-1wbh5a2.r-dnmrzs.r-1ny4l3l").each(function(i){
            $(this).text("")
        });
        $(".css-1dbjc4n.r-1habvwh.r-1iusvr4.r-16y2uox").each(function(i){
            $(this).text("")
        });
    },
    1000)
})



        