var bio = {
	"name": "Manuel Goulão",
	"role": "Student at Instituto Superior Técnico",
	"contacts": {
		"mobile": "960332864",
		"email": "msilvagoula@gmail.com",
		"github": "mgoulao",
		"twitter": "@mgoulao_1",
		"location": "Lisbon, Portugal"
	},
	"picture": "./resources/profile.jpg",
	"welcomeMessage": "I'm from Lisbon, Portugal and I'm studying Computer Science and Engineering at Instituto Superior Técnico.",
	"skills": ["C", "Python", "Java", "HTML", "CSS", "Javascript", "Android Development"]
};
var work = {
	"jobs": []/*[
		{
			"employer": "none",
			"title": "none",
			"location": "none",
			"datesWorked": "none",
			"description": "none"
		}
	]*/
};

var education = {
	"schools": [
		{
			"name": "Instituto Superior Técnico",
			"datesAttended": "2017 - 2020",
			"location": "Lisbon, Portugal",
			"degree": "Computer Science and Engineering",
			"url": "https://fenix.tecnico.ulisboa.pt/cursos/leic-t"
		}
	],
	"onlineCourses": [
		{
			"school": "Udacity",
			"title": "Android Basics Nanodegree, EU Scholarship",
			"completed": "July 2017",
			"url": "https://www.udacity.com/google-scholarships"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Shank",
			"img": "",
			"color": "mg-almost-black",
			"dates": "2019 - present",
			"description": "Shank is a free video analysis Web App, built with Reactjs, that helps golf players improve their swing.",
			"images": [],
			"link": "https://shank-swing.firebaseapp.com"
		},
		{
			"title": "Chess Mate",
			"img": "./chess/Wallpaper-big.png",
			"color": "mg-almost-black",
			"dates": "2017 - 2018",
			"description": "Google Assistant Action - Chess Mate, won the Actions on Google Challenge in the Best App by Students category.",
			"images": [],
			"link": "https://esteveste.github.io/Chess_Google_Assistant_Contest"
		},
		{
			"title": "Fuchsia Web Demo",
			"img": "",
			"color": "mg-probably-red",
			"dates": "2018 - 2018",
			"description": "Small Web Demo of the Armadillo Shell.",
			"images": [],
			"link": "https://mgoulao.github.io/fuchsia/"
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#mg-cv-about").prepend(formattedWelcomeMsg);
$("#mg-cv-about").prepend(formattedRole);
$("#mg-cv-about").prepend(formattedName);
$("#header").prepend(formattedBioPic);

var numProjects = projects.projects.length;

if (work.jobs.length > 0) {

	$("#workExperience").append(HTMLworkStart);

	for (i in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

		$(".work-entry:last").append(formattedEmployerWorkTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedDatesWorked);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}


for (var i = 0; i < numProjects; i++) {
	var formattedProjectStart = HTMLprojectStart.replace("%color%", projects.projects[i].color);

	$("#projects .mg-cv-card-container").append(formattedProjectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
	var formattedBottomContainer = HTMLprojectBottomContainer.replace("%date%", projects.projects[i].dates).replace("%desc%", projects.projects[i].description);

	$(".project-entry:last").append(formattedProjectTitle);
	$(".project-entry:last").append(formattedBottomContainer);
}


if (education.schools.length > 0 || education.onlineCourses.length > 0) {
	for (i in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		/* var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major); */

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		/* $(".education-entry:last").append(formattedSchoolMajor); */
	}

	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (i in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}

}