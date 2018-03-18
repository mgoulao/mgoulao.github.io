$("document").ready(function () {


    var introLogo = $(".starwars-demo"), introText = $("#intro_text"), pageContent = $(".page_content"), intro = true;


    if (intro) {
        introLogo.show();
        setTimeout(function () {
            introText.show();
        }, 5000);

        setTimeout(function () {
            introLogo.hide();
        }, 10000);

        setTimeout(function () {
            pageContent.show();
        }, 30000);
        setTimeout(function () {
            pageContent.css({"opacity": 1});
        }, 35000);
    } else {
        pageContent.show();
        setTimeout(function () {
            pageContent.css({"opacity": 1});
        }, 1000);
    }

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});


var byline = document.getElementById('byline');  	// Find the H2
bylineText = byline.innerHTML;										// Get the content of the H2
bylineArr = bylineText.split('');									// Split content into array
byline.innerHTML = '';														// Empty current content

var span;					// Create variables to create elements
var letter;

for (i = 0; i < bylineArr.length; i++) {									// Loop for every letter
    span = document.createElement("span");					// Create a <span> element
    letter = document.createTextNode(bylineArr[i]);	// Create the letter
    if (bylineArr[i] == ' ') {												// If the letter is a space...
        byline.appendChild(letter);					// ...Add the space without a span
    } else {
        span.appendChild(letter);						// Add the letter to the span
        byline.appendChild(span); 					// Add the span to the h2
    }
}