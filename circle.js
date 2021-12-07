window.addEventListener('load', main);

function main() {
    let nrOfDots = 6;
    let multiplier = 2;
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    setFullscreen(canvas);
    draw(context, nrOfDots, multiplier);
}


/**
 * Will draw a beautiful pattern on the screen
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} nrOfDots 
 * @param {Number} multiplier 
 */
function draw(context, nrOfDots, multiplier) {
    const radius = window.innerWidth * 0.4;

    // Make sure to clear the rect before we draw new stuff!
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    // Draw everyting!
    // 1. drawCircle(context, radius);
    // 2. const dots = drawDotsOnCircle(context, radius, nrOfDots);
    // 3. drawLinesBetweenDots(context, multiplier, dots);
}

/**
 * Will draw the outline circle
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius 
 */
function drawCircle(context, radius) {
    // TODO: Implement
}

/**
 * Will draw a set of dots on the circle
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} radius 
 * @param {Number} nrOfDots
 * @returns {Array<any>} the positions of all the dots
 */
function drawDotsOnCircle(context, radius, nrOfDots) {
    // TODO: Implement
}

/**
 * Will draw lines between the dots
 * @param {CanvasRenderingContext2D} context 
 * @param {Number} multiplier
 * @param {Array<any>} dots
 */
function drawLinesBetweenDots(context, multiplier, dots) {
    // TODO: Implement
}


function setFullscreen(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}