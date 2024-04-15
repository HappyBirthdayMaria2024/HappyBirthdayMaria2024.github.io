export default class PointBuffer {

    constructor(fillStyle) {
        this.alpha = 1;
        this.buckets = [[]];
        this.fillStyle = fillStyle;
    }

    addDrawPoint({x, y}) {
        this.buckets[this.buckets.length-1].push({x, y});
    }

    saveBucket() {
        this.buckets.push([]);
    }

    render(context, xOffset, yOffset, scale) {
        context.strokeStyle = 'black';
        context.globalAlpha = this.alpha;

        context.shadowBlur = 10;
        context.shadowColor = 'rgba(0, 0, 0, 1)';
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;        

        this.buckets.forEach(drawnPoints=>{
            if (drawnPoints.length > 0) {
                context.beginPath();
                context.moveTo(
                    scale * (drawnPoints[0].x + xOffset),
                    scale * (drawnPoints[0].y + yOffset));
                for (let i = 1; i < drawnPoints.length; i++) {
                    context.lineTo(
                        scale * (drawnPoints[i].x + xOffset),
                        scale * (drawnPoints[i].y + yOffset));
                }
                context.stroke();

                if(this.fillStyle) {
                    context.fillStyle = this.fillStyle;
                    context.fill();
                }
            }
        })
        context.globalAlpha = 1;

        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
    }
}