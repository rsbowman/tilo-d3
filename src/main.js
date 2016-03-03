import d3 from "d3";

import {graphs} from "./example-graphs.js";
import {tilo_demo} from "./tilo-demo.js";

window.onload = function() {
  const container1 = d3.select("#demo1");
  container1.call(tilo_demo().data(graphs.graph1).show_edges(true));

  const container2 = d3.select("#demo2");
  container2.call(tilo_demo().data(graphs.graph1).show_boundaries(true));

  const container3 = d3.select("#demo3");
  container3.call(tilo_demo().data(graphs.graph2).show_boundaries(true));

  const container4 = d3.select("#demo4");
  container4.call(tilo_demo().data(graphs.graph2).show_boundaries(true)
                  .show_shifts(true));
}

