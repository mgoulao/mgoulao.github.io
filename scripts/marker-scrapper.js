var markerType = $("#type-marker").val();
console.log(markerType);
var url = "https://www.tesla.com/js/pt_PT/all-locations?type=" + markerType + "&bounds=46.831464969216206,9.872538407502361,34.381318580296316,-20.14211002999764.json";
$("#input-url").val(url);

var output = $("#output");
var chargers = [];

$("#go").click(function () {
    $.getJSON(url, function (data) {
        chargers = [];
        for (charger in data) {
            if (data[charger].address == null || data[charger].chargers == "") {
                continue;
            }
            var addressList = data[charger].address.split(",");
            var address = data[charger].address_line_1 + "\n" + addressList[addressList.length - 2] + "\n" + addressList[addressList.length - 1];

            if (data[charger].chargers.split("<br />").length > 1) {
                var jackList = data[charger].chargers.split("<br />")[1].split(",");
            } else {
                if (data[charger].chargers.split("<br/>").length == 1) {
                    continue;
                }
                var jackList = data[charger].chargers.split("<br/>")[1].split(",");
            }
            var jack = jackList[0];

            if (jackList[1] == undefined) {
                continue;
            }
            var power = "";
            if ((markerType == "destination_chargers" && jackList.length == 2) || jackList.length == 2) {
                power = "mais de" + jackList[1].split("to")[1];
                //console.log("power", power);
                //console.log("jaklist", jackList);
            } else if ((markerType == "supercharger" && jackList.length == 3) || jackList.length == 3) {
                power = "mais de" + jackList[2].split("to")[1];
            }

            var phoneList = data[charger].sales_phone;
            var phoneDic = phoneList[0];
            var phone = phoneDic.number;
            var type = "";
            if (data[charger].location_type[0].toUpperCase() == "DESTINATION CHARGER") {
                type = "destination";
            } else if (data[charger].location_type[0].toUpperCase() == "SUPERCHARGER") {
                type = "supercharger";
            }
            var dic = { "address": address, "jack": jack, "lat": parseFloat(data[charger].latitude), "lng": parseFloat(data[charger].longitude), "phone": phone, "power": power, "state": "Funciona", "time": "2.5 horas", "title": data[charger].title, "type": type };
            chargers.push(dic);
        }
        $("#output").empty();
        $("#output").append(JSON.stringify(chargers));
        $("#download").show();
        $("#update_database").show();
    });
});
/*
function download(json) {
    var jsonse = JSON.stringify(json);
    var a = document.createElement("a");
    var file = new Blob([jsonse], {type: "application/json"});
    a.href = URL.createObjectURL(file);
    a.download = "test.json";
    a.click();
}*/

function download(text) {
    var a = document.createElement("a");
    var file = new Blob([text], { type: 'application/json' });
    a.href = URL.createObjectURL(file);
    a.download = 'test.json';
    a.click();
}

$("#download").click(function () {
    download(JSON.stringify(chargers));
});

$("#type-marker").change(function () {
    markerType = $("#type-marker").val();
    console.log(markerType);
    url = "https://www.tesla.com/js/pt_PT/all-locations?type=" + markerType + "&bounds=46.831464969216206,9.872538407502361,34.381318580296316,-20.14211002999764.json";
    $("#input-url").val(url);
});


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

$("#update_database").click(function () {
    var databaseChargers = [];
    database.ref('/chargers').once('value').then(function (snapshot) {
        var nAdicionados = 0
        databaseChargers = snapshot.val();
        for (var x = 0; x < chargers.length; x++) {
            for (var i = 0; i < databaseChargers.length - 1; i++) {
                var existe = false;
                //console.log(databaseChargers[i]);
                //console.log(i);
                //console.log(databaseChargers[i].lat);
                if(databaseChargers[i] == undefined) {
                    continue;
                }
                if (databaseChargers[i].lat == chargers[x].lat) {
                    console.log("existe");
                    existe = true;
                    delete databaseChargers[i];
                    break;
                }
            }
            if (existe) {
                continue;
            } else {
                //add Charger to Database
                console.log("adiciona a database");
                database.ref('chargers/' + (snapshot.val().length + nAdicionados)).set(chargers[x]);
                nAdicionados++;
            }
        }
        $("#done").show();
    });
});
