import { Component, OnInit } from '@angular/core';
import { MapChart } from 'angular-highcharts';

@Component({
  selector: 'app-highmap',
  templateUrl: './highmap.component.html',
  styleUrls: ['./highmap.component.scss']
})
export class HighmapComponent implements OnInit {

    mapChart = new MapChart({
        title: {
            text: 'The La Massane Smart forest',
        },

        mapNavigation: {
            enabled: false,
            enableDoubleClickZoomTo: true
        },

        colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic',
        }
    });

  constructor() { }

  ngOnInit() {
  }

}
