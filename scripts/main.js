"use strict";

var projectsList = [
	{
		title: "TypeSpaceArcade",
		type: "Peer-to-Peer Html 5 Game",
		link: "https://typespacearcade.web.app",
		content:
			'An HTML 5 Arcade game that uses Peer-to-Peer technology for multiplayer',
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M21,6H3A2,2 0 0,0 1,8V16A2,2 0 0,0 3,18H21A2,2 0 0,0 23,16V8A2,2 0 0,0 21,6M21,16H3V8H21M6,15H8V13H10V11H8V9H6V11H4V13H6M14.5,12A1.5,1.5 0 0,1 16,13.5A1.5,1.5 0 0,1 14.5,15A1.5,1.5 0 0,1 13,13.5A1.5,1.5 0 0,1 14.5,12M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9Z" /></svg>']
	},
	{
		title: "Shank",
		type: "Web App",
		link: "https://shank-swing.web.app/",
		content:
			'Shank is a free video analysis tool that helps players improve their game',
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" /></svg>',
		]
	},
	{
		title: "Chess Mate",
		type: "Google Assistant",
		link: "https://esteveste.github.io/Chess_Google_Assistant_Contest",
		content:
			'Chess Mate is a Google Assistant Action that allows you to play chess using only your voice. The app won the Google Actions Developed Contest in the category "made by students". <br> Developed by me and Bernardo Esteves',
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M7,2A6,6 0 0,0 1,8A6,6 0 0,0 7,14A6,6 0 0,0 13,8A6,6 0 0,0 7,2M21.5,6A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 21.5,9A1.5,1.5 0 0,0 23,7.5A1.5,1.5 0 0,0 21.5,6M17,8A3,3 0 0,0 14,11A3,3 0 0,0 17,14A3,3 0 0,0 20,11A3,3 0 0,0 17,8M17,15A3.5,3.5 0 0,0 13.5,18.5A3.5,3.5 0 0,0 17,22A3.5,3.5 0 0,0 20.5,18.5A3.5,3.5 0 0,0 17,15Z" /></svg>'
		]
	},
	{
		title: "Fuchsia Web Demo",
		type: "Website",
		link: "https://mgoulao.github.io/fuchsia",
		content:
			"The Fuchsia Web Demo tries to simulate the UI and animations of Fuchsia OS. So anyone can experience a little bit of the OS Google is developing.",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />'
		]
	},
	{
		title: "Vibrant Card Swipe",
		type: "Web template",
		link: "https://github.com/mgoulao/Vibrant-Card-Swipe",
		content:
			"A library with cool card swipe concepts",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />'
		]
	},
	{
		title: "Open Camera New Design",
		type: "Android App",
		link: "https://github.com/mgoulao/Open-Camera",
		content:
			"Open Camera is the most famous open source Camera App for Android. So I have changed the UI to be more modern and clean",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z" /></svg>'
		]
	}
];

var dicWithColors = {
	"0": ["#4CB8C4", "#3CD3AD"],
	"1": ["#f05d6f", "#f9b252"],
	"2": ["#536be6", "#63b3ec"],
	"3": ["#807d6e", "#fcd82f"],
	"4": ["#2e3e50", "#53bd9c"],
	"5": ["#32abda", "#fdd4a4"]
};

Number.prototype.roundTo = function (nTo) {
	nTo = nTo || 10;
	return Math.round(this * (1 / nTo)) * nTo;
};

var windowWidth = window.innerWidth,
	windowHeight = window.innerHeight;

$(document).ready(function () {
	var slideCardsContainer = $(".cards-container");

	createCardList(slideCardsContainer);

	setupDraggableCards();

	handleClicks();

	//Welcome message for terminal 
	console.log("%cWelcome to my personal Portefolio",
		"border-radius:14px; color: #fff; background-color: #0D47A1; padding: 4px 8px;" +
		"font-size: 16px");
	console.log("You can fork this site template at: " +
		"https://github.com/mgoulao/Vibrant-Card-Swipe");
});

function handleClicks() {
	var slideCardsContainer = $(".cards-container"),
		cardList = $("#slider ul"),
		profileImage = $(".profile-image"),
		moreMenuBtn = $(".more-menu-btn"),
		menu = $("#more_menu"),
		obfuscator = $(".obfuscator"),
		card = $(".cards-container .card"),
		projectCard = $("#project");

	var dragPosition = 0;

	var projectDesktop = {
		open: e => {
			console.log(projectCard[0]);
			projectCard[0].innerHTML = e.currentTarget.innerHTML;
			projectCard.show();
			obfuscator.fadeTo("fast", 1, () => obfuscator.show());
		},
		close: () => {
			projectCard.hide();
			obfuscator.fadeTo("fast", 0, () => obfuscator.hide());
		}
	};

	var menuMore = {
		open: () => {
			menu.addClass("active");
			obfuscator.fadeTo("fast", 1, () => obfuscator.show());
		},
		close: () => {
			menu.removeClass("active");
			obfuscator.fadeTo("fast", 0, () => obfuscator.hide());
		}
	};

	profileImage.click(() => menuMore.open());
	moreMenuBtn.click(() => menuMore.open());
	obfuscator.click(() => {
		menuMore.close();
		projectDesktop.close();
	});

	card.on("mousedown", function () {
		if (slideCardsContainer[0].style["left"] == "") dragPosition = 0;
		else dragPosition = parseInt(slideCardsContainer[0].style["left"]);
	});

	card.on("click", function (e) {
		var currentDragPosition =
			slideCardsContainer[0].style["left"] == ""
				? 0
				: parseInt(slideCardsContainer[0].style["left"]);
		if (currentDragPosition == dragPosition) {
			if (window.innerWidth < 600) {
				var target = $(e.currentTarget);
				if (target.hasClass("active")) {
					target.removeClass("active");
					cardList.draggable("enable");
				} else {
					target.addClass("active");
					cardList.draggable("disable");
				}
			} else projectDesktop.open(e);
		}
	});

	window.visualViewport.addEventListener("resize", function () {
		console.log("window resize");
	});
}

function getCardPadding() {
	var cards = $(".card");
	return 2 * parseInt(cards.css("paddingLeft"));
}

function getCardMargin() {
	var cards = $(".card");
	return 2 * parseInt(cards.css("marginLeft"));
}

function getSliderWidth() {
	var bodyWidth = $("body").width(),
		cards = $(".card"),
		numberOfSlides = $("#slider ul").children().length - 1;

	if (bodyWidth < 600) return $("body").width() * numberOfSlides;
	else
		return (
			(cards.width() + getCardPadding() + getCardMargin()) * numberOfSlides
		);
}

function createSliderIndicator(numberOfSlides) {
	var sliderDiv = $("#slider");
	let sliderIndicator = document.createElement("div");
	let sliderIndicatorContainer = document.createElement("div");
	sliderIndicator.setAttribute("id", "sliderIndicator");
	sliderIndicatorContainer.setAttribute("id", "sliderIndicatorContainer");
	sliderIndicator.appendChild(sliderIndicatorContainer);
	sliderDiv.append(sliderIndicator);
	for (let i = 0; i < numberOfSlides + 1; i++) {
		let indicator = document.createElement("div");
		if (i == 0) indicator.setAttribute("class", "indicator active");
		else indicator.setAttribute("class", "indicator");
		sliderIndicatorContainer.appendChild(indicator);
	}
}

function setupDraggableCards() {
	var cardList = $("#slider ul"),
		numberOfSlides = $("#slider ul").children().length - 1,
		sliderWidth = getSliderWidth();

	var min = 0,
		max = -sliderWidth,
		currentSlide = 0,
		numberOfColors = Object.keys(dicWithColors).length;

	var startTime = 0,
		endTime = 0,
		startPosition = 0,
		endPosition = 0;

	createSliderIndicator(numberOfSlides);

	cardList.draggable({
		cursor: "pointer",
		position: "unset",
		axis: "x",
		drag: function (event, ui) {
			$(this).clearQueue();
			if (ui.position.left > min) ui.position.left = min;
			if (ui.position.left < max) ui.position.left = max;
			ui.position.top = 0;
			//Set start drag time
			if (!startTime) {
				startTime = Date.now();
				startPosition = ui.position.left;
			}
		},
		stop: function (event, ui) {
			endTime = Date.now();
			endPosition = ui.position.left;
			var dragTime = endTime - startTime;
			var sliderLeftPosition =
				endPosition +
				Math.sign(startPosition > endPosition ? -1 : 1) *
				($(".card").width() / 2) *
				(50 / (2 + dragTime));
			if (sliderLeftPosition < max) sliderLeftPosition = max;
			if (sliderLeftPosition > min) sliderLeftPosition = min;
			var leftPositionRounded = sliderLeftPosition.roundTo(
				sliderWidth / numberOfSlides
			);
			$(this).animate({
				left: leftPositionRounded
			});
			currentSlide = -leftPositionRounded / (sliderWidth / numberOfSlides);

			$("#sliderIndicatorContainer .indicator").removeClass("active");
			$($("#sliderIndicatorContainer .indicator")[currentSlide]).addClass(
				"active"
			);

			$("body").css(
				"background",
				"linear-gradient(to top right, " +
				dicWithColors[currentSlide % numberOfColors][0] +
				", " +
				dicWithColors[currentSlide % numberOfColors][1] +
				")"
			);
			$("meta[name='theme-color']").attr(
				"content",
				dicWithColors[currentSlide % numberOfColors][0]
			);
			startTime = 0;
		}
	});
}

function createCardList(slideCardsContainer) {
	let bodyWidth = $("body").width();

	$("body").css(
		"background",
		"linear-gradient(to top right, " +
		dicWithColors[0][0] +
		", " +
		dicWithColors[0][1] +
		")"
	);

	for (var i = 0; i < projectsList.length; i++) {
		var icons = "";
		for (var j = 0; j < projectsList[i].icons.length; j++) {
			icons += '<div class="icon">' + projectsList[i].icons[j] + "</div>";
		}

		slideCardsContainer.append(
			'<li class="card">' +
			'</div>' +
			'<div class="card-icons">' +
			icons +
			'</div>' +
			'<div class="card-header">' +
			'<span class="card-type">' +
			projectsList[i].type +
			'</span>' +
			'<span class="card-title">' +
			projectsList[i].title +
			'</span>' +
			'<div class="card_content">' +
			projectsList[i].content +
			'<a href="' +
			projectsList[i].link + '">' +
			'<button style="background: linear-gradient(to top right, ' +
			dicWithColors[i % Object.keys(dicWithColors).length][0] +
			", " +
			dicWithColors[i % Object.keys(dicWithColors).length][1] +
			')" rel="noreferrer">See More</button>' +
			'</a></div></div>' +
			"</li>"
		);
	}
	$("meta[name='theme-color']").attr("content", dicWithColors[0][0]);
}

window.addEventListener("orientationchange", function () {
	location.reload();
});
