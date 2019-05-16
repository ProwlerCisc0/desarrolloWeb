

    var map = L.map('mapa').setView([-33.377564, -70.688326], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-33.377564, -70.688326]).addTo(map)
.bindPopup('Mi casa compa.<br> pa que se saque un pitito.')
.openPopup();