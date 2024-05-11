var map = L.map('map').setView([-53.163833, -70.917068], 12); // Coordenadas y nivel de zoom inicial
        
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
L.marker([-53.163833, -70.917068]).addTo(map)
    .bindPopup('Punta Arenas, Chile')
    .openPopup();
