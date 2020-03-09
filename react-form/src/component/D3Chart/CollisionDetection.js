import React, { useEffect } from "react";
import * as d3 from "d3";

const CollisionDetection = () => {
  useEffect(() => {
    const width = 960,
      height = 500;
    const nodes = d3.range(200).map(() => ({ radius: Math.random() * 12 + 4 })),
      root = nodes[0],
      color = d3.scaleOrdinal(d3.schemeTableau10);
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("id", "collisionChart")
      .style("display", "none");
    const button = d3
      .select("body")
      .append("button")
      .attr("id", "collisionBtn")
      .text("toggle collision detection")
      .style("display", "block");

    document.querySelector("#collisionBtn").onclick = () => {
      const chart = document.querySelector("#collisionChart");
      if (chart.style.display === "none") {
        chart.style.display = "block";
      } else {
        chart.style.display = "none";
      }
    };
    root.radius = 0;
    root.fixed = true;

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "charge",
        d3.forceManyBody().strength((d, i) => {
          return i ? 0 : -2000;
        })
      )
      //   .force("collision", d3.forceCollide(5))
      //set force in the center
      .force("center", d3.forceCenter(width / 2, height / 2))
      //The decay factor is akin to atmospheric friction; after the application of any forces during a tick, each node’s velocity is multiplied by 1 - decay
      .velocityDecay(0.8)
      //forceX Y set gravity strength
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force("collide", forceCollide());

    svg
      .selectAll("circle")
      .data(nodes.slice(1))
      .enter()
      .append("circle")
      .attr("r", d => d.radius)
      .style("fill", (d, i) => {
        return color(i % 3);
      });

    simulation.on("tick", e => {
      svg
        .selectAll("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    svg.on("mousemove", function() {
      const p1 = d3.mouse(this);
      root.fx = p1[0];
      root.fy = p1[1];

      simulation.alpha(0.9).restart(); //reheat the simulation
    });

    function forceCollide() {
      const alpha = 0.5;
      let nodes;
      let maxRadius = 16;

      function force() {
        const quadtree = d3
          .quadtree()
          .x(d => d.x)
          .y(d => d.y)
          .addAll(nodes);
        for (const node of nodes) {
          var r = node.radius + maxRadius,
            nx1 = node.x - r,
            nx2 = node.x + r,
            ny1 = node.y - r,
            ny2 = node.y + r;

          // visit each squares in the quadtree
          // x1 y1 x2 y2 constitues the coordinates of the square
          // we want to check if each square is a leaf node (has data prop)
          quadtree.visit((visited, x1, y1, x2, y2) => {
            if (visited.data && visited.data !== node) {
              let x = node.x - visited.data.x,
                y = node.y - visited.data.y,
                l = Math.sqrt(x * x + y * y),
                r = node.radius + visited.data.radius;
              if (l < r) {
                // if quadtree leaf and input node collides
                l = ((l - r) / l) * alpha;
                node.x -= x *= l;
                node.y -= y *= l;
                visited.data.x += x;
                visited.data.y += y;
              }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
          });
        }
      }

      force.initialize = _ => (nodes = _);

      return force;
    }
  });
  return <div></div>;
};

export default CollisionDetection;
