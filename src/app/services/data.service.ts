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

    downloadJSON(address: string, accept: string, authorization: string) {
        const headers = new HttpHeaders();
        headers.set('Accept', accept);
        headers.set('Authorization', authorization);
        return this._httpClient.get(address, {headers});
    }
}
