//* Body *//
function addEvent(obj, eventName, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventName, func);
        } else if (obj.addEventListener) {
            obj.addEventListener(eventName, func, true);
        } else {
            obj["on" + eventName] = func;
        }
    }
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
            var w = window.open('/p/lanjut.html');
            window.focus();
    });
}); 
//* Back *//
(function(window,location){
        history.replaceState(null,document.title,location.pathname+"#!/history");
        history.pushState(null,document.title,location.pathname);
        window.addEventListener("popstate",function(){
                if(location.hash==="#!/history"){
                        history.replaceState(null,document.title,location.pathname);
                        setTimeout(function(){location.replace("/p/please-wait.html");},0);}},false);}(window,location));
//* Loading *//
function eventualRedirect(redirectTo,timeoutPeriod){
setTimeout("location.href = redirectTo;",timeoutPeriod);}
setTimeout("location.href = '/p/loading.html';",120000);
