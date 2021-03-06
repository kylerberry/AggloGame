/*
* Definition for Bullet class
*/
function Bullet() {
  this.point = Point.random();
  this.point.x *= view.size.width;
  this.point.y *= view.size.height;

  this.vector = new Point({
    angle: 360 * Math.random(),
    length: this.speed
  });

  this.bullet = new Path.Circle({
    x: this.point.x,
    y: this.point.y
  }, this.radius);
  this.bullet.fillColor = 'red';
}

Bullet.prototype = {
  speed: 3,
  radius: 3
};

/**
* Runs every onFrame event
* @param xpr obj
* @param balls arr
*/
Bullet.prototype.iterate = function() {
    this.checkBorders();
    this.move();
};

/**
* Checks for a border collision
*/
Bullet.prototype.checkBorders = function() {
    size = view.size;

    if(this.point.x < this.radius) {
      this.point.x = this.radius;
      this.vector.x = -this.vector.x;
    }
    if(this.point.x > size.width - this.radius) {
      this.point.x = size.width - this.radius;
      this.vector.x = -this.vector.x;
    }
    if(this.point.y < this.radius) {
      this.point.y = this.radius;
      this.vector.y = -this.vector.y;
    }
    if(this.point.y > size.height - this.radius) {
      this.point.y = size.height - this.radius;
      this.vector.y = -this.vector.y;
    }
};

/**
* Moves via vector
*/
Bullet.prototype.move = function() {
    this.point.x += this.vector.x;
    this.point.y += this.vector.y;

    this.bullet.position = {
      x: this.point.x,
      y: this.point.y
    };
};

/**
* can update bullet vector from outside object
*/
Bullet.prototype.updateVector = function(ball) {
    var direc = this.point.subtract(ball.point);
    //get new speed by multiplying bullet speed * ball speed
    this.vector = this.vector.add(direc).normalize(this.speed);
};


/**
* Checks for a hit on an expander or ball
* @param item obj
*/
Bullet.prototype.itemHit = function(item) {
    return this.bullet.intersects(item);
};