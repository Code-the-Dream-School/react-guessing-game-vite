"use client";
import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p) {
  // Constants to define field layout
  const CANVAS_WIDTH = 400;
  const CANVAS_HEIGHT = 300;

  // Margins around the pitch
  const MARGIN = 20;

  // Field boundaries
  const FIELD_LEFT = MARGIN;
  const FIELD_RIGHT = CANVAS_WIDTH - MARGIN;
  const FIELD_TOP = MARGIN;
  const FIELD_BOTTOM = CANVAS_HEIGHT - MARGIN;
  const FIELD_WIDTH = FIELD_RIGHT - FIELD_LEFT;
  const FIELD_HEIGHT = FIELD_BOTTOM - FIELD_TOP;

  // Center circle radius
  const CENTER_RADIUS = 30;

  p.setup = () => {
    p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  };

  p.draw = () => {
    // Background
    p.background(20, 100, 20);

    // (Optional) Draw subtle pitch stripes
    drawPitchStripes();

    // Draw main field boundary
    p.stroke(255);
    p.strokeWeight(2);
    p.noFill();
    p.rect(FIELD_LEFT, FIELD_TOP, FIELD_WIDTH, FIELD_HEIGHT);

    // Halfway line (horizontal across the middle of the field)
    p.line(FIELD_LEFT, p.height / 2, FIELD_RIGHT, p.height / 2);

    // Center circle
    p.circle(p.width / 2, p.height / 2, CENTER_RADIUS * 2);

    // Corner arcs (each corner is a quarter arc)
    const arcSize = 10;
    // Top-left corner
    p.arc(FIELD_LEFT, FIELD_TOP, arcSize, arcSize, 0, p.HALF_PI);
    // Top-right corner
    p.arc(FIELD_RIGHT, FIELD_TOP, arcSize, arcSize, p.HALF_PI, p.PI);
    // Bottom-left corner
    p.arc(FIELD_LEFT, FIELD_BOTTOM, arcSize, arcSize, p.radians(270), 0);
    // Bottom-right corner
    p.arc(FIELD_RIGHT, FIELD_BOTTOM, arcSize, arcSize, p.PI, p.radians(270));

    // Penalty area dimensions
    // Adjust these to your liking
    const penaltyBoxWidth = 120;
    const penaltyBoxHeight = 60;

    // Left penalty area (if you want a left/right orientation)
    // Top-left corner of the box
    const leftPenaltyX = FIELD_LEFT;
    const leftPenaltyY = CANVAS_HEIGHT / 2 - penaltyBoxHeight / 2;
    p.rect(leftPenaltyX, leftPenaltyY, penaltyBoxWidth, penaltyBoxHeight);

    // Right penalty area
    const rightPenaltyX = FIELD_RIGHT - penaltyBoxWidth;
    const rightPenaltyY = leftPenaltyY;
    p.rect(rightPenaltyX, rightPenaltyY, penaltyBoxWidth, penaltyBoxHeight);

    // Penalty arcs (semi-circles outside each penalty box)
    const penaltyArcRadius = 40;
    // Left side
    p.arc(
      leftPenaltyX + penaltyBoxWidth,
      p.height / 2,
      penaltyArcRadius,
      penaltyArcRadius,
      p.radians(270),
      p.radians(90) // vertical arc
    );
    // Right side
    p.arc(
      rightPenaltyX,
      p.height / 2,
      penaltyArcRadius,
      penaltyArcRadius,
      p.radians(90),
      p.radians(270)
    );

    // Goal area (simplified)
    // You can add posts more precisely.
    // Example: smaller box inside penalty box
    const goalBoxWidth = 50;
    const goalBoxHeight = 30;

    // Left side goal area
    p.rect(
      leftPenaltyX,
      p.height / 2 - goalBoxHeight / 2,
      goalBoxWidth,
      goalBoxHeight
    );
    // Right side goal area
    p.rect(
      rightPenaltyX - goalBoxWidth,
      p.height / 2 - goalBoxHeight / 2,
      goalBoxWidth,
      goalBoxHeight
    );
  };

  function drawPitchStripes() {
    // Draw horizontal stripes (optional)
    p.noStroke();
    for (let i = 0; i < FIELD_HEIGHT; i += 20) {
      // Alternate shading
      if ((i / 20) % 2 === 0) {
        p.fill(20, 120, 20);
      } else {
        p.fill(20, 100, 20);
      }
      p.rect(FIELD_LEFT, FIELD_TOP + i, FIELD_WIDTH, 20);
    }
  }

  // Return everything
  return;
}

export function Sketch() {
  return <ReactP5Wrapper sketch={sketch} />;
}

export default Sketch;
