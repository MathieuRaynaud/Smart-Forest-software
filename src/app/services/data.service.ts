import { HttpClient } from '@angular/common/http';

export class DataService {

    devicesArray = [
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
    ]

    constructor() {
    }

}