
$(document).ready(function(){
    var styles = {
        retro: [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
            }
        ],

        hiding: [
            {
                featureType: 'poi.business',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            }
        ]
    };

    var daysCount = 3;
    var lat = 29.4241;
    var lon = -98.4936;
    var weatherCenter = { lat: lat, lng: lon };
    var map;
    var mapDisplay = document.getElementById('map');
    var options = {
        zoom: 4,
        center: {
            lat: lat,
            lng: lon
        }
    };
    var counter = 0;
    var date = new Date();
    var day = (date.getDay());
    var datenumber = date.getDate();
    var month = date.getMonth();
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayArray =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var optionsOnOff = {
        dayButton: "on",
        nightButton: "on",
        pressureButton: "on",
        humidityButton: "on",
        windButton: "on",
        iconButton: "on"
    }
    var whichButton;
    var buttonEvent = false;

    var marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lon
        },
        map: map,
        draggable: true
    });

    function initMap() {

        map = new google.maps.Map(mapDisplay, options);
        map.setOptions({styles: styles.retro});

    }

    function toggleDisplays (whichButton){

        switch (whichButton){
            case "dayButton":
                $(".dayTemp").toggle();
                if (optionsOnOff.dayButton === "on" && buttonEvent){
                    optionsOnOff.dayButton= "off";
                }
                else if (optionsOnOff.dayButton === "off"  && buttonEvent){
                    optionsOnOff.dayButton = "on";
                }
                break;
            case "nightButton":
                $(".nightTemp").toggle();
                if (optionsOnOff.nightButton  === "on" && buttonEvent){
                    optionsOnOff.nightButton = "off";
                }
                else if (optionsOnOff.nightButton  === "off" && buttonEvent){
                    optionsOnOff.nightButton = "on";
                }
                break;
            case "pressureButton":
                $(".pressure").toggle();
                if (optionsOnOff.pressureButton === "on" && buttonEvent){
                    optionsOnOff.pressureButton = "off";
                }
                else if (optionsOnOff.pressureButton === "off" && buttonEvent){
                    optionsOnOff.pressureButton = "on";
                }
                break;
            case "humidityButton":
                $(".humidity").toggle();
                if (optionsOnOff.humidityButton === "on" && buttonEvent){
                    optionsOnOff.humidityButton = "off";
                }
                else if (optionsOnOff.humidityButton === "off" && buttonEvent) {
                    optionsOnOff.humidityButton = "on";
                }
                break;
            case "windButton":
                $(".wind").toggle();
                if (optionsOnOff.windButton === "on" && buttonEvent){
                    optionsOnOff.windButton = "off";
                }
                else if (optionsOnOff.windButton === "off" && buttonEvent){
                    optionsOnOff.windButton = "on";
                }
                break;
            case "iconButton":
                $("img").toggle();
                if (optionsOnOff.iconButton === "on" && buttonEvent){
                    optionsOnOff.iconButton = "off";
                }
                else if (optionsOnOff.iconButton === "off" && buttonEvent){
                    optionsOnOff.iconButton = "on";
                }
                break;
        }
        buttonEvent = false;
    }

    function getCurrentWeather () { // gets location from map to get current weather for the map marker info box
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: "cf5050c0c4303753a04239e865a2dd5c",
            lat: lat,
            lon: lon,
            units: "imperial"
        }).done(function (data) {
            var currenttemp = Math.floor(data.main.temp);
            var contentString = "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>Current Temperature: "+currenttemp + "&deg;"+ "<br>Current Conditions: "+ data.weather[0].description +"";
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            infowindow.open(map, marker);
        });
    }

    function getWeather () {
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "cf5050c0c4303753a04239e865a2dd5c",
            lat: lat,
            lon: lon,
            units: "imperial",
            cnt: daysCount
        }).done(function (data) {
            day = (date.getDay());
            datenumber = date.getDate();
            counter = 0;
            data.list.forEach(function (i) {
                if (day==7){
                    day=0;
                }
                var forecastFill = "";
                forecastFill += "<div id='forecast"+counter+"' class='forecastDivs'>";
                forecastFill += "<h3>"+dayArray[day]+" "+ monthArray[month]+ " "+datenumber+"</h3>";
                forecastFill += "<img src='http://openweathermap.org/img/w/" + i.weather[0].icon + ".png'>&nbsp&nbsp";
                forecastFill += "<span class='temp dayTemp'>" + parseInt(i.temp.day) + "&deg;Day </span>&nbsp";
                forecastFill += "<span class='temp nightTemp'>" + parseInt(i.temp.night) + "&deg; Night</span><br>";
                forecastFill += "<span class='titles weathMain'>" + i.weather[0].main + ":</span>  " + i.weather[0].description+"&nbsp&nbsp";
                forecastFill += "<span class='humidity'><span class='titles'>Humidity:</span>   " + i.humidity +"</span><br>";
                forecastFill += "<span class='wind'><span class='titles'>Wind: </span>  " + i.speed + "&nbsp &nbsp</span>";
                forecastFill += "<span class='pressure'><span class='titles'>Pressure: </span>  " + i.pressure+"</span></div>";
                $("#forcastDivsContainer").append(forecastFill);
                counter++;
                day++;
                if ((month == 8 || month == 3 || month ==  5 || month == 10) && datenumber==30){
                    datenumber=1;
                    month++;
                }
                else if ((month == 9 || month == 11 || month == 0 || month == 2 || month == 4 || month == 6 || month == 7) && datenumber==31){
                    datenumber=1;
                    month++;
                }
                else if (month==2 && datenumber==28){
                    datenumber = 1;
                    month++;
                }
                else datenumber++;
            });
            var cityName = data.city.name;
            $("#cityName").text(cityName);
            for(key in optionsOnOff) {
                if (optionsOnOff[key] === "off") {
                    toggleDisplays(key);
                }
            }
        }).fail(function (data) {
            console.log(data.statusText);
        });
    }


    initMap();

    $.ajax(getWeather());

    $.ajax(getCurrentWeather());

    $("#daysDisplayButton").click(function () {
        $("#daysOptions").toggle();
    });

    marker.addListener('dragend', function(event){

        for (var c = 0; c < daysCount; c++){
            id = "#forecast"+c;
            $(id).remove();
        }
        day = (date.getDay());
        lat = event.latLng.lat();
        lon = event.latLng.lng();
        options.center.lng = lon;
        options.center.lat = lat;
        $.ajax(getWeather());
        $.ajax(getCurrentWeather());

    });

    $("#weatherButton").click(function(){
        for (var c = 0; c < daysCount; c++){
            id = "#forecast"+c;
            console.log(id);
            $(id).remove();
        }
        day = (date.getDay());
        var address = $("#findAddress").val();
        if (address == "") {
            lat = parseFloat($("#lat").val());
            lon = parseFloat($("#lon").val());
            weatherCenter = {lat: lat, lng: lon};
            options.center.lat = lat;
            options.center.lng = lon;
            getWeather();
            marker.setPosition({lat: lat, lng: lon});
            getCurrentWeather();

        }
        else {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ "address": address }, function(results, status) {
                console.log(results);
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    lat = results[0].geometry.location.lat();
                    lon =  results[0].geometry.location.lng();
                    options.center.lat = lat;
                    options.center.lng = lon;
                    getWeather();
                    marker.setPosition({lat: lat, lng: lon})
                    getCurrentWeather();
                } else {
                    alert("Geocoding was not successful - STATUS: " + status);
                }
            });
        }

    });

    $("#limitsButton").click(function () {
        $("#options").toggle();
    });

    $("#options .buttonWraps").click(function () {
        whichButton = $(this).attr("id");
        buttonEvent = true;
        toggleDisplays(whichButton);
    });

    $("#daysButtons .buttonWraps").click(function(){

        $('.forecastDivs').remove();
        day = (date.getDay());
        var whichDays = $(this).attr("id");
        switch (whichDays){
            case "threeDaysButton":
                daysCount = 3;
                break;
            case "sixDaysButton":
                daysCount = 6;
                $("#forcastDivsContainer").css("width", "100%");
                $("#forcastDivsContainer").css("height", "20%");
                break;
            case "fifteenDaysButton":
                daysCount = 15;
                $("#forcastDivsContainer").css("width", "100%");
                $("#forcastDivsContainer").css("height", "20%");
        }

        getWeather();
        getCurrentWeather();
//            $(".pressure").prepend("<br>");
    });


});
