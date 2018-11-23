export class AppareilService {

    // Array containing the devices
    devices = [
        {
            name: 'River',
            status: 'Off'
        },
        {
            name: 'Gateway',
            status: 'On'
        },
        {
            name: 'Church',
            status: 'Off'
        }
    ];

    switchOnAll() {
        for(let device of this.devices) {
            device.status = 'On';
        }
    }

    switchOffAll() {
        for (let device of this.devices) {
            device.status = 'Off';
        }
    }

    switchOnOne(i: number) {
        this.devices[i].status = 'On';
    }

    switchOffOne(i: number) {
        this.devices[i].status = 'Off';
    }

}