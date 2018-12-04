import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    devicesArray = [
            {name: 'Gateway',
            lat: 42.498167,
            lon: 3.026309,
            serie: {name: 'Gateway',
            data: []}
            },
            {name: 'River',
            lat: 42.489569,
            lon: 3.054538,
            serie: {name: 'River',
            data: []}
            },
            {name: 'Church',
            lat: 42.528080,
            lon: 2.999987,
            serie: {name: 'Church',
            data: []}
            }
    ]

  constructor() { }

    chart = new Chart({
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Temperature'
            }
        },
        chart: {
            type: 'line'
        },
        title: {
            text: 'Temperature Chart'
        },
        credits: {
            enabled: false
        }
    });

    // add point to chart serie
    add() {
        this.chart.addPoint(Math.floor(Math.random() * 30));
    }

    initializeSeries() {
        this.devicesArray.forEach(device => {
            this.chart.addSeries(device.serie, true);
        });
    }

    add20Points() {
        let j = 0;
        for (let i = 0; i < 20; i++) {
            if (i > 12) {
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)], 0 );
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)], 1 );
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)], 2 );
                j++;
            } else {
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)], 0 );
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)], 1 );
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)], 2 );
            }
        }
    }


  ngOnInit() {
      this.initializeSeries();
      this.add20Points();
  }

}
