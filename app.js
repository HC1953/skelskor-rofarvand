const gpsButton = document.getElementById("gpsButton");

if (gpsButton) {
    gpsButton.addEventListener("click", () => {

        if (!navigator.geolocation) {
            alert("Din browser understøtter ikke GPS.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                window.open(
                    `https://www.google.com/maps?q=${lat},${lon}`,
                    "_blank"
                );

            },
            () => {
                alert("Kunne ikke hente din position.");
            }
        );

    });
}
