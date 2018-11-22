export class AppareilService {

    // Array containing the devices
    appareils = [
        {
            name: 'River',
            status: 'Eteint'
        },
        {
            name: 'Gateway',
            status: 'Allumé'
        },
        {
            name: 'Church',
            status: 'Eteint'
        }
    ];

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'Allumé';
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'Eteint';
        }
    }

    switchOnOne(i: number) {
        this.appareils[i].status = 'Allumé';
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'Eteint';
    }

}