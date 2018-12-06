import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

    private _url = 'http://localhost:4200/assets/data.json';

    devicesArray: any[];

    /*devicesArray = [
        {name: 'Gateway',
            lat: 42.498167,
            lon: 3.026309,
            serie: {name: 'Gateway',
                data: []}
        },
        {name: 'River',
            lat: 42.489569,
            lon: 3.054538,
            serie: {name: 'River',
                data: []}
        },
        {name: 'Church',
            lat: 42.528080,
            lon: 2.999987,
            serie: {name: 'Church',
                data: []}
        }
    ];*/

    constructor(private _httpClient: HttpClient) {
    }

    async loadData() {
        await this._httpClient.get(this._url).subscribe(data => {
            this.devicesArray = data as Array<any[]>;
        },
        err => {
            console.log('error: ', err);
        });
    }

}
