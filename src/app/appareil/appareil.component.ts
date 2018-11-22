import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html',
    styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

    @Input() appareilName: string;
    @Input() appareilStatus: string;
    @Input() index: number;

    constructor(private appareilService: AppareilService) { }

    onSwitch() {
        if(this.appareilStatus === 'Allumé') {
            this.appareilService.switchOffOne(this.index);
        } else if(this.appareilStatus === 'Eteint') {
            this.appareilService.switchOnOne(this.index);
        }
    }

    ngOnInit() {
    }

    getStatus() {
        return this.appareilStatus;
    }

    getColor() {
        if(this.appareilStatus === 'Allumé') {
            return 'green';
        } else if(this.appareilStatus === 'Eteint') {
            return 'red';
        }
    }
}