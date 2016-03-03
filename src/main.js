import {intersect, shape} from "svg-intersections";
intersect.plugin( require("svg-intersections/lib/functions/bezier") );

const example_graph_data2 = {
  "nodes":[
    {"name":"Myriel","group":1},
    {"name":"Napoleon","group":1},
    {"name":"Mlle.Baptistine","group":1},
    {"name":"Mme.Magloire","group":1},
    {"name":"CountessdeLo","group":1},
    {"name":"Geborand","group":1},
    {"name":"Champtercier","group":1},
    {"name":"Cravatte","group":1},
    {"name":"Count","group":1},
    {"name":"OldMan","group":1},
    {"name":"Labarre","group":2},
    {"name":"Valjean","group":2},
    {"name":"Marguerite","group":3},
    {"name":"Mme.deR","group":2},
    {"name":"Isabeau","group":2},
    {"name":"Gervais","group":2},
    {"name":"Tholomyes","group":3},
    {"name":"Listolier","group":3},
    {"name":"Fameuil","group":3},
    {"name":"Blacheville","group":3},
    {"name":"Favourite","group":3},
    {"name":"Dahlia","group":3},
    {"name":"Zephine","group":3},
    {"name":"Fantine","group":3},
    {"name":"Mme.Thenardier","group":4},
    {"name":"Thenardier","group":4},
    {"name":"Cosette","group":5},
    {"name":"Javert","group":4},
    {"name":"Fauchelevent","group":0},
    {"name":"Bamatabois","group":2},
    {"name":"Perpetue","group":3},
    {"name":"Simplice","group":2},
    {"name":"Scaufflaire","group":2},
  ],
  "links":[
    {"source":1,"target":0,"value":1},
    {"source":2,"target":0,"value":8},
    {"source":3,"target":0,"value":10},
    {"source":3,"target":2,"value":6},
    {"source":4,"target":0,"value":1},
    {"source":5,"target":0,"value":1},
    {"source":6,"target":0,"value":1},
    {"source":7,"target":0,"value":1},
    {"source":8,"target":0,"value":2},
    {"source":9,"target":0,"value":1},
    {"source":11,"target":10,"value":1},
    {"source":11,"target":3,"value":3},
    {"source":11,"target":2,"value":3},
    {"source":11,"target":0,"value":5},
    {"source":12,"target":11,"value":1},
    {"source":13,"target":11,"value":1},
    {"source":14,"target":11,"value":1},
    {"source":15,"target":11,"value":1},
    {"source":17,"target":16,"value":4},
    {"source":18,"target":16,"value":4},
    {"source":18,"target":17,"value":4},
    {"source":19,"target":16,"value":4},
    {"source":19,"target":17,"value":4},
    {"source":19,"target":18,"value":4},
    {"source":20,"target":16,"value":3},
    {"source":20,"target":17,"value":3},
    {"source":20,"target":18,"value":3},
    {"source":20,"target":19,"value":4},
    {"source":21,"target":16,"value":3},
    {"source":21,"target":17,"value":3},
    {"source":21,"target":18,"value":3},
    {"source":21,"target":19,"value":3},
    {"source":21,"target":20,"value":5},
    {"source":22,"target":16,"value":3},
    {"source":22,"target":17,"value":3},
    {"source":22,"target":18,"value":3},
    {"source":22,"target":19,"value":3},
    {"source":22,"target":20,"value":4},
    {"source":22,"target":21,"value":4},
    {"source":23,"target":16,"value":3},
    {"source":23,"target":17,"value":3},
    {"source":23,"target":18,"value":3},
    {"source":23,"target":19,"value":3},
    {"source":23,"target":20,"value":4},
    {"source":23,"target":21,"value":4},
    {"source":23,"target":22,"value":4},
    {"source":23,"target":12,"value":2},
    {"source":23,"target":11,"value":9},
    {"source":24,"target":23,"value":2},
    {"source":24,"target":11,"value":7},
    {"source":25,"target":24,"value":13},
    {"source":25,"target":23,"value":1},
    {"source":25,"target":11,"value":12},
    {"source":26,"target":24,"value":4},
    {"source":26,"target":11,"value":31},
    {"source":26,"target":16,"value":1},
    {"source":26,"target":25,"value":1},
    {"source":27,"target":11,"value":17},
    {"source":27,"target":23,"value":5},
    {"source":27,"target":25,"value":5},
    {"source":27,"target":24,"value":1},
    {"source":27,"target":26,"value":1},
    {"source":28,"target":11,"value":8},
    {"source":28,"target":27,"value":1},
    {"source":29,"target":23,"value":1},
    {"source":29,"target":27,"value":1},
    {"source":29,"target":11,"value":2},
  ]
};

const example_graph_data3 = {
  "nodes": [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
  ],
  "links": [
    {source: 0, target: 1},
    {source: 0, target: 2},
    {source: 1, target: 2},
    {source: 1, target: 5},
    {source: 2, target: 3},
    {source: 3, target: 4},
    {source: 3, target: 5},
    {source: 4, target: 5}
  ]
};

const example_graph_data = {
  "nodes": [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10}],
  "links": [
    {source: 2, target: 4},
    {source: 3, target: 4},
    {source: 0, target: 1},
    {source: 2, target: 3},
    {source: 5, target: 9},
    {source: 6, target: 10},
    {source: 7, target: 8},
    {source: 7, target: 10},
    {source: 6, target: 9},
    {source: 3, target: 10},
    {source: 0, target: 3},
    {source: 5, target: 10},
    {source: 6, target: 7},
    {source: 4, target: 10},
    {source: 5, target: 6},
    {source: 0, target: 4},
    {source: 1, target: 2},
    {source: 1, target: 4},
    {source: 8, target: 9},
    {source: 3, target: 5},
    {source: 5, target: 8},
    {source: 8, target: 10},
    {source: 9, target: 10}
  ]
};

function array_str(arr) {
  return "[" + _.map(arr, row => "[" + row.join(",") + "]").join(",<br> ") + "]"
}

// idx is in [0, order.length - 1]
const boundary = (links, order, idx) =>
  links.filter(l => ((order[l.source] <= idx && order[l.target] > idx) ||
                     (order[l.target] <= idx && order[l.source] > idx))).length;

const boundaries = (links, order) =>
  _.range(order.length - 1).map(i => boundary(links, order, i));

const graph_width = (links, order) => _.sortBy(boundaries(links, order), x => -x);

function graph_info(graph_data, node_order) {
  const n = graph_data.nodes.length;
  const adjacency_matrix = _.range(n).map(i => _.range(n).map(() => 0));

  graph_data.links.forEach(l => {
    adjacency_matrix[node_order[l.source]][node_order[l.target]] = 1;
    adjacency_matrix[node_order[l.target]][node_order[l.source]] = 1;
  });

  const row_sums = adjacency_matrix.map(row => _.sum(row)),
    slope_matrix = _.range(n).map(i => _.range(n).map(() => row_sums[i]));

  for (let i = 0; i < n; ++i) {
    let slope = row_sums[i];
    for (let j = 0; j < n; ++j) {
      slope -= 2 * adjacency_matrix[i][j];
      slope_matrix[i][j] = slope;
    }
  }

  const bdries = boundaries(graph_data.links, node_order);
  const bdries_diff = _.zip(bdries.slice(1), bdries.slice(0, bdries.length - 1))
    .map(p => p[0] - p[1]);

  // TODO: similar code here; also, returning null?
  function find_min_flat(bd_diff, start_idx) {
    for (let i = start_idx; i < bd_diff.length; ++i) {
      if ((i === start_idx && bd_diff[i] >= 0) || (i > start_idx && bd_diff[i - 1] < 0 && bd_diff[i] >= 0)) {
        const first_nonzero_idx = _.findIndex(bd_diff.slice(i), x => x !== 0) + i;
        if (bd_diff[first_nonzero_idx] > 0) {
          return [i, first_nonzero_idx];
        }
      }
    }
    // see if there's one at the end
    const li = _.findLastIndex(bd_diff.slice(start_idx), x => x !== 0) + start_idx;
    if (bd_diff[li] < 0) {
      console.log("find min flat - at end!", li + 1, bd_diff.length);
      return [li + 1, bd_diff.length];
    }
    return null;
  }

  function find_max_flat(bd_diff, start_idx) {
    for (let i = start_idx; i < bd_diff.length; ++i) {
      if (bd_diff[i - 1] > 0 && bd_diff[i] <= 0) {
        const first_nonzero_idx = _.findIndex(bd_diff.slice(i), x => x !== 0) + i;
        if (bd_diff[first_nonzero_idx] < 0) {
          return [i, first_nonzero_idx];
        }
      }
    }
    return null;
  }

  function find_shift(min_idx1, max_idx1, max_idx2, min_idx2) {
    let shift = [];
    console.log("find shift", min_idx1, max_idx1, max_idx2, min_idx2);
    for (let k = min_idx1; k <= min_idx2 + 1; ++k) {
      if (k <= max_idx1) {
        console.log("fs, slope1 ", slope_matrix[k][max_idx1], slope_matrix[max_idx1 + 1][max_idx1], adjacency_matrix[max_idx1 + 1][k]);
      }
      if (k > max_idx2) {
        console.log("fs, slope2 ", slope_matrix[k][max_idx2], slope_matrix[max_idx2][max_idx2], adjacency_matrix[max_idx2][k]);
      }

      if (k <= max_idx1 && slope_matrix[k][max_idx1] > 0 &&
          slope_matrix[k][max_idx1] - slope_matrix[max_idx1 + 1][max_idx1] - 2*adjacency_matrix[max_idx1+1][k] > 0) {
        shift = [k, max_idx1 + 1];
        break;
      }
      if (k > max_idx2 && slope_matrix[k][max_idx2] < 0 &&
          -slope_matrix[k][max_idx2] + slope_matrix[max_idx2][max_idx2] - 2*adjacency_matrix[max_idx2][k] > 0) {
        shift = [k, max_idx2];
        break;
      }
    }
    return shift;
  }


  let max_flat, min_flat2;
  let start_idx = 0, shift, shifts = [];
  let min_flat1 = find_min_flat(bdries_diff, 0);

  while (true) {
    if (!min_flat1) break;
    max_flat = find_max_flat(bdries_diff, min_flat1[1]);
    if (!max_flat) break;
    min_flat2 = find_min_flat(bdries_diff, max_flat[1]);
    if (!min_flat2) break;
    shift = find_shift(min_flat1[1], max_flat[0], max_flat[1], min_flat2[0]);
    if (shift.length > 0)
      shifts.push(shift);
    min_flat1 = min_flat2;
  }

  return {
    adjacency_matrix: () => adjacency_matrix,
    slope_matrix: () => slope_matrix,
    boundaries: () => bdries,
    minmaxmin: () => [min_flat1, max_flat, min_flat2],
    shifts: () => shifts
  };
};

const translate = (x,y) => "translate(" + x + "," + y + ")";

const smooth_path = d3.svg.line().interpolate("basis")
  .x(d => d.x)
  .y(d => d.y);

function create_layout_data(graph_d) {
  const all_nodes = graph_d.nodes.slice(),
    graph_nodes = graph_d.nodes.slice(),
    fake_nodes = [],
    fake_links = [],
    bilinks = [];

  graph_d.links.forEach(function(link) {
    var s = graph_nodes[link.source],
        t = graph_nodes[link.target],
        i = {fake: true};
    all_nodes.push(i);
    fake_nodes.push(i);
    const l1 = {source: s, target: i, origin: s, dest: t},
      l2 = {source: i, target: t, origin: s, dest: t};
    fake_links.push(l1, l2);
    bilinks.push([s, i, t]);
  });

  return {
    all_nodes: all_nodes,
    graph_nodes: graph_nodes,
    fake_nodes: fake_nodes,
    fake_links: fake_links,
    bilinks: bilinks
  };
}

function tilo_demo() {
  let dom_root, svg_root, svg, graph_g, order_g;
  const margin = {top: 20, left: 20, right: 20, bottom: 20};

  const node_radius = 8;

  const color = {
    default: "#5a5a5a",
    selected: "red",
    cluster_1: "#af8dc3", // "#7b3294", //"#d01c8b",
    cluster_2: "#7fbf7b", //"#008837" //"#4dac26"
    edge_default: "#6b6b6b",
    edge_selected: "red"
  };

  const stroke_width = {
    default: 2,
    selected: 3
  };

  const draw_control_points = false; // draw bezier control pts for graph?
  const draw_wells = false;

  let node_order;

  let highlight_edges = false,
    show_boundaries = false;

  let ordered_nodes, order_x;

  function chart(selection) {
    selection.each(function() {
      dom_root = d3.select(this);
      svg_root = dom_root.append("svg");
      svg = svg_root.append("g").attr("transform", translate(margin.left, margin.top));

      const graph_data = create_layout_data(example_graph_data);

      const c_width = parseInt(dom_root.style("width")),
        c_height = 3*c_width / 4;

      const width = c_width - margin.left - margin.right,
        height = c_height - margin.top - margin.bottom;

      const graph_height = height * 1/3,
        order_height = height * 2/3;

      dom_root.style("height", c_height + "px");
      svg_root.attr("width", c_width).attr("height", c_height);

      graph_g = svg.append("g").attr("class", "graph-group");
      order_g = svg.append("g").attr("class", "order-group")
        .attr("transform", translate(0, graph_height));

      graph_g.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width)
        .attr("height", graph_height)
        .style("fill", "none")
        .style("stroke", "#ddd");

      order_g.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width)
        .attr("height", order_height)
        .attr("fill", "none")
        .style("stroke", "#ddd");

      ///////////////////////////////////
      // top: graph
      const graph_force = d3.layout.force()
        .charge(-1000)
        .friction(0.3)
        .linkDistance(10)
        .linkStrength(2)
        .gravity(0.3)
        .size([width, graph_height]);

      graph_force.nodes(graph_data.all_nodes)
        .links(graph_data.fake_links)
        .start();

      const graph_link_groups = graph_g.selectAll(".link-group")
        .data(graph_data.bilinks)
        .enter()
        .append("g")
        .attr("class", "link-group");

      graph_link_groups.append("path")
        .attr("class", d => "link-bg edge-" + d[0].id + "-" + d[2].id);

      if (highlight_edges) {
        graph_g.selectAll(".link-bg")
          .on("mouseover", d => highlight_edge(d[0].id, d[2].id))
          .on("mouseout", d => unhighlight_edge(d[0].id, d[2].id));
      }

      graph_link_groups.append("path")
        .attr("class", d => "link edge-" + d[0].id + "-" + d[2].id)

      const links = graph_link_groups.selectAll(".link"),
        links_bg = graph_link_groups.selectAll(".link-bg");

      const nodes = graph_g.selectAll(".node")
        .data(graph_data.graph_nodes)
        .enter()
        .append("circle")
        .attr("class", d => "node node-" + d.id)
        .attr("r", node_radius)
        .style("fill", color.default)
        .style("stroke-width", stroke_width.default)
        .style("stroke", d3.rgb(color.default).darker(2))
        .on("mouseover", d => highlight(d))
        .on("mouseout", d => unhighlight(d))
        .call(graph_force.drag);

      if (draw_control_points) { // draw bezier points
        const fake_nodes = graph_g.selectAll(".fake-node")
          .data(graph_data.fake_nodes)
          .enter()
          .append("circle")
          .attr("class", "fake-node")
          .attr("r", node_radius)
          .style("fill", "black")
          .style("opacity", 0.2);
      }

      graph_force.on("tick", (e) => {
        links.attr("d", smooth_path); //d => smooth_path(d));
        links_bg.attr("d", smooth_path);
        nodes.attr("transform", d => translate(d.x, d.y));
        if (draw_control_points)
          fake_nodes.attr("transform", d => translate(d.x, d.y));
      });

      /////////////////////
      // ordered node graph
      const padding = 40, node_y = order_height / 2;
      const graph_nodes = _.cloneDeep(example_graph_data.nodes),
        graph_links = _.cloneDeep(example_graph_data.links);

      const order_extent = d3.extent(graph_nodes, d => d.id);
      order_x = d3.scale.linear()
        .domain(order_extent)
        .range([padding, width - padding])
        .clamp(true);

      const order_delta_x = order_x(1) - order_x(0);
      node_order = _.shuffle(_.range(graph_nodes.length));

      graph_nodes.forEach(n => {
        n.well = order_x(node_order[n.id]);
        n.x = n.well;
        n.y = node_y;
      });

      const order_force = d3.layout.force()
        .nodes(graph_nodes)
        .links([])
        .charge(-100)
        .gravity(0)
        .size([width, order_height])
        .linkStrength(0.01)
        .friction(0.4)
        .on("tick", order_tick);

      const node_drag = d3.behavior.drag()
        .on("dragstart", dragstart)
        .on("drag", dragmove)
        .on("dragend", dragend);

      const internode_xs = _.range(node_order.length - 1)
        .map(x => order_x(x + 0.4));
      const internode_y_min = 20, internode_y_max = order_height - internode_y_min - 20;

      const internode_g = order_g.append("g").attr("class", "internode-lines");
      internode_g.selectAll("line").data(internode_xs)
        .enter().append("line")
        .attr("x1", d => d).attr("y1", internode_y_min)
        .attr("x2", d => d).attr("y2", internode_y_max)
        .style("stroke", "#e8e8e8").style("stroke-width", 2);

      if (draw_wells) {
        const wells = order_g.selectAll(".wells")
          .data(graph_nodes)
          .enter()
          .append("circle")
          .attr("class", "well")
          .attr("cx", d => order_x(d.id))
          .attr("cy", node_y)
          .attr("r", 15)
          .style("opacity", "0.1");
      }

      const link_groups = order_g.selectAll(".link-group")
        .data(graph_links)
        .enter()
        .append("g")
        .attr("class", "link-group");

      link_groups.append("path")
        .attr("class", d => "link-bg " + edge_name(d.source, d.target));

      if (highlight_edges) {
        order_g.selectAll(".link-bg")
          .on("mouseover", d => highlight_edge(d.source, d.target))
          .on("mouseout", d => unhighlight_edge(d.source, d.target));
      }

      link_groups.append("path")
        .attr("class", d => "link " + edge_name(d.source, d.target));

      const ordered_links = order_g.selectAll(".link"),
        ordered_link_bgs = order_g.selectAll(".link-bg");

      ordered_nodes = order_g.selectAll(".node")
        .data(graph_nodes)
        .enter()
        .append("circle")
        .attr("class", d => "node node-" + d.id)
        .attr("cx", d => order_x(d.id))
        .attr("cy", node_y)
        .attr("r", node_radius)
        .style("fill", color.default)
        .style("stroke-width", stroke_width.default)
        .style("stroke", d3.rgb(color.default).darker(2))
        .on("mouseover", d => highlight(d, true))
        .on("mouseout", d => unhighlight(d, true))
        .call(node_drag);

      ordered_nodes.append("title")
        .text(d => "node " + d.id);

      if (false) {
      const label_x = 5, label_y = order_height - 35;
      const bdries_label = order_g.append("text")
        .attr("class", "label")
        .attr("x", label_x)
        .attr("y", label_y)
        .attr("dy", ".35em")
        .text("Boundaries:");

      const label_bbox = bdries_label.node().getBBox(),
        label_y2 = label_y + label_bbox.height + 2,
        label_x2 = label_bbox.x + label_bbox.width + 5;
      order_g.append("text")
        .attr("class", "label")
        .attr("x", label_x)
        .attr("y", label_y2)
        .attr("dy", ".35em")
        .text("Width:");

      const bdry_text = order_g.append("text")
        .attr("class", "label")
        .attr("x", label_x2)
        .attr("y", label_y)
        .attr("dy", ".35em");
      const width_text = order_g.append("text")
        .attr("class", "label")
        .attr("x", label_x2)
        .attr("y", label_y2)
        .attr("dy", ".35em");
      }

      function update_boundaries() {
        const bdries = boundaries(graph_links, node_order);
        const data = _.zip(internode_xs, bdries).map(p => (
          {x: p[0], text: "" + p[1]}));

        const texts = internode_g.selectAll("text").remove();
        const join = internode_g.selectAll("text").data(data);
        join.enter()
          .append("text");
        join.attr("x", d => d.x).attr("y", internode_y_max + 16)
          .attr("class", "label")
          .attr("dy", ".35em")
          .style("text-anchor", "middle")
          .text(d => d.text);
        join.exit().remove();

        if (false) {
          bdry_text.text("" + boundaries(graph_links, node_order));
          width_text.text("" + graph_width(graph_links, node_order));
        }
      }

      order_force.start();
      order_tick();

      function order_tick() {
        // ordered_links.attr("d", d => smooth_path(d));
        // ordered_links.attr("d", d => arc_path(d));
        // ordered_links.attr("d", d => quad_path(d, Math.abs(d.source.x - d.target.x) * 0.6));
        const x_dist = d => Math.abs(graph_nodes[d.source].x - graph_nodes[d.target].x);
        const M = d => (x_dist(d) / order_delta_x - 1) * 40
        ordered_links.attr("d", d => quad_path(d, M(d)));
        ordered_link_bgs.attr("d", d => quad_path(d, M(d)));

        ordered_nodes.each(d => { d.well = order_x(node_order[d.id]); });
        ordered_nodes.each(gravity(0.5 * order_force.alpha()))
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
        if (show_boundaries) {
          update_boundaries();
        }
      }

      function gravity(alpha) {
        return function(d) {
          if (!d.fixed) {
            d.y += (node_y - d.y) * alpha;
            d.x += (d.well - d.x) * alpha;
          }
        };
      }

      function dragstart(d, i) {
        unhighlight(d, true);
        d.fixed = true;
        ordered_nodes.on("mouseover", null)
          .on("mouseout", null);
      }

      function dragmove(d, i) {
        d.px += d3.event.dx;
        d.py += d3.event.dy;
        d.x += d3.event.dx;
        d.y += d3.event.dy;
        update_order(d);
        order_force.resume();
        order_tick();
      }

      function update_order(d) {
        const new_idx = Math.round((d.x - order_x(0)) / order_delta_x),
          old_idx = node_order[d.id],
          old_idx_idx = node_order.indexOf(old_idx);

        if (old_idx < new_idx) {
          for (let i = 0; i < node_order.length; ++i) {
            if (old_idx + 1 <= node_order[i] && node_order[i] <= new_idx)
              node_order[i] += -1;
          }
          node_order[old_idx_idx] = new_idx;
        } else if (new_idx < old_idx) {
          for (let i = 0; i < node_order.length; ++i) {
            if (new_idx <= node_order[i] && node_order[i] <= old_idx - 1)
              node_order[i] += 1;
          }
          node_order[old_idx_idx] = new_idx;
        }

        // if (old_idx !== new_idx) {
        //   const info = graph_info(example_graph_data, node_order);
        //   info_div.html("" + info.shifts());
        // }
      }

      // too slow; also, doesn't work...
      function update_intersections() {
        const pts = [];
        internode_xs.forEach((x, i) => {
          ordered_links.each(function(d) {
            if (node_order[d.source] <= i && node_order[d.target] > i) {
              const path = d3.select(this);
              const s1 = shape("path", {d: path.attr("d")}),
                s2 = shape("line", {x1: x, y1: internode_y_min, x2: x, y2: internode_y_max});
              const isections = intersect(s1, s2);
              isections.points.forEach(p => pts.push({x: p.x, y: p.y}));
            }
          });
        });

        const join = order_intersections.selectAll("circle").data(pts);
        join.enter()
          .append("circle");
        join.attr("cx", d => d.x)
          .attr("cy", d => d.y)
          .attr("r", 3);
        join.exit().remove();
      }

      function dragend(d, i) {
        d.fixed = false;
        update_order(d);
        order_tick();
        ordered_nodes.on("mouseover", d => highlight(d, true))
          .on("mouseout", d => unhighlight(d, true));
        order_force.start();
      }

      // http://stackoverflow.com/q/25595387
      function quad_path(link_data, M) {
        const src = graph_nodes[link_data.source],
          dest = graph_nodes[link_data.target],
          s_x = src.x, s_y = src.y,
          d_x = dest.x, d_y = dest.y;

          const Jx = (d_x + s_x) / 2,
            Jy = (d_y + s_y) / 2;

          const a = d_x - s_x,
            asign = (a < 0 ? -1 : 1),
            b = d_y - s_y,
            theta = Math.atan(b / a);

          const costheta = asign * Math.cos(theta),
            sintheta = asign * Math.sin(theta),
            c = M * sintheta,
            d = M * costheta;

          const Kx = Jx - c,
            Ky = Jy + d;

          return "M" + s_x + "," + s_y +
                 "Q" + Kx + "," + Ky +
                 " " + d_x + "," + d_y;
      }

      // or see http://stackoverflow.com/questions/17156283/d3-js-drawing-arcs-between-two-points-on-map-from-file
      function arc_path(d, scale) {
        const dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          l = Math.sqrt(dx * dx + dy * dy),
          rx = l,
          ry = 1.1*l;

        console.log(rx, ry, "arc");
        return "M" + d.source.x + "," + d.source.y + "A" + rx + "," + ry +
          " 0 0,1 " + d.target.x + "," + d.target.y;
      }

      function highlight(d, mark_clusters) {
        const pos = node_order[d.id];
        const fill = d => node_order[d.id] < pos ?
          color.cluster_1 : color.cluster_2;

        if (mark_clusters) {
          svg.selectAll(".node:not(.node-" + d.id + ")")
            // .transition()
            .style("fill", fill)
            .style("stroke", d => d3.rgb(fill(d)).darker(2))
            .style("stroke-width", stroke_width.default);
        }
        svg.selectAll(".node-" + d.id)
          .transition()
          .style("fill", fill)
          .style("stroke-width", stroke_width.selected)
          .style("stroke", color.selected);
      }

      function unhighlight(d, mark_clusters) {
        svg.selectAll(".node")
          .transition()
          .style("fill", color.default)
          .style("stroke", color.default)
          .style("stroke-width", stroke_width.default);
      }

      function edge_name(src, dest) {
        return "edge-" + src + "-" + dest;
      }

      function highlight_edge(src, dest) {
        console.log("highlight", src, dest);
        svg.selectAll(".link." + edge_name(src, dest))
          .transition()
          .style("stroke", color.edge_selected)
          .style("stroke-width", "3px");
      }

      function unhighlight_edge(src, dest) {
        console.log("unh.", src, dest);
        svg.selectAll(".link." + edge_name(src, dest))
          .transition()
          .style("stroke", color.edge_default)
          .style("stroke-width", "1.5px");
      }
    });
  }

  return chart;
}

const vis = d3.select("#vis-container");
const tilo = tilo_demo();
vis.call(tilo);
