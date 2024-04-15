import Conductor from './conductor.js';
import InfinityController from './infinity-controller.js';
import {setup} from './setup.js'

function hasElement(id) {
    return document.getElementById(id) != null;
}

let conductor = null;

function init() {
    let controllers = [];

    setup();

    if (hasElement('self-draw')) {
        let controller = new SelfDrawController('self-draw');
        controllers.push(controller);
    }
    if (hasElement('infinity')) {
        let controller = new InfinityController('infinity');
        controllers.push(controller);
    }

    conductor = new Conductor(controllers);
    conductor.start();
    // To let me play around with things in the console.
    window.conductor = conductor;
}

init();