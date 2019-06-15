var rain = [];

function setup() {
    createCanvas(innerWidth,innerHeight- 1);

    for(let i = 0;i < 700; i++){
        rain.push(new Drop);
    }
    
}

function draw() {
    background(0);

    for(let i = 0;i<rain.length;i++){
        rain[i].fall();
        rain[i].show();
    }
}