// check for geolocation
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude); //load weather using your lat/lng coordinates
    });
}
else {
    $('.temp').text('error');
    $('.error').addClass('window-show');
    $('.modal-shadow').addClass('window-show');
}

$(document).ready(function() {
    loadWeather('Saint-Petersburg', '');
    $('.modal-shadow').click(function() {
        $(this).removeClass("window-show");
        $('.error').removeClass("window-show");

    });
});
var fahr;
var cel;
function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
            city = weather.city;
            tempC = weather.temp + '&deg;' + 'C';
            wind = weather.wind.speed + weather.units.speed;
            current = weather.currently;
            $(".location").text(city);
            $(".temp").html(tempC);
            $(".wind").text(wind);
            $(".current").html(current);
            cel = weather.temp;
            fahr = cel * 9 / 5 + 32;
            //background images
            if (weather.temp <= 5) {
                $(".wrapper").addClass("cold");
            }
            else if (weather.temp > 5 && weather.temp <= 15) {
                $(".wrapper").addClass("normal");
            }
            else if (weather.temp > 15 && weather.temp <= 25) {
                $(".wrapper").addClass("warm");
            }
            else if (weather.temp > 25 && weather.temp <= 35) {
                $(".wrapper").addClass("hot");
            }
            else if (weather.temp > 35) {
                $(".wrapper").addClass("extra-hot");    
            }
        }, //success closed

        error: function(error) {
            $(".temp").html(error);
            $('.error').addClass('window-show');
            $('.modal-shadow').addClass('window-show');
        }
    }); //simple weather closed

    //Changing Fahr and Cels
    var p = 0;
    $(".temp").click(function() {
        if (p % 2 == 0) {
            $(this).html(fahr + "&deg;" + "F");
        }
        else {
            $(this).html(cel + "&deg;" + "C");
        }
        p++;
    });
}

