import React, { useEffect } from "react";
import * as d3 from "d3";
import data from "./disjointdata";

const DisjointDrag = () => {
  useEffect(() => {
    const links = data.links.map(d => Object.create(d));
    const nodes = data.nodes.map(d => Object.create(d));
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const width = 960,
      height = 680;

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links).id(d => d.id)
      )
      .force("charge", d3.forceManyBody())
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("id", "disjointDragChart")
      .style("display", "none");
    const button = d3
      .select("body")
      .append("button")
      .attr("id", "dragBtn")
      .text("toggle drag disjoint force")
      .style("display", "block");
    //   add event listeners for toggle button
      document.querySelector("#dragBtn").onclick = () => {
        const chart = document.querySelector("#disjointDragChart");
        if (chart.style.display === "none") {
          chart.style.display = "block";
        } else {
          chart.style.display = "none";
        }
      };

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    const node = svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("fill", (d, i) => {
        return color(i % 2); //decide how many colors
      })
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    node.append("title").text(d => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("cx", d => d.x).attr("cy", d => d.y);
    });

    // invalidation.then(() => simulation.stop());

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  });
  return <div></div>;
};

export default DisjointDrag;
