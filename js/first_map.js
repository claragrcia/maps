var mymap = L.map('map1').setView([10.657096, -71.623551], 12.11);

L.tileLayer('https://api.mapbox.com/styles/v1/claragrcia/cj9zxgovg6p642rnv51ik77oc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2xhcmFncmNpYSIsImEiOiJjajl6eGJ2bWExb3phMnFtZHg3dmt5amkzIn0.9r14gaJa-pSBCcnia7FSfQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var marker = L.marker([10.673460, -71.604388]).addTo(mymap);
marker.bindPopup("Colegio Bellas Artes.").openPopup();


var marker1 = L.marker([10.655534, -71.592512]).addTo(mymap);
marker1.bindPopup("Parque Vereda del Lago.").openPopup();

var marker2 = L.marker([10.588246, -71.713312]).addTo(mymap);
marker2.bindPopup("Botanical Gardens of Maracaibo.").openPopup();

var marker3 = L.marker([10.684067, -71.594469]).addTo(mymap);
marker3.bindPopup("Lago Mall.").openPopup();

var popup = L.popup();
