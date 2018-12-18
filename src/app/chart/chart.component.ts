import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataService } from '../services/data.service';
import {SeriesOptions} from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    devices: any[];

    constructor(private dataService: DataService) { }

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

    async initializeSeries() {
        await this.devices.forEach(async device => {
            const _data: number[] = await device.data as number[];
            this.chart.addSeries({name: device.serie.name, data: _data}, true);
        });
    }

    randomTemperature() {
        return 15 + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 20);
    }

    add20Points() {
        let j = 0;
        for (let i = 0; i < 20; i++) {
            if (i > 12) {
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), this.randomTemperature()], 0 );
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), this.randomTemperature()], 1 );
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), this.randomTemperature()], 2 );
                j++;
            } else {
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), this.randomTemperature()], 0 );
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), this.randomTemperature()], 1 );
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), this.randomTemperature()], 2 );
            }
        }
    }


  async ngOnInit() {
      this.devices = await this.dataService.loadData();
      await this.initializeSeries();
      this.add20Points();
  }

}
