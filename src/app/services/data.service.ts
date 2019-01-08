import { HttpClient } from '@angular/common/http';
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

    parseDate(dateString: string) {
        const parsedDate: string[] = ['', '', ''];
        let j = 0;
        for (let i = 0; i < dateString.length; i++) {
            if (dateString[i] === '-') {
                j++;
            } else {
                parsedDate[j] += dateString[i];
            }
        }
        const intParsedDate: any[] = [0, 0, 0];
        for (let i = 0; i < parsedDate.length; i++) {
            intParsedDate[i] = parseInt(parsedDate[i], 10);
        }
        return intParsedDate;
    }
}
