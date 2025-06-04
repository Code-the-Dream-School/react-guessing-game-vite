"use client";

import React, { useRef, useEffect } from "react";
import { Player } from "./Player";
import { Goalkeeper } from "./Goalkeeper";
import { Ball } from "./Ball";

const sketch = (s) => {
  let player;
  let goalkeeper;
  let ball;
  let score = 0;
  let shotsTaken = 0;
  const maxShots = 10;
  let gameOver = false;
  let goalMessageTimer = 0;
  let netColorChangeTimer = 0;
  let difficulty = "medium";

  // Scaling factor: 13.33 pixels per yard
  const pixelsPerYard = 13.33;

  // Field dimensions in pixels (half-field)
  const fieldWidth = 60 * pixelsPerYard; // 800 pixels
  const fieldHeight = 50 * pixelsPerYard; // 666.5 pixels, but we'll use 800 for canvas

  // Goal dimensions
  const goalWidth = 8 * pixelsPerYard * 2.6; // ~106.64 pixels
  const goalHeight = 2.67 * pixelsPerYard * 1.8; // ~35.59 pixels

  // Penalty area dimensions
  const penaltyAreaWidth = 44 * pixelsPerYard; // ~586.52 pixels
  const penaltyAreaHeight = 18 * pixelsPerYard; // ~239.94 pixels

  // Penalty mark
  const penaltyMarkY = 12 * pixelsPerYard; // ~159.96 pixels from goal line

  // Goal area dimensions
  const goalAreaWidth = 20 * pixelsPerYard; // ~266.6 pixels
  const goalAreaHeight = 6 * pixelsPerYard; // ~79.98 pixels

  // Center circle (semicircle at bottom)
  const centerCircleRadius = 5 * pixelsPerYard; // ~66.65 pixels

  s.setup = () => {
    s.createCanvas(800, 800);
    s.noSmooth();
    s.pixelDensity(1);
    player = new Player(s, 1, 1);
    goalkeeper = new Goalkeeper(s, 1, 1, difficulty);
    ball = new Ball(s, 1, 1, player.x, player.y, player.aimAngle);
  };

  s.draw = () => {
    if (!gameOver) {
      drawBackground(s);
      drawField(s);
      drawPenaltyArea(s);
      drawGoal(s, netColorChangeTimer);

      if (goalkeeper) {
        goalkeeper.update(ball);
        goalkeeper.draw();
      }

      if (player) {
        player.update(ball, goalkeeper);
        player.draw();
      }

      if (ball) {
        ball.update();
        ball.draw(player.x, player.y);

        if (ball.checkGoal()) {
          score += 1;
          shotsTaken += 1;
          goalMessageTimer = 60;
          netColorChangeTimer = 60;
          ball.resetBall();
          console.log("Crowd cheers: 'GOOOAL!'");
        }
      }

      if (shotsTaken >= maxShots) {
        gameOver = true;
      }

      drawUI(s);
    } else {
      s.background(0);
      s.fill(255);
      s.textSize(32);
      s.textAlign(s.CENTER, s.CENTER);
      s.text("Game Over!", s.width / 2, s.height / 2 - 20);
      s.text(`Final Score: ${score}`, s.width / 2, s.height / 2 + 20);
    }
  };

  function drawBackground(s) {
    s.background(50, 50, 100);
    s.fill(100, 100, 100);
    s.rect(0, 0, s.width, 50);
    for (let x = 0; x < s.width; x += 10) {
      s.fill(s.random(100, 255), s.random(100, 255), s.random(100, 255));
      s.circle(x, s.random(10, 40), 5);
    }
  }

  function drawField(s) {
    const stripeHeight = 20;
    for (let y = 0; y < s.height; y += stripeHeight * 2) {
      s.fill("#0aa116");
      s.noStroke();
      s.rect(0, y, s.width, stripeHeight);
      s.fill("#0ca618");
      s.rect(0, y + stripeHeight, s.width, stripeHeight);
    }

    // Goal line at the top
    s.fill(255);
    s.noStroke();
    s.rect(0, 0, s.width, 4);

    // Midfield line (bottom of the half-field)
    s.fill(255);
    s.noStroke();
    s.rect(0, s.height - 4, s.width, 4);

    // Center circle (semicircle at the bottom)
    s.noFill();
    s.stroke(255);
    s.strokeWeight(2);
    s.arc(
      s.width / 2,
      s.height,
      centerCircleRadius * 2,
      centerCircleRadius * 2,
      s.radians(180),
      s.radians(360)
    );
  }

  function drawPenaltyArea(s) {
    const boxX = s.width / 2 - penaltyAreaWidth / 2;
    const boxY = 0;
    s.stroke(255);
    s.strokeWeight(2);
    s.noFill();

    // Draw the penalty area
    s.rect(boxX, boxY, penaltyAreaWidth, penaltyAreaHeight);

    // Penalty mark
    const penaltySpotX = s.width / 2;
    const penaltySpotY = penaltyMarkY;
    s.fill(255);
    s.noStroke();
    s.circle(penaltySpotX, penaltySpotY, 8);

    // Penalty arc
    s.noFill();
    s.stroke(255);
    s.strokeWeight(2);
    const arcRadius = 18 * pixelsPerYard; // 10 yards radius
    s.arc(
      penaltySpotX,
      penaltySpotY,
      arcRadius * 2,
      arcRadius * 2,
      s.radians(20),
      s.radians(160),
      s.OPEN
    );

    // Goal area
    const goalAreaX = s.width / 2 - goalAreaWidth / 2;
    const goalAreaY = 0;
    s.stroke(255);
    s.strokeWeight(2);
    s.noFill();
    s.rect(goalAreaX, goalAreaY, goalAreaWidth, goalAreaHeight);
  }

  function drawGoal(s, netColorTimer) {
    const goalX = s.width / 2 - goalWidth / 2;
    const goalY = 0;

    // Crossbar
    s.fill(255);
    s.noStroke();
    s.rect(goalX, goalY, goalWidth, 8);

    // Left post
    s.rect(goalX, goalY, 8, goalHeight);

    // Right post
    s.rect(goalX + goalWidth - 8, goalY, 8, goalHeight);

    // Net
    const netTopY = goalY + 8;
    const netBottomY = goalY + goalHeight;
    const inset = 20;

    const netTopLeft = s.createVector(goalX, netTopY);
    const netTopRight = s.createVector(goalX + goalWidth, netTopY);
    const netBottomLeft = s.createVector(goalX + inset, netBottomY);
    const netBottomRight = s.createVector(
      goalX + goalWidth - inset,
      netBottomY
    );

    if (netColorTimer > 0) {
      s.stroke(255, 215, 0, 150);
      netColorChangeTimer -= 1;
    } else {
      s.stroke(255, 150);
    }
    s.strokeWeight(1);

    let vSteps = 10;
    for (let i = 0; i <= vSteps; i++) {
      let t = i / vSteps;
      let xTop = s.lerp(netTopLeft.x, netTopRight.x, t);
      let xBottom = s.lerp(netBottomLeft.x, netBottomRight.x, t);
      s.line(xTop, netTopY, xBottom, netBottomY);
    }

    let hSteps = 8;
    for (let j = 0; j <= hSteps; j++) {
      let t = j / hSteps;
      let yLine = s.lerp(netTopY, netBottomY, t);
      let xLeft = s.lerp(netTopLeft.x, netBottomLeft.x, t);
      let xRight = s.lerp(netTopRight.x, netBottomRight.x, t);
      s.line(xLeft, yLine, xRight, yLine);
    }

    s.goalX = goalX;
    s.goalY = goalY;
    s.goalWidth = goalWidth;
    s.goalHeight = goalHeight;
  }

  function drawUI(s) {
    s.fill(255);
    s.textSize(16);
    s.textAlign(s.LEFT, s.TOP);
    s.text(`Score: ${score}`, 10, 10);
    s.text(`Shots: ${shotsTaken}/${maxShots}`, 10, 30);
    s.text(`Aim Angle: ${Math.round(player.aimAngle)}°`, 10, 50);
    s.text(`Power: ${Math.round(player.kickPower * 100)}%`, 10, 70);

    const miniMapWidth = 100;
    const miniMapHeight = 100;
    const miniMapX = s.width - miniMapWidth - 10;
    const miniMapY = 10;
    s.fill(0, 100, 0, 200);
    s.rect(miniMapX, miniMapY, miniMapWidth, miniMapHeight);
    const scaleX = miniMapWidth / s.width;
    const scaleY = miniMapHeight / s.height;
    s.fill(255, 0, 0);
    s.circle(miniMapX + player.x * scaleX, miniMapY + player.y * scaleY, 5);
    s.fill(0, 0, 255);
    s.circle(
      miniMapX + goalkeeper.x * scaleX,
      miniMapY + goalkeeper.y * scaleY,
      5
    );
    s.fill(255);
    s.circle(miniMapX + ball.ballX * scaleX, miniMapY + ball.ballY * scaleY, 3);

    if (player.isCharging) {
      s.fill(255, 0, 0);
      s.rect(10, 90, player.kickPower * 100, 10);
    }

    if (goalMessageTimer > 0) {
      s.fill(255, 215, 0);
      s.textSize(32);
      s.textAlign(s.CENTER, s.CENTER);
      s.text("Goal!", s.width / 2, s.height / 2);
      goalMessageTimer -= 1;
    }
  }
};

export default function GameField() {
  const sketchRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("p5").then((p5) => {
        const p5Instance = new p5.default(sketch, sketchRef.current);
        return () => {
          p5Instance.remove();
        };
      });
    }
  }, []);

  return <div ref={sketchRef} />;
}
