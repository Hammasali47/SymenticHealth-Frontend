const calculatePageRank = (graph) => {
    const dampingFactor = 0.85;
    const maxIterations = 100;
    const tolerance = 1e-6;
  
    const nodes = graph.nodes;
    const edges = graph.edges;
  
    const initialPageRank = 1 / nodes.length;
    let pageRank = Array.from({ length: nodes.length }, () => initialPageRank);
  
    for (let iteration = 0; iteration < maxIterations; iteration++) {
      const newPageRank = Array.from({ length: nodes.length }, () => (1 - dampingFactor) / nodes.length);
  
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < edges.length; j++) {
          if (edges[j].to === i + 1) {
            newPageRank[i] += dampingFactor * (pageRank[edges[j].from - 1] / nodes.length);
          }
        }
      }
  
      if (converged(pageRank, newPageRank, tolerance)) {
        break;
      }
  
      pageRank = newPageRank;
    }
  
    return pageRank;
  };
  
  const converged = (prevPageRank, newPageRank, tolerance) => {
    for (let i = 0; i < prevPageRank.length; i++) {
      if (Math.abs(prevPageRank[i] - newPageRank[i]) > tolerance) {
        return false;
      }
    }
    return true;
  };
  
  export default calculatePageRank;
  