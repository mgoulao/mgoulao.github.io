var url = "https://www.tesla.com/js/pt_PT/all-locations?type=destination_chargers&bounds=46.831464969216206,9.872538407502361,34.381318580296316,-20.14211002999764.json";
$("#input-url").val(url);

var output = $("#output");
var chargers = [];

$("#go").click(function () {
    $.getJSON(url, function (data) {
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
            var power = "mais de" + jackList[1].split("to")[1];
            var phoneList = data[charger].sales_phone;
            var phoneDic = phoneList[0];
            var phone = phoneDic.number;
            var type = "";
            if (data[charger].location_type[0] == "destination charger") {
                type = "destination";
            }

            var dic = { "address": address, "jack": jack, "lat": parseFloat(data[charger].latitude), "lng": parseFloat(data[charger].longitude), "phone": phone, "power": power, "state": "Funciona", "time": "2.5 horas", "title": data[charger].title, "type": type };
            chargers.push(dic);
        }
        $("#output").append(JSON.stringify(chargers));
        $("#download").show();
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
