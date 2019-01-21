import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class DataService {

    private _url = 'http://localhost:4200/assets/data.json';

    devicesArray: any[];

    pinClickedName = 'none';

    public configObservable = new Subject<string>();

    emitConfig(val) {
        this.configObservable.next(val);
    }

    constructor(private _httpClient: HttpClient) {
    }

    async loadData() {
        const response = await this._httpClient
            .get(this._url)
            .toPromise();
        this.devicesArray = response as any[];
        return this.devicesArray;
    }

    updatePinClicked(pinName: string): any {
        if (this.pinClickedName === pinName) {
            this.pinClickedName = 'none';
        } else {
            this.pinClickedName = pinName;
        }
        this.emitConfig(this.pinClickedName);
    }

    dateParser(date: string) {
        const year = parseInt(date.substr(0, 3), 10);
        const month = parseInt(date.substr(5, 6), 10);
        const day = parseInt(date.substr(8, 9), 10);
        const hour = parseInt(date.substr(11, 12), 10);
        const min = parseInt(date.substr(14, 15), 10);
        const sec = parseInt(date.substr(17, 18), 10);
        return Date.UTC(year, month, day, hour, min, sec);
    }
}
