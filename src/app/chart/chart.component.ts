import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    devices: any[];
    serieToDisplay = 'none';

    constructor(private dataService: DataService) {
        this.dataService.configObservable.subscribe(value => {
            this.serieToDisplay = value;
            this.displaySeries(this.serieToDisplay);
        });
    }

    chart = new Chart({
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%d %b %Y'
            },
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

    async initializeSeries() {
        let serieIndex = 0;
        await this.devices.forEach(async device => {
            await this.chart.addSeries({name: device.serie.name, data: []}, true);
            for (let i = 0; i < device.serie.data.length; i++) {
                const date = Date.parse(device.serie.data[i].date);
                this.chart.addPoint([date, parseInt(device.serie.data[i].temp, 10)], serieIndex);
            }
            serieIndex++;
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
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), this.randomTemperature()], 3 );
                j++;
            } else {
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), this.randomTemperature()], 0 );
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), this.randomTemperature()], 1 );
                this.chart.addPoint([Date.UTC(2019, (2 + i), (2 + 2 * i)), this.randomTemperature()], 2 );
                this.chart.addPoint([Date.UTC(2020, (2 + j), (2 + 2 * j)), this.randomTemperature()], 3 );
            }
        }
    }

    displaySeries(serieToDisplay) {
        for (let i = 0; i < this.chart.ref.series.length; i++) {
            if (serieToDisplay === 'none' || this.chart.ref.series[i].name === serieToDisplay) {
                this.chart.ref.series[i].show();
            } else {
                this.chart.ref.series[i].hide();
            }
        }
    }

    async ngOnInit() {
      this.devices = await this.dataService.loadData();
      await this.initializeSeries();
      this.add20Points();
    }

}
