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
    appareils: any[];

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

    onAllumer() {
        this.appareilService.switchOnAll();
    }

    onEteindre() {
        if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
            this.appareilService.switchOffAll();
        } else {
            return null;
        }
    }

    ngOnInit(){
        this.appareils = this.appareilService.appareils;
    }
}