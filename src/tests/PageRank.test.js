import calculatePageRank from '../components/PageRank';

describe('PageRank Calculation', () => {
  it('calculates PageRank for a simple graph', () => {
    const graph = {
      nodes: [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },
      ],
    };

    const pageRank = calculatePageRank(graph);

    // You may add more specific assertions based on your expectations
    expect(pageRank.length).toEqual(graph.nodes.length);
  });
});
