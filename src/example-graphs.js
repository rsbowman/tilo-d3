const example_graph_data2 = {
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

export const graphs = {
  graph1: example_graph_data2,
  graph2: example_graph_data
};
