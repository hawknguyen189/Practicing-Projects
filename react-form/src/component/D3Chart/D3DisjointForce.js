import React, { useEffect } from "react";
import * as d3 from "d3";
import { Runtime, Inspector } from "@observablehq/runtime";
import {define} from "./notebook.js";
import data from "./graph.json";
console.log(data);
console.log(typeof data);
const D3DisjointForce = () => {
  let animationRef = React.createRef();
  useEffect(() => {
      const runtime = new Runtime();
      runtime.module(define, name => {
        if (name === "chart") {
          return new Inspector(animationRef.current);
        }
      });
  });
  return <div ref={animationRef}></div>;
};

export default D3DisjointForce;
