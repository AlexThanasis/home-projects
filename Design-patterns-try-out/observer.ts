// Observer Design Pattern
// install the rxjs with this command:
// npm i rxjs

import { Subject } from 'rxjs';

const channel  = new Subject();

const aron = channel.subscribe(v => console.log('Aron\'s screen: ' + v));
const laci = channel.subscribe(v => console.log('Laci\'s screen: ' + v));
const benyo = channel.subscribe(v => console.log('Benyo\'s screen: ' + v));
const krisz = channel.subscribe(v => console.log('Krisz\'s screen: ' + v));

channel.next('McBookunk statbol');
channel.next('CSIP');
channel.next('Ezt mondta oreganyam is 1906-ban a keresztelojen');
channel.next('En szetadlak');
channel.next('A PHP jobb volt');
setTimeout(() => {
    channel.next('Kezdodik a Colombo')
}, 2000);
setInterval(() => {
    channel.next('Ehes vagyok, eszek egy kremest')
}, 5000);
