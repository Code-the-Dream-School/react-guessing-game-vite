export class Ball {
  constructor(p, scaleX, scaleY, playerX, playerY, aimAngle) {
    this.p = p;
    this.scaleX = scaleX;
    this.scaleY = scaleY;

    // Ball properties
    this.ballX = p.width / 2;
    this.ballY = 160;
    this.ballSpeedX = 0;
    this.ballSpeedY = 0;
    this.isKicking = false;
    this.spin = 0;

    // Aiming line properties
    this.playerX = playerX;
    this.playerY = playerY;
    this.aimAngle = aimAngle;
    this.kickDistance = 30 * scaleX; // Same distance used for kicking
  }

  update() {
    const p = this.p;

    if (this.isKicking) {
      this.ballX += this.ballSpeedX;
      this.ballY += this.ballSpeedY;

      // Apply spin
      this.ballSpeedX += this.spin * 0.05;
      this.ballSpeedY += this.spin * 0.05;

      // Friction
      this.ballSpeedX *= 0.98;
      this.ballSpeedY *= 0.98;

      // Stop ball if very slow
      if (Math.abs(this.ballSpeedX) < 0.1 && Math.abs(this.ballSpeedY) < 0.1) {
        this.isKicking = false;
      }

      // Check goalpost collision
      this.checkGoalpostCollision();

      // Reset if off-screen
      if (
        this.ballX < 0 ||
        this.ballX > p.width ||
        this.ballY < 0 ||
        this.ballY > p.height
      ) {
        this.resetBall();
      }
    }
  }

  kick(power, angleDeg) {
    if (!this.isKicking) {
      this.isKicking = true;
      const rad = this.p.radians(angleDeg);
      this.ballSpeedX = power * this.p.cos(rad) * this.scaleX;
      this.ballSpeedY = power * this.p.sin(rad) * this.scaleY;
      this.spin = (angleDeg % 90) * 0.02;
    }
  }

  resetBall() {
    this.ballX = this.p.width / 2;
    this.ballY = 130;
    this.ballSpeedX = 0;
    this.ballSpeedY = 0;
    this.isKicking = false;
    this.spin = 0;
  }

  checkGoal() {
    const goalX = this.p.goalX;
    const goalY = this.p.goalY;
    const goalWidth = this.p.goalWidth;
    const goalHeight = this.p.goalHeight;

    if (
      this.ballX >= goalX &&
      this.ballX <= goalX + goalWidth &&
      this.ballY >= goalY &&
      this.ballY <= goalY + goalHeight
    ) {
      return true;
    }
    return false;
  }

  checkGoalpostCollision() {
    const goalX = this.p.goalX;
    const goalY = this.p.goalY;
    const goalWidth = this.p.goalWidth;
    const goalHeight = this.p.goalHeight;
    const ballRadius = 10 * this.scaleX;

    if (
      this.ballX - ballRadius <= goalX + 8 &&
      this.ballY >= goalY &&
      this.ballY <= goalY + goalHeight
    ) {
      this.ballSpeedX *= -1;
      this.ballX = goalX + 8 + ballRadius;
    }

    if (
      this.ballX + ballRadius >= goalX + goalWidth - 8 &&
      this.ballY >= goalY &&
      this.ballY <= goalY + goalHeight
    ) {
      this.ballSpeedX *= -1;
      this.ballX = goalX + goalWidth - 8 - ballRadius;
    }

    if (
      this.ballY - ballRadius <= goalY + 8 &&
      this.ballX >= goalX &&
      this.ballX <= goalX + goalWidth
    ) {
      this.ballSpeedY *= -1;
      this.ballY = goalY + 8 + ballRadius;
    }
  }

  draw() {
    const p = this.p;

    // --- Draw the Ball ---
    p.fill(255);
    p.circle(this.ballX, this.ballY, 20 * this.scaleX);
    p.fill(0);
    for (let i = 0; i < 5; i++) {
      p.circle(
        this.ballX + p.cos(p.radians(i * 72)) * 5 * this.scaleX,
        this.ballY + p.sin(p.radians(i * 72)) * 5 * this.scaleX,
        4 * this.scaleX
      );
    }

    // --- Draw Curvature Indicator ---
    if (this.isKicking && Math.abs(this.spin) > 0) {
      p.push();
      p.translate(this.ballX + 30 * this.scaleX, this.ballY);
      p.rotate(p.radians(this.spin * 90));
      p.stroke(0, 255, 0);
      p.strokeWeight(2);
      p.line(0, 0, 20 * this.scaleX * Math.abs(this.spin), 0);
      p.pop();
    }

    // --- Draw Aiming Line (only when player is close to the ball) ---
    const distanceToPlayer = p.dist(
      this.ballX,
      this.ballY,
      this.playerX,
      this.playerY
    );
    if (distanceToPlayer < this.kickDistance && !this.isKicking) {
      // Only show when close and not kicking
      p.push();
      p.translate(this.ballX + 30 * this.scaleX, this.ballY); // Position next to the ball
      p.rotate(p.radians(this.aimAngle));
      p.stroke(255, 0, 0);
      p.strokeWeight(2);
      p.line(0, 0, 50 * this.scaleX, 0);
      p.pop();
    }
  }
}
