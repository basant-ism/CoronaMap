function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
function updateMap() {
  fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
    .then((Response) => Response.json())
    .then((rsp) => {
      console.log(rsp);
      rsp.forEach((element) => {
        latitude = element.countryInfo.lat;
        longitude = element.countryInfo.long;

        cases = element.cases / 1800;
        // if (cases > 255) {
        //   color = "rgb(255,0,0)";
        // } else {
        color = `rgb(${cases},0,0)`;
        //}

        //Mark on the map
        console.log(latitude, longitude);
        if (isNumber(latitude) & isNumber(longitude)) {
          new mapboxgl.Marker({
            draggable: false,
            color: color,
          })
            .setLngLat([longitude, latitude])

            .addTo(map);
        }
      });
    });
}
let interval = 2000;
updateMap();
setInterval(updateMap, interval);
//
