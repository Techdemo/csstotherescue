// resource: LAUREL STRENG
// https://codepen.io/laurel/pen/rLwOKk
// I wanted a path animation of a spaceship and took this code as an example so I can make it my own eventually. Due to lack of planning, i didn't managed to get this correct.


var path = document.getElementById("bike-path");
var pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;
path.getBoundingClientRect();
window.addEventListener("scroll", function (e) {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight);
    var drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
    if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";
    } else {
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
    }
});