let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -22.926763, lng: 43.209655 },
    zoom: 8,
  });
}

initMap();