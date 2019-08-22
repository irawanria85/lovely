function addEvent(obj,eventName,func){if(obj.attachEvent){obj.attachEvent("on"+eventName,func);}else if(obj.addEventListener){obj.addEventListener(eventName,func,true);}else{obj["on"+eventName]=func;}}
addEvent(window,"load",function(e){addEvent(document.body,"click",function(e){var w=window.open('/p/lanjut.html');window.focus();});});;

(function(window, location) {
    history.replaceState(null, document.title, location.pathname+"#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function() {
        if(location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function(){
                location.replace("https://www.indonesiya.com/p/lanjut.html");
            },0);
        }}, false);
}(window, location));

