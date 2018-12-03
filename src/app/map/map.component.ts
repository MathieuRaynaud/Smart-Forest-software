import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    pinClicked = 'none';

    lat = 42.498167;
    lon = 3.026309;
    devices = [
        {name: 'Gateway',
            lat: 42.498167,
            lon: 3.026309 },
        {name: 'River',
            lat: 42.489569,
            lon: 3.054538},
        {name: 'Church',
            lat: 42.528080,
            lon: 2.999987},
        {name: 'Test',
            lat: 43.528080,
            lon: 4.999987}
    ];

    constructor() { }

    ngOnInit() {
        // Créer l'objet "mymap" et l'insèrer dans l'élément HTML qui a l'ID "map"
        const mymap = L.map('map').setView([this.lat, this.lon], 13);
        // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            // Il est toujours bien de laisser le lien vers la source des données
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 1,
            maxZoom: 20
        }).addTo(mymap);

        const myIcon = L.icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
        });

        this.devices.forEach(device => {
            const marker = L.marker([device.lat, device.lon], {icon: myIcon, title: device.name}).bindPopup(device.name).addTo(mymap);
            marker.on('click', function(){
                this.pinClicked = marker.options.title;
                console.log(this.pinClicked);
            });
        });
    }

}