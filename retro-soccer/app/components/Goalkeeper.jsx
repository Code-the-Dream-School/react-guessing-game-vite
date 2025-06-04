export class Goalkeeper {
  constructor(p, scaleX, scaleY, difficulty) {
    this.p = p;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.difficulty = difficulty;

    this.x = p.width / 2;
    this.y = 50 * scaleY;
    this.speed = difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3;
    this.size = 3 * scaleX;
    this.direction = 1;
    this.predicting = false;

    this.isMoving = false;
    this.legFrame = 0;
    this.frameSpeed = 0.03;
    this.moveDirection = { x: 0 };
  }

  update(ball) {
    const prevX = this.x;

    this.x += this.speed * this.direction;

    const goalX = this.p.goalX;
    const goalWidth = this.p.goalWidth;
    if (this.x <= goalX + 20 * this.scaleX) {
      this.direction = 1;
    } else if (this.x >= goalX + goalWidth - 20 * this.scaleX) {
      this.direction = -1;
    }

    if (ball.isKicking && this.difficulty !== "easy") {
      this.predicting = true;
      const predictedX = ball.ballX;
      if (predictedX < this.x) {
        this.x -= this.speed * 1.5;
      } else {
        this.x += this.speed * 1.5;
      }
      this.x = this.p.constrain(
        this.x,
        goalX + 20 * this.scaleX,
        goalX + goalWidth - 20 * this.scaleX
      );
    } else {
      this.predicting = false;
    }

    this.isMoving = this.x !== prevX;
    if (this.isMoving) {
      this.moveDirection.x = this.x - prevX;
      this.legFrame += this.frameSpeed;
      if (this.legFrame > 4) this.legFrame = 0;
    } else {
      this.moveDirection.x = 0;
      this.legFrame = 0;
    }

    // Check collision with ball
    const distanceToBall = this.p.dist(this.x, this.y, ball.ballX, ball.ballY);
    if (distanceToBall < 20 * this.scaleX) {
      ball.ballSpeedX *= -1;
      ball.ballSpeedY *= -1;
      ball.isKicking = true;
    }
  }

  draw() {
    const p = this.p;
    const s = this.size;
    const startX = this.x - 8 * s;
    const startY = this.y - 15 * s;

    p.noStroke();
    p.fill(50, 50, 50);
    p.rect(startX + s * 5, startY, s * 6, s * 3);
    p.rect(startX + s * 4, startY + s * 3, s * 8, s * 2);

    p.fill(240, 190, 140);
    p.rect(startX + s * 5, startY + s * 5, s * 6, s * 5);

    p.fill(255);
    p.rect(startX + s * 6, startY + s * 6, s * 2, s * 2);
    p.rect(startX + s * 9, startY + s * 6, s * 2, s * 2);
    p.fill(0);
    p.rect(startX + s * 7, startY + s * 7, s, s);
    p.rect(startX + s * 10, startY + s * 7, s, s);

    p.fill(0);
    p.rect(startX + s * 7, startY + s * 9, s * 3, s);

    p.fill(0, 0, 200);
    p.rect(startX + s * 4, startY + s * 10, s * 8, s * 5);

    p.fill(240, 190, 140);
    p.rect(startX + s * 2, startY + s * 10, s * 3, s * 3);
    p.rect(startX + s * 11, startY + s * 10, s * 3, s * 3);

    p.fill(0);
    p.rect(startX + s * 5, startY + s * 15, s * 6, s * 3);

    p.fill(240, 190, 140);
    const legOffset = Math.sin(this.legFrame * Math.PI) * 2 * s;
    if (this.isMoving) {
      let legSwingDirection = this.moveDirection.x >= 0 ? 1 : -1;

      p.push();
      p.translate(startX + s * 5, startY + s * 18);
      p.rotate(p.radians(legOffset * 10 * legSwingDirection));
      p.rect(0, 0, s * 2, s * 4);
      p.fill(255);
      p.rect(0, s * 4, s * 2, s * 2);
      p.fill(0);
      p.rect(0, s * 6, s * 2.5, s * 2);
      p.pop();

      p.push();
      p.translate(startX + s * 9, startY + s * 18);
      p.rotate(p.radians(-legOffset * 10 * legSwingDirection));
      p.rect(0, 0, s * 2, s * 4);
      p.fill(255);
      p.rect(0, s * 4, s * 2, s * 2);
      p.fill(0);
      p.rect(0, s * 6, s * 2.5, s * 2);
      p.pop();
    } else {
      p.rect(startX + s * 5, startY + s * 18, s * 2, s * 4);
      p.rect(startX + s * 9, startY + s * 18, s * 2, s * 4);
      p.fill(255);
      p.rect(startX + s * 5, startY + s * 22, s * 2, s * 2);
      p.rect(startX + s * 9, startY + s * 22, s * 2, s * 2);
      p.fill(0);
      p.rect(startX + s * 5, startY + s * 24, s * 2.5, s * 2);
      p.rect(startX + s * 8.5, startY + s * 24, s * 2.5, s * 2);
    }
  }
}
