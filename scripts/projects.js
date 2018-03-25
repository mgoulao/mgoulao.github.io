var projects = {
    "projects": [
        {
            "title": "Chess Mate",
            "img": "./chess/Wallpaper-big.png",
			"color": "mg-almost-black",
			"dates": "2017 - 2018",
			"description": "",
			"images": [],
            "link": "https://esteveste.github.io/Chess_Google_Assistant_Contest"
        },
        {
            "title": "Fuchsia Web Demo",
            "img": "",
            "color": "mg-probably-red",
            "dates": "2018 - present",
			"description": "Small Web Demo of the new Google OS project",
			"images": [],
            "link": "https://mgoulao.github.io/fuchsia/"
        },
        {
            "title": "Tesla Portugal",
            "img": "./resources/tesla-logo-big.png",
			"color": "mg-green",
			"dates": "2015 - 2017",
			"description": "",
			"images": [],
            "link": "https://teslaportugal.blogspot.com"
        },
        {
            "title": "EV Map",
            "img": "./resources/ev-map.webp",
			"color": "mg-kinda-purple",
			"dates": "2016 - 2017",
			"description": "",
			"images": [],
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
