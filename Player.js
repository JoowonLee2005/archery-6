class Player {
  constructor(x, y, width, height) {
    this.options = {
      isStatic: true
    };

    this.isRemoved = false;

    this.body = Bodies.rectangle(x, y, width, height, this.options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
    
    this.life1 = "lime";
    this.life2 = "lime";
    this.life3 = "lime";
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
  }

  life(){
    push()
    fill(this.life3);
    rect(140,120,100,50);
    fill(this.life2);
    rect(240,120,100,50);
    fill(this.life1);
    rect(340,120,100,50);
    pop()
  }

  reduceLife(archerLife){
    if (archerLife === 2){
      this.life1 = "red"
    }
    if (archerLife === 1){
      this.life2 = "red"
    }
    if (archerLife === 0){
      this.life3 = "red"
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setStatic(computer.body,false);
      Matter.Body.setStatic(playerArcher.body,false);
      Matter.Body.setStatic(playerBase.body,false);
      Matter.Body.setStatic(computerArcher.body,false);
      Matter.Body.setStatic(computerBase.body,false);
    }
  }
}