import React, { useEffect } from "react";
import * as d3 from "d3";
const w = 700;
const h = 300;
const data = [12, 5, 6, 6, 9, 10];
const D3Chart = () => {
  useEffect(() => {
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h-d*10)
      .attr("width", 65)
      .attr("height", (d, i) => d*10)
      .attr("fill", "green");
      svg
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(d => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - 10 * d - 3);
  });
  return <div>d3 chart</div>;
};

export default D3Chart;
