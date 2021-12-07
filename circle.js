window.addEventListener('load', main);

function main() {
    let rotation = 0;
    let nrOfDots = 600;
    let multiplier = 2;
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    setFullscreen(canvas);
    draw(context, nrOfDots, multiplier);

    setInterval(() => {
        rotation += 0.01;
        multiplier = 2 + Math.round(rotation);
    // setFullscreen(canvas);
    draw(context, nrOfDots, multiplier, rotation);
}, 20);
}

/**
 * Will draw a beautiful pattern on the screen
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} nrOfDots 
 * @param {Number} multiplier 
 */
function draw(context, nrOfDots, multiplier, rotation) {
    const width = context.canvas.width;
    const height = context.canvas.height;
    const radius = Math.min(width, height) * 0.4;

    // Make sure to clear the rect before we draw new stuff!
    context.clearRect(0 , 0, width, height);
    
    // Draw everything!
    drawCircle(context, radius)
    const dots = drawDotsOnCircle(context, radius, nrOfDots, rotation);
    drawLinesBetweenDots(context, multiplier, dots);
}

/**
 * Will draw the outline circle
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius 
 */
function drawCircle(context, radius) {
    const x = context.canvas.width * .5;
    const y = context.canvas.height * .5;

    context.strokeStyle = 'transparent';
    context.lineWidth = 1;
    context.beginPath();
    context.arc (x , y, radius, 0, 2 * Math.PI);

    context.stroke();
    
}

/**
 * Will draw a set of dots on the circle
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius 
 * @param {Number} nrOfDots
 * @returns {Array<any>} the positions of all the dots
 */
function drawDotsOnCircle(context, radius, nrOfDots, rotation) {
    // TODO: Implement
    const dots = [];
    const centerX = context.canvas.width * .5;
    const centerY = context.canvas.height * .5;

    for (let i = 0; i < nrOfDots; i++) {
        const angle = (Math.PI * 2 / nrOfDots * i) + rotation;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const dotsRadius = radius * .02;
        
        context.fillStyle = "transparent";
        context.strokeStyle = "transparent";
        context.beginPath();
        context.arc (x , y, dotsRadius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        dots.push( {x, y });
    }
    return dots;
   
}

/**
 * Will draw lines between the dots
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} multiplier
 * @param {Array<any>} dots
 */
function drawLinesBetweenDots(context, multiplier, dots) {
    context.innerWidth = 2;

    for (let i = 0; i < dots.length; i++) {
        const start = dots[i];
        const next = dots[(i * multiplier) % dots.length];
        const hue = 200 + i % 80;

        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(next.x, next.y)
        context.stroke();
    }
 
}


function setFullscreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}