import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';

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
                name: 'Temperature',
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
            if(i > 12){
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), 15 + Math.floor(Math.random() * 15) - Math.floor(Math.random() * 15)]);
                j++;
            } else {
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), 15 + Math.floor(Math.random() * 15) - Math.floor(Math.random() * 15)]);
            }
        }
    }


  ngOnInit() {
    this.add20Points();
  }

}
