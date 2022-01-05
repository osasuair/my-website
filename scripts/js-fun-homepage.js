let clickMe = document.getElementById("hover-over");
var rect = clickMe.getBoundingClientRect();
clickMe.addEventListener("mouseover", function( event ) {
    // highlight the mouseover button
    event.target.style.color = "orange";
});
clickMe.addEventListener("mouseout", function( event ) {
    // restore original colour
    event.target.style.color = "";
})