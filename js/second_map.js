var mymap = L.map('map2').setView([8.129525, -65.456210], 5.00);

L.tileLayer('https://api.mapbox.com/styles/v1/claragrcia/cj9zxgovg6p642rnv51ik77oc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2xhcmFncmNpYSIsImEiOiJjajl6eGJ2bWExb3phMnFtZHg3dmt5amkzIn0.9r14gaJa-pSBCcnia7FSfQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);


 for ( var i=0; i < places.length; i++ ) {
   L.marker( [places[i].latitude, places[i].longitude] )
     .bindPopup('<h3>' + places [i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
     .addTo( mymap );
  }
