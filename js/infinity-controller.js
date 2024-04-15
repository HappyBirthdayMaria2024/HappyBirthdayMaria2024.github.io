import Pencil from './pencil.js';
import CanvasController from './canvas-controller.js';
import CircleCollection from './circle-collection.js';
import fftData from '../data/fft-data.json'
import PointBuffer from './point-buffer.js';

let maxSubFrames = 20;
let fps = 60;

export default class InfinityController extends CanvasController {

    constructor(id, width, height) {
        super(id, width, height);
        this.pencil = new Pencil();

        this.data = [];
        this.updateCircleData(fftData[0]);
        this.circleCollection = new CircleCollection(this.data);
        this.pointBuffer = new PointBuffer();


        this.animCount = 0;

        this.simulatedTime = 0;
        this.elapsedTime = 0;

        this.events = [];
        this.addEvent({ start: 0, end: 5, func: s => this.updateCircleDrawing(s) });
        this.addEvent({ start: 5, end: 6, func: s => this.updateHandDisappear(s) });

        this.addEvent({
            start: 6, end: 10, begin_func: () => {
                document.querySelector('body').classList.add('colorful');
            }
        })

        let tmp_time = 6.2;
        const eps_time = 0.1; // hacky
        const time_to_draw_one = 4;
        for (let i = 0; i < fftData.length; i++) {
            if (i > 0) {
                this.addEvent(
                    {
                        start: tmp_time - eps_time, end: tmp_time, begin_func: () => {
                            this.updateCircleData(fftData[i]);
                            this.circleCollection.resetData(this.data);
                            this.circleCollection.pathLength = this.circleCollection.totalPathLength;
                            this.pointBuffer.saveBucket();
                        }
                    }
                );
            }
            this.addEvent(
                { start: tmp_time, end: tmp_time + time_to_draw_one - eps_time, func: s => this.updateRotation(s) }
            );
            tmp_time += time_to_draw_one;
        }
        this.addEvent({
            start: tmp_time, end: tmp_time + 1, func: (s) => {
                this.circleCollection.alpha = easeInOut(1 - s);
            }
        });

        tmp_time += 1;

        this.addEvent({
            start: tmp_time + eps_time, end: tmp_time + eps_time + eps_time, begin_func: () => {
                this.canvas.classList.add('start-growing');
            }
        });
        this.addEvent({
            start: tmp_time, end: tmp_time + 4, func: (s) => {
                this.pointBuffer.fillStyle = this.getFillGradient(easeInOut(s));
            }
        });

        tmp_time += 2.2
        this.addEvent({
            start: tmp_time, end: tmp_time + eps_time, begin_func: (s) => {
                this.canvas.classList.add('start-rotating');
            }
        });
        tmp_time += 4

    }

    getFillGradient(s) {
        const backgroundGradient = this.context.createRadialGradient(
            this.width / 2, this.height / 2, 0, // Inner circle (centerX, centerY, radius)
            this.width / 2, this.height / 2, Math.max(this.width, this.height) / 2// Outer circle (centerX, centerY, radius)
        );
        backgroundGradient.addColorStop(0, 'rgba(215, 2, 5, 0.6626506024096386)'); // Transparent start
        backgroundGradient.addColorStop(s, 'rgba(55, 5, 73, 1)'); // Solid end
        return backgroundGradient;
    }

    addEvent({ start, end, func, begin_func }) {
        this.events.push({ start, end, func, begin_func, has_started: false });
        this.events.sort((a, b) => a.start - b.start);
    }

    updateCircleData(data, set = false) {
        this.data = []
        for (let i = 0; i < data.length; i++) {
            this.data.push(data[i]);
            this.data[i][0] *= Math.min(this.width, this.height) * 0.45 / 1.1;
        }
    }

    updateCircleDrawing(s) {
        this.circleCollection.drawTill(this.circleCollection.totalPathLength * s);
        let drawPoint = this.circleCollection.getDrawPosition();
        this.pencil.x = drawPoint.x;
        this.pencil.y = drawPoint.y;
    }

    updateRotation(s) {
        this.pointBuffer.addDrawPoint(this.circleCollection.getEndPointDrawingPosition());
        this.circleCollection.setAllRotationRatio(s);
        this.circleCollection.alpha = 1;
    }

    updateHandDisappear(s) {
        this.pencil.alpha = easeInOut(1 - s);
    }

    updateCirclesDisappear(s) {
        this.circleCollection.alpha = easeInOut(1 - s);
    }

    update(dt, mousePosition) {
        if (dt > maxSubFrames / fps) {
            // Limit this for the case where the user navigates away and then comes back.
            dt = maxSubFrames / fps;
        }

        this.elapsedTime += dt;
        while (this.simulatedTime < this.elapsedTime) {
            this.subUpdate();
            this.simulatedTime += 1 / fps;
        }
    }

    processEvent(event) {
        const { start, end, func, begin_func, has_started } = event;
        if (start < this.simulatedTime) {
            const s = (this.simulatedTime - start) / (end - start);
            if (!has_started && begin_func) {
                begin_func();
                event.has_started = true;
            }
            if (func) {
                func(s);
            }
        }
        return event;
    }

    subUpdate() {
        this.events = this.events.map(event => this.processEvent(event));
        this.events = this.events.filter(event => this.simulatedTime < event.end);

    }

    render() {
        this.clear();

        const context = this.context;
        const xOffset = 0.5 * this.width;
        const yOffset = 0.5 * this.height;

        const scale = 1;

        this.circleCollection.render(context, xOffset, yOffset, scale);
        this.pencil.render(context, xOffset, yOffset, scale);
        this.pointBuffer.render(context, xOffset, yOffset, scale);
    }
}

function easeInOut(t, amt = 2) {
    let tPow = Math.pow(t, amt);
    return tPow / (tPow + Math.pow(1 - t, amt));
}

function slurp(val1, val2, amt) {
    return (val2 - val1) * amt + val1;
}