var projects = {
    "projects": [
        {
            "title": "Tesla Portugal",
            "img": "./resources/tesla-logo-big.png",
            "color": "mg-green",
            "link": "https://teslaportugal.blogspot.com"
        },
        {
            "title": "Chess Mate",
            "img": "./chess/Wallpaper-big.png",
            "color": "mg-almost-black",
            "link": "https://esteveste.github.io/Chess_Google_Assistant_Contest"
        },
         {
            "title": "Fuchsia Web Demo",
            "img": "",
            "color": "mg-probably-red",
            "link": "https://mgoulao.github.io/fuchsia/"
        },
        {
            "title": "EV Map",
            "img": "./resources/ev-map.webp",
            "color": "mg-kinda-purple",
            "link": "#"
        }
    ]
}

var projectsContainer = $(".mg-project-content");

var projectsList = projects.projects;

for(var i = 0; i < projectsList.length; i++) {
    console.log("Ola");
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projectsList[i].title);
    var formattedProjectOverlay = HTMLprojectOverlay.replace("%data%", projectsList[i].color).replace("%content%", formattedProjectTitle);
    var formattedProjectLink = HTMLprojectLink.replace("%data%", projectsList[i].link).replace("%content%", formattedProjectOverlay);
    var cardMargin = "";
    if((i+1) % 3 == 0) {
        cardMargin = "mg-project-break";
    }
    var formattedProjectCard = HTMLprojectCard.replace("%data%", cardMargin).replace("%content%", formattedProjectLink).replace("%img%", projectsList[i].img);
    projectsContainer.append(formattedProjectCard);
}
