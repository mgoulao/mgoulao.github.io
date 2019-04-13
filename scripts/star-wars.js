window.onload = () => {

    createByLine();

    let introLogo = document.querySelector(".starwars-demo"),
        introText = document.querySelector("#intro_text"),
        pageContent = document.querySelector(".page_content"),
        text = true,
        logo = true,
        content = true;

    if (text) {
        setTimeout(function () {
            introText.style.display = "block"; //show
        }, 5000); // 5000
    }
    if (logo) {
        introLogo.style.display = "block"; //show
        setTimeout(function () {
            introLogo.style.display = "none";//hide
        }, 8000); // 8000
    }
    if (content) {
        setTimeout(function () {
            pageContent.style.display = "block"; //show
        }, 30000); // 30000
        setTimeout(function () {
            pageContent.style.opacity = 1; //opacity 1
        }, 35000); // 35000
    }

}

const createByLine = () => {
    var byline = document.getElementById('byline');
    bylineText = byline.innerHTML;
    bylineArr = bylineText.split('');
    byline.innerHTML = '';

    var span;
    var letter;

    for (i = 0; i < bylineArr.length; i++) {
        span = document.createElement("span");
        letter = document.createTextNode(bylineArr[i]);
        if (bylineArr[i] == ' ') {
            byline.appendChild(letter);
        } else {
            span.appendChild(letter);
            byline.appendChild(span);
        }
    }
}