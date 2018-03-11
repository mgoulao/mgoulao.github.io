'use strict';

function getMonth(m) {
    switch (m) {
        case 1: m = "JAN";
            break;
        case 2: m = "FEB";
            break;
        case 3: m = "MAR";
            break;
        case 4: m = "APR";
            break;
        case 5: m = "MAY";
            break;
        case 6: m = "JUN";
            break;
        case 7: m = "JUL";
            break;
        case 8: m = "AUG";
            break;
        case 9: m = "SEP";
            break;
        case 10: m = "OCT";
            break;
        case 11: m = "NOV";
            break;
        case 12: m = "DEC";
            break;
    }
    return m;
}

function getWeekDay(d) {
    var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    return days[d];
}
$(document).ready(function () {
    var navbarTime = $("#navbar_time");
    var navbar = $(".navbar");
    var homeButton = $("#home_button");
    var menu = $("#menu");
    var statusMenu = $("#menu_2");
    var home = $("#home");
    var lockScreen = $("#lockscreen");
    var lockOptionsButton = $("#lock_options_button");
    var lockOptions = $(".lock_options");
    var closeLockOptions = $("#lock_options_close");
    var guestButton = $("#lock_options_guest");
    var loginLoader = $("#login_loader");
    var lockHour = $("#lockscreen_hour");
    var batteryLevel = $(".battery_level");
    var batteryIcon = $(".battery_icon");
    var statusTime = $(".status_hour");
    var statusDay = $(".status_day");
    var statusUserImage = $(".fuchsia");
    var statusLocation = $(".status_location");
    var signOutButton = $(".signout");
    var searchInput = $(".search_input");
    var card = $(".card");
    var openedApp = $("#opened_app");
    var openedAppContent = $("#app_content");
    var openedAppHeader = $("#opened_app header");
    var openedAppObj;
    //Draggable
    var slideHeight = $('body').height() * 0.5;
    var min = 0;
    var max = -slideHeight;

    //Date 
    var today = new Date();
    var day = today.getDay();
    var date = today.getDate();
    var month = today.getMonth();
    statusDay.text(getWeekDay(day) + ", " + getMonth(month) + " " + date);
    //Time
    function updateTime() {
        today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        if (m < 10) { m = "0" + m };

        statusTime.text(h + ":" + m);
        lockHour.text(h + ":" + m);
        setTimeout(updateTime, 30000);
    }
    updateTime();

    $(document).click(function () {
        if (statusMenu.hasClass("active")) {
            statusMenu.removeClass("active");
            showHome();
        } else if (menu.hasClass("active")) {
            menu.removeClass("active");
        }
    });

    searchInput.click(function () {
        event.stopPropagation();
        home.css({ "top": max + "px" });
    });

    lockOptionsButton.click(function () {
        lockOptionsButton.hide();
        lockOptions.addClass("active");
    });

    closeLockOptions.click(function () {
        lockOptions.removeClass("active");
        lockOptionsButton.show();
    });

    guestButton.click(function () {
        lockHour.hide();
        loginLoader.show();
        setTimeout(function () {
            loginLoader.hide();
            lockScreen.hide();
            lockHour.show();
            lockOptionsButton.show();
            lockOptions.removeClass("active");
        }, 2000);

    });

    navbarTime.click(function () {
        event.stopPropagation();
        console.log("click time");
        if (menu.hasClass("active")) {
            menu.removeClass("active");
        } else {
            menu.addClass("active");
        }
    });

    menu.click(function () {
        event.stopPropagation();
    })

    statusUserImage.click(function () {

        if (statusMenu.hasClass("active")) {
            statusMenu.removeClass("active");
            showHome();
        } else {
            statusMenu.addClass("active");
            hideHome();

        }
    });

    statusMenu.click(function () {
        event.stopPropagation();
    });

    signOutButton.click(function () {
        lockScreen.show();
        statusMenu.removeClass("active");
        showHome();
    });

    homeButton.click(function () {
        openedAppObj.close();
        showHome();
    });

    function hideHome() {
        event.stopPropagation();
        home.css({ "top": "0px" });
        home.css({ "transform": "translateY(50%)" });
    }

    function showHome() {
        event.stopPropagation();
        home.css({ "top": "0px" });
        home.css({ "transform": "translateY(0px)" });
        hideNavBar();
    }

    function showNavBar() {
        navbar.show();
    }

    function hideNavBar() {
        navbar.hide();
    }

    card.click(function (e) {
        console.log("Click Card: ", e.currentTarget.id);
        var cardId = e.currentTarget.id;
        openedAppObj = new App(cardId);
    });

    Number.prototype.roundTo = function (nTo) {
        nTo = nTo || 10;
        return Math.round(this * (1 / nTo)) * nTo;
    }

    console.log("Max", max);
    home.draggable({
        axis: "y",
        scroll: false,
        position: 'unset',
        drag: function (event, ui) {
            if (ui.position.top > min) ui.position.top = min;
            if (ui.position.top < max) ui.position.top = max;
        },
        stop: function (event, ui) {
            var topPositionRounded = (ui.position.top).roundTo(slideHeight);

            $(this).animate({
                'top': topPositionRounded
            });
        }
    });

    navigator.getBattery().then(function (battery) {
        function updateAllBatteryInfo() {
            updateChargeLevel();
            updateChargeInfo();
        }
        updateAllBatteryInfo();

        battery.addEventListener('chargingchange', function () {
            updateChargeLevel();
        });
        function updateChargeLevel() {
            batteryLevel.text(Math.round(battery.level * 100) + " %")
        }

        battery.addEventListener('chargingchange', function () {
            updateChargeInfo();
        });
        function updateChargeInfo() {
            batteryIcon.html(battery.charging ? "battery_charging_full" : "battery_full");
            console.log("Battery charging? "
                + (battery.charging ? "Yes" : "No"));
        }

    });

    //Get User Location
    function codeLatLng(lat, lng) {
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results)
                var location = results[13].formatted_address;
                statusLocation.text("in " + location);
            } else {
                alert("Geocoder failed due to: " + status);
            }
        });
    }


    function success(pos) {
        var crd = pos.coords;
        var lat = crd.latitude;
        var lng = crd.longitude;
        codeLatLng(lat, lng)
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);

    var appData = {
        "inbox": {
            "title": "Inbox",
            "color": "#4285f4",
            "content": "<h2>Content</h2>"
        },
        "recipes": {
            "title": "Recipes",
            "color": "#455A64",
            "content": "<h2>Content</h2>"
        },
        "maps": {
            "title": "Maps",
            "color": "#689df6",
            "content": "Content"
        }
    }

    class App {
        constructor(id) {
            this.title = appData[id].title;
            this.color = appData[id].color;
            this.content = appData[id].content;
            this.open();
        }

        open() {
            console.log("Open App");
            hideHome();
            showNavBar();
            openedAppHeader.text(this.title);
            openedAppHeader.css({"background": this.color});
            openedAppContent.html(this.content);
            openedApp.addClass("active");
        }
        close() {
            console.log("Close App");
            showHome();
            hideNavBar();
            openedApp.removeClass("active");
        }
    }

})



