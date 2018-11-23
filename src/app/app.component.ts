import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Smart Forest Dashboard';
    isAuth = false;
    devices: any[];

    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });

    constructor(private appareilService: AppareilService) {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }

    onSwitchOn() {
        this.appareilService.switchOnAll();
    }

    onSwitchOff() {
        if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
            this.appareilService.switchOffAll();
        } else {
            return null;
        }
    }

    ngOnInit(){
        this.devices = this.appareilService.devices;
    }
}