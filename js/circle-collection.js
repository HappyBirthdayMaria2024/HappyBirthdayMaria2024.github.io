import Circle from "./circle.js";

export default class CircleCollection {

    constructor(data) {
        this.pathLength = 0;
        this.totalPathLength = 0;
        this.alpha = 1;

        this.circles = [];
        this.resetData(data);
    }

    resetData(data) {
        this.pathLength = 0;
        this.totalPathLength = 0;
        this.alpha = 1;

        this.circles = [];

        for (let i = 0; i < data.length; i++) {
            let datum = data[i];
            let newCircle = new Circle(
                /* size= */
                datum[0],
                /* rotation= */
                datum[2],
                /* frequency= */
                datum[1]);
            if (i > 0) {
                newCircle.parent = this.circles[i - 1];
                newCircle.moveToParent();
            }
            this.totalPathLength += newCircle.length;
            this.circles.push(newCircle);
        }
    }

    getDrawPosition() {
        var remainingPathLength = this.pathLength;
        let circle;
        for (let i = 0; i < this.circles.length; i++) {
            circle = this.circles[i];
            remainingPathLength -= circle.length;
            if (remainingPathLength <= 0) {
                return circle.getDrawPosition(remainingPathLength + circle.length);
            }
        }
        return circle.end;
    }

    drawMore(length=5) {
        this.pathLength += length;
    }

    drawTill(length=5) {
        this.pathLength = length;
    }

    rotateAll(deltaT) {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].update(deltaT);
        }
    }

    setAllRotationRatio(t) {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].setRotationRatio(t);
        }
    }

    reset() {
        for (let i = 0; i < this.circles.length; i++) {
            this.circles[i].reset();
        }
    }

    getEndPointDrawingPosition() {
        return {
            x: this.circles[this.circles.length-1].endX,
            y: this.circles[this.circles.length-1].endY,
        };
    }

    render(context, xOffset, yOffset, scale) {
        // Draw all the circles
        var remainingPathLength = this.pathLength;
        context.strokeStyle = 'blue';
        context.globalAlpha = this.alpha;

        for (let i = 0; i < this.circles.length; i++) {
            var circle = this.circles[i];
            circle.renderAmt(context, xOffset, yOffset, scale, remainingPathLength);

            remainingPathLength -= circle.length;
            if (remainingPathLength < 0) {
                break;
            }
        }
        context.globalAlpha = 1;
    }
}