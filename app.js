document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("mapsButton").onclick = () => {

        window.open(
            "https://www.google.com/maps/d/viewer?mid=1gDs8klI6_od136Da73EF5AhGZRY3sfk",
            "_blank"
        );

    };

    document.getElementById("gpsButton").onclick = () => {

        if (!navigator.geolocation) {
            alert("GPS understøttes ikke.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {

                window.open(
                    `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`,
                    "_blank"
                );

            },
            (err) => {
                alert(err.message);
            },
            {
                enableHighAccuracy:true
            }
        );

    };

});
