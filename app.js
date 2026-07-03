document.addEventListener("DOMContentLoaded", () => {
    const gpsButton = document.getElementById("gpsButton");

    gpsButton.addEventListener("click", () => {

        if (!navigator.geolocation) {
            alert("Denne browser understøtter ikke GPS.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert(
                    "Breddegrad: " + position.coords.latitude +
                    "\nLængdegrad: " + position.coords.longitude
                );
            },
            function(error) {
                alert("GPS-fejl: " + error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    });
});
