// Initialize Firebase
var config = {
    apiKey: "AIzaSyApd1WL6ppU7jdaPmoPGS5AqfUE8pd9dhY",
    authDomain: "fluted-polymer-112520.firebaseapp.com",
    databaseURL: "https://fluted-polymer-112520.firebaseio.com",
    projectId: "fluted-polymer-112520",
    storageBucket: "",
    messagingSenderId: "76595648603"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

var map;
var input = document.getElementById('search-input');
var obscurator = $(".obscurator");


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.301657, lng: -7.601913 },
        zoom: 7,
        fullscreenControl: false
    });


    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
        }
        map.setZoom(13);
        input.style.display = "none";
        obscurator.hide();

    });

    var icons = {
        supercharger: {
            icon: 'tesla_icon.png'
        },
        destination: {
            icon: 'destination_icon.png'
        },
        normal: {
            icon: 'mobie_icon.png'
        },
        pcr: {
            icon: 'pcr_icon.png'
        }
    };




    database.ref('/chargers').once('value').then(function (snapshot) {
        databaseChargers = snapshot.val();
        var markers = [];
        for (var i = 0; i < databaseChargers.length; i++) {
            currentMarker = databaseChargers[i];
            console.log(currentMarker.type);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(currentMarker.lat, currentMarker.lng),
                icon: icons[currentMarker.type].icon,
                map: map
            });
            markers.push(marker);
            marker.addListener('click', function() {
                showMoreInfo(marker, i);
              });
        }

        var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', minimumClusterSize: 5 });



    });

}

function showMoreInfo(marker, i) {
    console.log("more");
}

$(".obscurator").click(function () {
    input.style.display = "none";
    obscurator.hide();
})

$("#search").click(function () {
    input.style.display = "block";
    obscurator.show();
})