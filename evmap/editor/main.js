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
var editorCard = $("#edit-card");
var markerInfo = $(".mg-marker-info");
var markerId = 0;


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
                map: map,
                id: i
            });
            markers.push(marker);

            google.maps.event.addListener(marker, 'click', function () {
                console.log("wd");
                showMoreInfo(this.id);
            });
        }

        var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', minimumClusterSize: 5 });



    });

}



function showMoreInfo(i) {
    console.log("more");
    console.log(i);
    markerId = i;
    database.ref('/chargers/' + i).once('value').then(function (snapshot) {
        var charger = snapshot.val();

        $("#edit-lat").val(charger.lat);
        $("#edit-lng").val(charger.lng);
        $("#marker-title").html(charger.title);
        $("#edit-title").val(charger.title);
        $("#marker-address").html(charger.address);
        $("#edit-address").val(charger.address);
        $("#marker-power").html(charger.power);
        $("#edit-power").val(charger.power);
        $("#marker-time").html(charger.time);
        $("#edit-time").val(charger.time);
        $("#marker-jack").html(charger.jack);
        $("#edit-jack").val(charger.jack);

        var address = charger.address;
        if (address == "") {
            address = "Desconhecida";
        }

        $("#marker-state").html(charger.state);
        if (charger.state == "Funciona") {
            $("#marker-state").css('background', '#43a047');
        } else if (charger.state == "Não Funciona") {
            $("#marker-state").css('background', '#ff0000');
        }


        $("#marker-phone").html(charger.phone);
        var web = "";
        var instructions = "";
        var email = "";
        if (charger.type == "supercharger" || charger.type == "destination") {
            web = "https://www.tesla.com";
            instructions = "Para utilizar a Rede MOBI.E, o utilizador deve: <br> Para iniciar o carregamento: <br> 1. Passar o Cartão MOBI.E no posto central <br> 2. Seleccionar a opção Carregamento <br> 3. Indicar o número do ponto mais próximo ao veículo <br> 4. Ligar a ficha ao veiculo e depois ao ponto de carregamento. O carregamento tem início quando o indicador luminoso fica azul <br> Para finalizar o carregamento: <br> 1. Voltar a passar o Cartão MOBI.E no posto central <br> 2. Selecionar a opção Terminar Carregamento <br> 3. O posto é desbloqueado e o indicador luminoso passa a verde <br> 4. Retirar a ficha do veículo e do ponto <br> 5. Fechar a tampa <br> 6. O indicador luminoso muda para azul, indicando que o posto de carregamento está novamente disponível <br> No equipamento, podem ainda ser realizadas operações simples, como consulta de saldo mudança de PIN, entre outras</h4>";
            email = "ServiceHelpEU@tesla.com";
            if (charger.type == "supercharger") {
                $(".mg-marker-info-head").css('background', '#ff0000');
                $("#edit-marker").css('background', '#4b4b4b');
            } else {
                $(".mg-marker-info-head").css('background', '#4b4b4b');
                $("#edit-marker").css('background', '#ff0000');
            }
        } else if (charger.type == "normal" || charger.type == "pcr") {
            web = "https://www.mobie.pt/";
            instructions = "Apenas carros Tesla podem ser carregados";
            email = "info@mobie.pt";
            if (charger.type == "normal") {
                $(".mg-marker-info-head").css('background', '#006df0');
            } else {
                $(".mg-marker-info-head").css('background', '#001884');
            }
        }
        $("#marker-web").html(web);
        $("#marker-instructions").html(instructions);
        $("#marker-email").html(email);
    });
    $(".mg-marker-info").show();


}

// Obfuscator Listener
$(".obscurator").click(function () {
    input.style.display = "none";
    obscurator.hide();
})

$("#search").click(function () {
    input.style.display = "block";
    obscurator.show();
    markerInfo.hide();
})

// Close marker info Card
$("#close-info").click(function () {
    markerInfo.hide();

});

$("#report-button").click(function (e) {
    e.stopPropagation();
    $('.report-state-card').show();
    $("#info-card-obscurator").show();
});

$(document).click(function (e) {
    $('.report-state-card').hide();
    $("#info-card-obscurator").hide();
});

$('.report-state-card').click(function (e) {
    e.stopPropagation();
});

$("#edit-marker").click(function () {
    obscurator.show();
    editorCard.show();
    markerInfo.hide();
});

$("#close-edit").click(function () {
    obscurator.hide();
    editorCard.hide();
    markerInfo.show();
});

//Save edits to Firebase
$("#save-edit").click(function () {
    obscurator.hide();
    editorCard.hide();
    markerInfo.show();
    var eTitle = $("#edit-title").val();
    var eLat = parseFloat($("#edit-lat").val());
    var eLng = parseFloat($("#edit-lng").val());
    var eAddress = $("#edit-address").val();
    var ePower = $("#edit-power").val();
    var eTime = $("#edit-time").val();
    var eJack = $("#edit-jack").val();
    database.ref("chargers/" + markerId).update({ 
        title: eTitle,
        lat: eLat,
        lng: eLng,
        address: eAddress,
        power:  ePower,
        time: eTime,
        jack: eJack
     });
     showMoreInfo(markerId);
});
