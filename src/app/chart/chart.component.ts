import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import {MapComponent} from '../map/map.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

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
        },
        series: [
            {
                name: 'Temperature at Church',
                data: []
            },
            {
                name: 'Temperature at Gateway',
                data: []
            },
            {
                name: 'Temperature at River',
                data: []
            }
        ]
    });

    // add point to chart serie
    add() {
        this.chart.addPoint(Math.floor(Math.random() * 30));
    }

    add20Points() {
        let j = 0;
        for (let i = 0; i < 20; i++) {
            if (i > 12) {
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)],0);
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)],1);
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)],2);
                j++;
            } else {
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)],0);
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)],1);
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20)],2);
            }
        }
    }


  ngOnInit() {
      /*.devices.forEach(device => {
          this.chart.addSeries({name: device.name});
      });*/
      this.add20Points();
  }

}
