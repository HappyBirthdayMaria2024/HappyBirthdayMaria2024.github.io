import Conductor from './conductor.js';
import InfinityController from './infinity-controller.js';

function hasElement(id) {
    return document.getElementById(id) != null;
}

/**
 * Configure the canvases to be able to handle screens with higher dpi.
 *
 * We can only call this once because after that, the width has changed!
 */
function updateCanvasSizes() {
    const pixelRatio = window.devicePixelRatio || 1;
    const canvases = document.getElementsByTagName("canvas");
    for (let canvas of canvases) {
        const width = canvas.width;
        const height = canvas.height;
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
    }
}

updateCanvasSizes();

let conductor = null;

function init() {
    let controllers = [];

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