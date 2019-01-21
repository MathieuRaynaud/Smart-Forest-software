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
                text: 'Temperature (°C)'
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

    chartHumidity = new Chart({
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
                text: 'Humidity (%)'
            }
        },
        chart: {
            type: 'line'
        },
        title: {
            text: 'Humidity Chart'
        },
        credits: {
            enabled: false
        }
    });

    chartO3 = new Chart({
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
                text: 'O3 (ppb)'
            }
        },
        chart: {
            type: 'line'
        },
        title: {
            text: 'Ozone Chart'
        },
        credits: {
            enabled: false
        }
    });

    chartLuminosity = new Chart({
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
                text: 'Luminosity (lux)'
            }
        },
        chart: {
            type: 'line'
        },
        title: {
            text: 'Luminosity Chart'
        },
        credits: {
            enabled: false
        }
    });

    async initializeSeries() {
        let serieIndex = 0;
        await this.devices.forEach(async device => {
            await this.chart.addSeries({name: device.serie.name, data: []}, true);
            await this.chartHumidity.addSeries({name: device.serie.name, data: []}, true);
            await this.chartO3.addSeries({name: device.serie.name, data: []}, true);
            await this.chartLuminosity.addSeries({name: device.serie.name, data: []}, true);
            for (let i = 0; i < device.serie.data.length; i++) {
                const date = this.dataService.dateParser(device.serie.data[i].date);
                this.chart.addPoint([date, parseInt(device.serie.data[i].temp, 10)], serieIndex);
                this.chartHumidity.addPoint([date, parseInt(device.serie.data[i].hum, 10)], serieIndex);
                this.chartO3.addPoint([date, parseInt(device.serie.data[i].o3, 10)], serieIndex);
                this.chartLuminosity.addPoint([date, parseInt(device.serie.data[i].lum, 10)], serieIndex);
            }
            serieIndex++;
        });
    }

    displaySeries(serieToDisplay) {
        for (let i = 0; i < this.chart.ref.series.length; i++) {
            if (serieToDisplay === 'none' || this.chart.ref.series[i].name === serieToDisplay) {
                this.chart.ref.series[i].show();
                this.chartHumidity.ref.series[i].show();
                this.chartO3.ref.series[i].show();
                this.chartLuminosity.ref.series[i].show();
            } else {
                this.chart.ref.series[i].hide();
                this.chartHumidity.ref.series[i].hide();
                this.chartO3.ref.series[i].hide();
                this.chartLuminosity.ref.series[i].hide();
            }
        }
    }

    async ngOnInit() {
        this.devices = await this.dataService.loadData();
        await this.initializeSeries();
    }

}
