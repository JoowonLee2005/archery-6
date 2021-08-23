class ComputerBase {
  constructor(x, y, width, height) {
    this.options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, this.options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/base2.png");

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);

    pop();

    if (this.collapse === true){
      this.options = {
        isStatic: false
      };
    }
  }
}
