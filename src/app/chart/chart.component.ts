import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    chart = new Chart({
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
        this.chart.addPoint(Math.floor(Math.random() * 10));
    }

  constructor() { }

  ngOnInit() {
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
  }

}
