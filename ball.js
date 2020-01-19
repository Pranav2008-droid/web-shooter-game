class Ball {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.1,
            'friction': 1,
            'density': 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;


        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(pos.x, pos.y, this.width, this.height);
        pop();
    }
};