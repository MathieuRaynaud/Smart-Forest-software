import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    devices: any[];

    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });

    constructor(private dataService: DataService) {}

    async ngOnInit() {
        this.devices = await this.dataService.loadData();
        setInterval(() => {
            console.log(this.dataService.downloadJSON('https://test_ws_smart_forest.data.thethingsnetwork.org/api/v2/query?last=1h', 'application/json', 'key ttn-account-v2.ECz0ci0dakr0g021a5_MaFDjFVwzbirzPVo4xa34FHo'));
            }, 10000
        )
    }
}